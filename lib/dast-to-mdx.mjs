/**
 * One-shot conversion of DatoCMS structured text (DAST) into MDX.
 *
 * Long-form documents (blog bodies, the info page) become .mdx files under
 * src/content/. Every other rich-text field is short component copy, so it stays
 * inline in the JSON as an MDX string rather than becoming its own tiny file.
 * Both render through the same pipeline.
 *
 * The output deliberately reproduces the DAST renderer's structure rather than
 * idiomatic markdown, because the rendered DOM must not change:
 *
 *   - lists are emitted LOOSE (blank line between items) so each item's content
 *     is wrapped in a paragraph, matching DAST's listItem > paragraph nesting
 *   - reading time is precomputed here with the original DatoCMS plain-text
 *     renderer, so the "N minute read" copy is identical by construction
 *   - heading ids are precomputed with the original headingToId logic
 *
 *   node lib/dast-to-mdx.mjs
 */
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { render as toPlainText } from "datocms-structured-text-to-plain-text"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const dataDir = path.join(root, "src/content/data")

/* ------------------------------------------------------------------ ids ---- */

/** Verbatim port of src/utils/toKebabCase.ts */
const convertToKebabCase = (str) =>
  str
    ?.replace(/([a-z\d])([A-Z])/g, "$1-$2")
    ?.replace(/([A-Z]+)([A-Z][a-z\d]+)/g, "$1-$2")
    ?.replace(/_/g, "-")
    ?.replace(/\s+/g, "-")
    ?.toLowerCase() ?? null

/** Verbatim port of StructuredText/utils/headingToId.ts -- first span only. */
const headingToId = (node) => {
  const headingContent = node && String(node.children[0]?.value ?? "")
  return convertToKebabCase(headingContent.replaceAll(/[^a-zA-Z0-9]/g, "")) ?? undefined
}

/* -------------------------------------------------------------- escaping ---- */

/** `<` and `{` would start JSX/expressions in MDX; the rest could start markup. */
const escapeText = (text) =>
  text
    .replace(/([\\`*_[\]<>{}])/g, "\\$1")
    .replace(/^(\s*)([#>+-])/gm, "$1\\$2")
    .replace(/^(\s*\d+)\./gm, "$1\\.")

/** Text inside inline HTML is still MDX, so `<` and `{` stay dangerous. */
const escapeHtml = (text) => text.replace(/([<>{}])/g, "\\$1")

/** Markdown trims whitespace at block edges; entities survive it. */
const preserveEdgeSpace = (text) =>
  text.replace(/^[ \t]+/, (m) => "&#x20;".repeat(m.length)).replace(/[ \t]+$/, (m) => "&#x20;".repeat(m.length))

/** JSX attribute values are parsed like HTML, not JSON: quotes need entities,
 *  not backslashes, or the attribute terminates early. */
const attr = (value) =>
  `"${String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/\s*\n\s*/g, " ")}"`

/* --------------------------------------------------------------- inline ---- */

const MARKS = {
  strong: (s) => `**${s}**`,
  emphasis: (s) => `*${s}*`,
  underline: (s) => `<u>${s}</u>`,
  strikethrough: (s) => `~~${s}~~`,
  highlight: (s) => `<mark>${s}</mark>`,
}

/** Tag per mark, and the nesting the DatoCMS renderer produced: code outermost,
 *  strong innermost (`<code><strong>x</strong></code>`, `<em><strong>x</strong></em>`). */
const MARK_TAGS = {
  code: "Code",
  underline: "u",
  strikethrough: "del",
  highlight: "mark",
  emphasis: "em",
  strong: "strong",
}
const MARK_ORDER = ["code", "underline", "strikethrough", "highlight", "emphasis", "strong"]

/** Markdown emphasis cannot hug whitespace (`***: ***` is literal), and it cannot
 *  express mark nesting order, so those spans fall back to inline HTML. */
const needsHtmlMarks = (node) =>
  node.marks?.length > 1 || (node.marks?.length === 1 && /^\s|\s$/.test(node.value))

const renderSpan = (node) => {
  if (needsHtmlMarks(node)) {
    const inner = (node.marks.includes("code") ? escapeHtml(node.value) : escapeText(node.value)).replace(
      /\n/g,
      "<br />"
    )
    return MARK_ORDER.filter((m) => node.marks.includes(m))
      .reverse()
      .reduce((acc, mark) => `<${MARK_TAGS[mark]}>${acc}</${MARK_TAGS[mark]}>`, inner)
  }

  // A code mark is a literal span; it must not be markdown-escaped inside backticks.
  if (node.marks?.includes("code")) {
    const fence = "`".repeat(Math.max(1, ...[...node.value.matchAll(/`+/g)].map((m) => m[0].length)) + 1)
    let out = `${fence}${node.value}${fence}`
    for (const mark of node.marks) {
      if (mark !== "code" && MARKS[mark]) out = MARKS[mark](out)
    }
    return out
  }

  let out = escapeText(node.value).replace(/\n/g, "<br />")
  for (const mark of node.marks ?? []) {
    if (MARKS[mark]) out = MARKS[mark](out)
  }
  return out
}

const renderInline = (nodes, ctx) =>
  (nodes ?? [])
    .map((node) => {
      switch (node.type) {
        case "span":
          return renderSpan(node)
        case "link":
          return `[${renderInline(node.children, ctx)}](${node.url})`
        case "inlineItem":
          return renderInlineItem(node, ctx)
        default:
          throw new Error(`Unhandled inline node: ${node.type}`)
      }
    })
    .join("")

/**
 * DAST inline records are all ButtonRecords. The old renderer paired the first
 * two adjacent buttons into one flex wrapper and dropped the second render call,
 * so the pairing is resolved here and emitted explicitly.
 */
const renderInlineItem = (node, ctx) => {
  const record = ctx.links.find((link) => link.id === node.item)
  if (!record) throw new Error(`Missing linked record: ${node.item}`)
  if (ctx.skipButtonIds.has(record.id)) return ""

  const button = (b) =>
    `<Btn __typename=${attr(b.__typename)} id=${attr(b.id)} variant=${attr(b.variant)} label=${attr(b.label)} url=${attr(b.url)}` +
    ` startIcon=${attr(b.startIcon)} endIcon=${attr(b.endIcon)}` +
    `${b.disabled ? " disabled=\"true\"" : ""} />`

  if (ctx.buttonPair && ctx.buttonPair[0].id === record.id) {
    return `<BtnGroup>${button(ctx.buttonPair[0])}${button(ctx.buttonPair[1])}</BtnGroup>`
  }
  return button(record)
}

/* ---------------------------------------------------------------- blocks ---- */

const indent = (text, pad) =>
  text
    .split("\n")
    .map((line) => (line ? pad + line : line))
    .join("\n")

const renderBlock = (node, ctx) => {
  switch (node.type) {
    case "paragraph": {
      const inline = renderInline(node.children, ctx)
      if (!inline) return "<p></p>"

      // The old paragraph rule rendered a div whenever content did not start with
      // plain text. Where the opener is raw JSX, MDX adds no wrapper of its own,
      // so it is written explicitly.
      const [first] = node.children
      const opensWithJsx =
        first && (first.type === "inlineItem" || (first.type === "span" && needsHtmlMarks(first)))

      return opensWithJsx ? `<div>${inline}</div>` : preserveEdgeSpace(inline)
    }

    case "heading": {
      const id = headingToId(node)
      if (id) ctx.headings.push({ level: node.level, id, text: plainInline(node.children) })
      return `${"#".repeat(node.level)} ${preserveEdgeSpace(renderInline(node.children, ctx))}`
    }

    case "code": {
      const fence = "`".repeat(Math.max(3, ...[...node.code.matchAll(/`{3,}/g)].map((m) => m[0].length + 1)))
      return `${fence}${node.language ?? ""}\n${node.code}\n${fence}`
    }

    case "blockquote": {
      const body = renderBlocks(node.children, ctx)
      // Markdown blockquotes cannot carry DAST's attribution, so those become JSX.
      if (node.attribution) {
        return `<Quote attribution=${attr(node.attribution)}>\n\n${body}\n\n</Quote>`
      }
      return body
        .split("\n")
        .map((line) => (line ? `> ${line}` : ">"))
        .join("\n")
    }

    case "list": {
      const bullet = (i) => (node.style === "numbered" ? `${i + 1}. ` : "- ")
      // Emitted loose: a blank line between items keeps each item's content in a
      // paragraph, which is what the DAST renderer produced.
      return node.children
        .map((item, i) => {
          const marker = bullet(i)
          const body = renderBlocks(item.children, ctx)
          return marker + indent(body, " ".repeat(marker.length)).slice(marker.length)
        })
        .join("\n\n")
    }

    case "block": {
      const media = ctx.blocks.find((b) => b.id === node.item)?.media
      if (!media) throw new Error(`Missing block record: ${node.item}`)
      return (
        `<Figure src=${attr(media.url)} alt=${attr(media.alt ?? "")}` +
        ` width=${attr(media.width)} height=${attr(media.height)} />`
      )
    }

    case "thematicBreak":
      return "---"

    default:
      throw new Error(`Unhandled block node: ${node.type}`)
  }
}

const renderBlocks = (nodes, ctx) => (nodes ?? []).map((n) => renderBlock(n, ctx)).join("\n\n")

/** Plain text of inline nodes, for heading labels. */
const plainInline = (nodes) =>
  (nodes ?? [])
    .map((n) => (n.type === "span" ? n.value : n.children ? plainInline(n.children) : ""))
    .join("")

/* ------------------------------------------------------------- conversion ---- */

/** Reproduces inlineRecords.tsx buttonWrapper: first adjacent ButtonRecord pair. */
const findButtonPair = (links) => {
  for (let i = 0; i < links.length - 1; i++) {
    if (links[i].__typename === "ButtonRecord" && links[i + 1].__typename === "ButtonRecord") {
      return [links[i], links[i + 1]]
    }
  }
  return null
}

export const dastToMdx = (field) => {
  const links = field.links ?? []
  const buttonPair = findButtonPair(links)
  const ctx = {
    links,
    blocks: field.blocks ?? [],
    buttonPair,
    skipButtonIds: new Set(buttonPair ? [buttonPair[1].id] : []),
    headings: [],
  }
  const mdx = renderBlocks(field.value.document.children, ctx)
  return { mdx: `${mdx}\n`, headings: ctx.headings }
}

export const minutesToRead = (field) => {
  const content = toPlainText(field)
  return content ? Math.ceil(content.split(" ").length / 200) : null
}

/* ------------------------------------------------------------------ main ---- */

const isDast = (v) => v && typeof v === "object" && v.value?.schema === "dast"
const readJson = (name) => JSON.parse(fs.readFileSync(path.join(dataDir, `${name}.json`), "utf8"))
const writeJson = (name, value) =>
  fs.writeFileSync(path.join(dataDir, `${name}.json`), `${JSON.stringify(value, null, 2)}\n`)

/** Convert every DAST field in a tree to an MDX string, in place. */
const convertInPlace = (node, stats) => {
  if (!node || typeof node !== "object") return node
  if (Array.isArray(node)) return node.map((n) => convertInPlace(n, stats))
  const out = {}
  for (const [key, value] of Object.entries(node)) {
    if (isDast(value)) {
      out[key] = dastToMdx(value).mdx
      stats.inline++
    } else {
      out[key] = convertInPlace(value, stats)
    }
  }
  return out
}

const main = () => {
  const stats = { inline: 0, files: 0 }

  /* blog: bodies become files; cards keep only precomputed reading time */
  const blog = readJson("blog")
  const blogDir = path.join(root, "src/content/blog")
  fs.mkdirSync(blogDir, { recursive: true })
  const blogOut = blog.map((post) => {
    const { mdx, headings } = dastToMdx(post.body)
    fs.writeFileSync(path.join(blogDir, `${post.slug}.mdx`), mdx)
    stats.files++
    const { body: _body, ...rest } = post
    return {
      ...convertInPlace(rest, stats),
      minutesToRead: minutesToRead(post.body),
      headings,
    }
  })
  writeJson("blog", blogOut)

  /* info: the one long-form page */
  const info = readJson("info")
  const infoDir = path.join(root, "src/content/info")
  fs.mkdirSync(infoDir, { recursive: true })
  const infoOut = info.map((record) => {
    const { mdx, headings } = dastToMdx(record.information)
    fs.writeFileSync(path.join(infoDir, `${record.slug}.mdx`), mdx)
    stats.files++
    const { information: _information, ...rest } = record
    return { ...convertInPlace(rest, stats), headings }
  })
  writeJson("info", infoOut)

  /* projects and pages: all fields are short component copy */
  writeJson("projects", convertInPlace(readJson("projects"), stats))

  const pages = readJson("pages")
  const blogMinutes = new Map(blog.map((p) => [p.id, minutesToRead(p.body)]))
  const pagesOut = pages.map((page) => ({
    ...page,
    components: page.components.map((component) => {
      if (component.__typename !== "BlogListingRecord") return convertInPlace(component, stats)
      // BlogListing cards carried a full duplicate blog body purely to compute
      // reading time; drop it and keep the number.
      return convertInPlace(
        {
          ...component,
          cards: component.cards.map(({ body: _body, ...card }) => ({
            ...card,
            minutesToRead: blogMinutes.get(card.id) ?? null,
          })),
        },
        stats
      )
    }),
  }))
  writeJson("pages", pagesOut)

  console.log(`converted ${stats.inline} inline fields, wrote ${stats.files} .mdx files`)
}

if (import.meta.url === `file://${process.argv[1]}`) main()
