/**
 * One-shot restructure of the content model.
 *
 * Takes the CMS-shaped JSON plus the split-out MDX bodies and produces:
 *
 *   src/content/blog/<slug>.mdx     frontmatter + body (documents)
 *   src/content/projects/<slug>.ts  typed modules (structured records with
 *                                   several rich-text fields, which do not fit
 *                                   a single MDX body)
 *   src/content/site.ts             nav, favicon, companies
 *   src/content/testimonials.ts     the carousel collection
 *
 * Page copy is not emitted here: home, about and the blog index become real
 * routes under app/, with their copy inline.
 *
 *   node lib/restructure-content.mjs
 */
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import YAML from "yaml"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const dataDir = path.join(root, "src/content/data")
const read = (name) => JSON.parse(fs.readFileSync(path.join(dataDir, `${name}.json`), "utf8"))

/** Drop the CMS scaffolding from an image. */
const image = (img) =>
  img && { url: img.url, alt: img.alt ?? "", width: img.width, height: img.height }

const seo = (s) =>
  s && {
    title: s.title,
    description: s.description,
    // Some records have no dedicated OG image; omit rather than emit null.
    ...(s.image ? { image: image(s.image) } : {}),
  }

const company = (c) =>
  c && {
    name: c.name,
    logo: image(c.logo),
    ...(c.website ? { website: c.website } : {}),
    ...(c.trust === true ? { trusted: true } : {}),
  }

const tech = (t) => ({ title: t.title, thumbnail: image(t.thumbnail) })

const switchback = (s) => ({
  heading: s.heading,
  ...(s.headingAs ? { headingAs: s.headingAs } : {}),
  body: s.body,
  ...(s.image ? { image: image(s.image) } : {}),
  ...(s.designAccent ? { designAccent: s.designAccent } : {}),
  ...(s.reverse ? { reverse: s.reverse } : {}),
  ...(s.sectionId ? { sectionId: s.sectionId } : {}),
  ...(s.bgColor !== undefined && s.bgColor !== null ? { bgColor: s.bgColor } : {}),
})

/* ---------------------------------------------------------------- blog ---- */

const writeBlog = () => {
  const posts = read("blog")
  const dir = path.join(root, "src/content/blog")

  for (const post of posts) {
    const file = path.join(dir, `${post.slug}.mdx`)
    const body = stripCmsAttrs(fs.readFileSync(file, "utf8"))

    // minutesToRead and headings are derived at read time now, so they are not
    // written back out; they went stale the moment the prose was edited.
    const frontmatter = {
      title: post.title,
      subtitle: post.subtitle,
      publishDate: post.publishDate,
      excerpt: post.excerpt,
      featuredImage: image(post.featuredImage),
      seo: seo(post.seo),
    }

    const yaml = YAML.stringify(frontmatter, { lineWidth: 0, defaultStringType: "QUOTE_DOUBLE", defaultKeyType: "PLAIN" })
    fs.writeFileSync(file, `---\n${yaml}---\n\n${body.trimStart()}`)
  }
  return posts.length
}

/* ------------------------------------------------------------ projects ---- */

const ts = (value, indent = 2) => {
  const pad = " ".repeat(indent)
  if (value === undefined) return "undefined"
  if (typeof value === "string") {
    // Rich text keeps its own tagged template so it stays readable and highlighted.
    return JSON.stringify(value)
  }
  if (typeof value !== "object" || value === null) return JSON.stringify(value)
  if (Array.isArray(value)) {
    if (!value.length) return "[]"
    return `[\n${value.map((v) => pad + "  " + ts(v, indent + 2)).join(",\n")},\n${pad}]`
  }
  const entries = Object.entries(value).filter(([, v]) => v !== undefined)
  return `{\n${entries
    .map(([k, v]) => `${pad}  ${k}: ${ts(v, indent + 2)}`)
    .join(",\n")},\n${pad}}`
}

/** Rich text is emitted as an md`` template so it reads as prose in the editor. */
const stripCmsAttrs = (value) =>
  value.replace(/<Btn (?:__typename="[^"]*" )?(?:id="[^"]*" )?/g, "<Btn ")

const mdLiteral = (value, indent) => {
  const pad = " ".repeat(indent)
  value = stripCmsAttrs(value)
  const escaped = value.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${")
  const lines = escaped.trimEnd().split("\n")
  return `mdx\`\n${lines.map((l) => (l ? pad + l : "")).join("\n")}\n${" ".repeat(indent - 2)}\``
}

const writeProjects = () => {
  const projects = read("projects")
  const dir = path.join(root, "src/content/projects")
  fs.mkdirSync(dir, { recursive: true })

  for (const p of projects) {
    const record = {
      slug: p.slug,
      title: p.title,
      subtitle: p.subtitle,
      heading: p.heading,
      bannerImage: image(p.bannerImage),
      techStack: (p.techStack ?? []).map(tech),
      switchbacks: (p.switchbacks?.switchbacks ?? []).map(switchback),
      seo: seo(p.seo),
    }

    const source = `import { defineProject, mdx } from "src/content/schema"

export default defineProject({
  slug: ${JSON.stringify(record.slug)},
  title: ${JSON.stringify(record.title)},
  subtitle: ${JSON.stringify(record.subtitle)},
  heading: ${JSON.stringify(record.heading)},
  excerpt: ${mdLiteral(p.excerpt ?? "", 4)},
  body: ${mdLiteral(p.body ?? "", 4)},
  extraInformation: ${mdLiteral(p.extraInformation ?? "", 4)},
  bannerImage: ${ts(record.bannerImage, 2)},
  techStack: ${ts(record.techStack, 2)},
  switchbacks: ${tsSwitchbacks(record.switchbacks)},
  seo: ${ts(record.seo, 2)},
})
`
    fs.writeFileSync(path.join(dir, `${p.slug}.ts`), source)
  }
  return projects.length
}

/** Switchbacks hold rich text, so their bodies use the md`` template too. */
const tsSwitchbacks = (list) => {
  if (!list.length) return "[]"
  return `[\n${list
    .map((s) => {
      const { body, ...rest } = s
      const fields = Object.entries(rest)
        .map(([k, v]) => `      ${k}: ${ts(v, 6)}`)
        .join(",\n")
      return `    {\n${fields},\n      body: ${mdLiteral(body ?? "", 8)},\n    }`
    })
    .join(",\n")},\n  ]`
}

/* ---------------------------------------------------- site + testimonials ---- */

const writeSite = () => {
  const site = read("site")
  const companies = read("companies").filter((c) => c.trust === true).map(company)
  const links = (site.globalNav?.links ?? []).map((l) => ({
    label: l.label,
    url: l.url,
    ...(l.variant && l.variant !== "text" ? { variant: l.variant } : {}),
  }))

  const source = `import type { Company, Image, Link } from "src/content/schema"

/** The logo used in the nav and footer. */
export const favicon: Image = ${ts(image(site._site.favicon), 0)}

export const navLinks: Link[] = ${ts(links, 0)}

/** Shown in the home page trust bar. */
export const companies: Company[] = ${ts(companies, 0)}
`
  fs.writeFileSync(path.join(root, "src/content/site.ts"), source)
  return { links: links.length, companies: companies.length }
}

const writeTestimonials = () => {
  const pages = read("pages")
  const home = pages.find((p) => p.slug === "home")
  const carousel = home.components.find((c) => c.__typename === "CarouselRecord")

  const cards = carousel.cards.map((card) => ({
    person: {
      firstName: card.person.firstName,
      lastName: card.person.lastName,
      role: card.person.role,
      ...(card.person.website ? { website: card.person.website } : {}),
      ...(card.person.thumbnail ? { thumbnail: image(card.person.thumbnail) } : {}),
      ...(card.person.company ? { company: company(card.person.company) } : {}),
    },
    quote: card.quote,
  }))

  const source = `import { mdx, type Testimonial } from "src/content/schema"

export const testimonials: Testimonial[] = [
${cards
  .map(
    (c) => `  {
    person: ${ts(c.person, 4)},
    quote: ${mdLiteral(c.quote, 6)},
  }`
  )
  .join(",\n")},
]
`
  fs.writeFileSync(path.join(root, "src/content/testimonials.ts"), source)
  return cards.length
}

/** The about page's feature cards -- a collection, so it gets its own module. */
const writeAbout = () => {
  const about = read("pages").find((p) => p.slug === "about")
  const fh = about.components.find((c) => c.__typename === "FeatureHighlightRecord")

  const cards = fh.cards.map((c) => ({ heading: c.heading, image: image(c.image) }))
  const source = `import { type Image, mdx } from "src/content/schema"

export interface FeatureCard {
  heading: string
  body: string
  image: Image
}

export const aboutHeading = ${JSON.stringify(fh.heading)}

export const aboutBody = ${mdLiteral(fh.body, 2)}

export const featureCards: FeatureCard[] = [
${fh.cards
  .map(
    (c, i) => `  {
    heading: ${JSON.stringify(c.heading)},
    image: ${ts(cards[i].image, 4)},
    body: ${mdLiteral(c.body, 6)},
  }`
  )
  .join(",\n")},
]
`
  fs.writeFileSync(path.join(root, "src/content/about.ts"), source)
  return fh.cards.length
}

const main = () => {
  console.log("about cards   ", writeAbout())
  console.log("blog posts    ", writeBlog())
  console.log("projects      ", writeProjects())
  console.log("testimonials  ", writeTestimonials())
  console.log("site          ", JSON.stringify(writeSite()))
}

main()
