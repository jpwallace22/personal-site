/**
 * One-shot export of DatoCMS content into src/content/data/*.json.
 *
 * Runs through the real Apollo client so the captured JSON is byte-identical to
 * what the app receives today -- most importantly InMemoryCache's __typename
 * injection, which five runtime dispatch points depend on (ComponentRenderer,
 * Carousel, nextProjectFromPage, inlineBlocks, inlineRecords) and which also
 * renders into the DOM as an attribute on spread-props elements.
 *
 * Queries below select the *union* of every field the app's own queries ask for
 * per record type, reusing the repo's own .gql fragments so field sets match
 * exactly. Delete this script once the migration is verified; it is recoverable
 * from git history.
 *
 *   NEXT_PUBLIC_DATO_CMS=... node lib/export-content.mjs
 */
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import apollo from "@apollo/client/core/core.cjs"
import { Kind, parse, visit } from "graphql"

const { ApolloClient, HttpLink, InMemoryCache } = apollo

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const outDir = path.join(root, "src/content/data")

const DATO_CMS_URI = "https://graphql.datocms.com"
const DATO_CMS_ENVIRONMENT = "new"

const token = process.env.NEXT_PUBLIC_DATO_CMS
if (!token) {
  console.error("NEXT_PUBLIC_DATO_CMS is not set")
  process.exit(1)
}

/** Every fragment defined anywhere in the repo, by name. */
const collectFragments = () => {
  const files = []
  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) walk(full)
      else if (entry.name.endsWith(".gql")) files.push(full)
    }
  }
  walk(path.join(root, "src"))

  const fragments = new Map()
  for (const file of files) {
    for (const def of parse(fs.readFileSync(file, "utf8")).definitions) {
      if (def.kind === Kind.FRAGMENT_DEFINITION) fragments.set(def.name.value, def)
    }
  }
  return fragments
}

/** Transitive closure of fragments a document actually spreads. */
const withFragments = (doc, fragments) => {
  const needed = new Map()
  const queue = []
  visit(doc, { FragmentSpread: (n) => void queue.push(n.name.value) })

  while (queue.length) {
    const name = queue.pop()
    if (needed.has(name)) continue
    const def = fragments.get(name)
    if (!def) throw new Error(`Unknown fragment: ${name}`)
    needed.set(name, def)
    visit(def, { FragmentSpread: (n) => void queue.push(n.name.value) })
  }

  return { ...doc, definitions: [...doc.definitions, ...needed.values()] }
}

const fragments = collectFragments()

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: DATO_CMS_URI,
    headers: { authorization: `Bearer ${token}`, "X-Environment": DATO_CMS_ENVIRONMENT },
    fetch,
  }),
})

const run = async (source) => {
  const query = client.cache.transformDocument(withFragments(parse(source), fragments))
  const { data, error } = await client.query({ query, fetchPolicy: "no-cache" })
  if (error) throw error
  return data
}

/**
 * Union of every field the app selects per record type:
 *   pages    Page
 *   blog     Blog + BlogCard.excerpt + BlogMetaData.seo
 *   projects Project + ProjectCard.excerpt + ProjectPageMetadata.seo
 *   info     Info
 */
const queries = {
  pages: `query ExportPages { allTemplatePages { ...Page } }`,

  blog: `query ExportBlog {
    allTemplateBlogPosts {
      ...Blog
      excerpt { value }
      seo { description title image { ...Image } }
    }
  }`,

  projects: `query ExportProjects {
    allTemplateProjects {
      ...Project
      excerpt { value links }
      seo { title description image { ...Image } }
    }
  }`,

  info: `query ExportInfo { allTemplateInfos { ...Info } }`,

  companies: `query ExportCompanies { allCompanies { ...Company } }`,

  site: `query ExportSite {
    globalNav { ...GlobalNav }
    _site { favicon { ...Image } }
  }`,
}

/** Guard against the silent failure mode: a payload with no __typename renders blank pages. */
const assertTypenames = (name, data) => {
  const json = JSON.stringify(data)
  const count = (json.match(/"__typename"/g) || []).length
  if (count === 0)
    throw new Error(`${name}: no __typename in payload -- Apollo transform did not run`)
  return count
}

const main = async () => {
  fs.mkdirSync(outDir, { recursive: true })

  for (const [name, source] of Object.entries(queries)) {
    const data = await run(source)
    const payload = name === "site" ? data : Object.values(data)[0]
    const count = assertTypenames(name, payload)
    const file = path.join(outDir, `${name}.json`)
    fs.writeFileSync(file, `${JSON.stringify(payload, null, 2)}\n`)

    const size = (fs.statSync(file).size / 1024).toFixed(1)
    const records = Array.isArray(payload) ? `${payload.length} records` : "object"
    console.log(
      `${name.padEnd(10)} ${records.padEnd(12)} ${size.padStart(7)} KB  ${count} __typename`
    )
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
