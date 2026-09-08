/**
 * Content accessors.
 *
 * Blog posts are documents: frontmatter plus body in src/content/blog/<slug>.mdx.
 * Projects are structured records with several rich-text fields, so they are
 * typed modules under src/content/projects instead.
 *
 * Reading time and headings are derived from the body rather than stored, so
 * they cannot drift when the prose is edited.
 */
import fs from "node:fs"
import path from "node:path"
import YAML from "yaml"
import { convertToKebabCase } from "@utils/toKebabCase"
import { allProjects, featuredProjects } from "src/content/projects"
import type { BlogCard, BlogPost, Heading, Project, ProjectCard } from "src/content/schema"

const blogDir = path.join(process.cwd(), "src/content/blog")

/* ---------------------------------------------------------- derivation ---- */

/**
 * Prose for counting words. Fenced code keeps its text, matching what the
 * original plain-text renderer counted.
 */
const toPlainText = (body: string) =>
  body
    .replace(/<[^>]+>/g, "")
    .replace(/```[\s\S]*?```/g, (block) => block.replace(/```\w*\n?|```/g, ""))
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/^\s*[-*]\s+/gm, "")
    .replace(/^\s*\d+\.\s+/gm, "")
    .replace(/^>\s?/gm, "")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[*_`]/g, "")
    .replace(/\\([\\`*_[\]<>{}#>+.-])/g, "$1")
    .replace(/&#x20;/g, " ")
    .replace(/&quot;/g, '"')

const WORDS_PER_MINUTE = 200

const readingTime = (body: string) =>
  Math.ceil(toPlainText(body).split(" ").length / WORDS_PER_MINUTE)

/**
 * Heading ids match what the renderer generates, which derives them from the
 * heading's first inline run with non-alphanumerics stripped.
 */
const headingId = (text: string) => convertToKebabCase(text.replaceAll(/[^a-zA-Z0-9]/g, "")) ?? ""

/** ATX headings outside fenced code. */
const extractHeadings = (body: string): Heading[] => {
  const headings: Heading[] = []
  let inFence = false

  for (const line of body.split("\n")) {
    if (/^\s*```/.test(line)) {
      inFence = !inFence
      continue
    }
    if (inFence) continue

    const match = line.match(/^(#{1,6})\s+(.*)$/)
    if (!match) continue

    // strip inline markup so the label matches the rendered text
    const text = match[2]
      .replace(/<[^>]+>/g, "")
      .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
      .replace(/[*_`]/g, "")
      .replace(/\\([\\`*_[\]<>{}#>+.-])/g, "$1")
      .replace(/&#x20;/g, " ")
      .replace(/&quot;/g, '"')

    headings.push({ level: match[1].length, id: headingId(text), text })
  }
  return headings
}

/* --------------------------------------------------------------- blog ---- */

interface Frontmatter {
  title: string
  subtitle: string
  publishDate: string
  excerpt: string
  featuredImage: BlogPost["featuredImage"]
  seo: BlogPost["seo"]
}

const parse = (slug: string): { data: Frontmatter; body: string } => {
  const source = fs.readFileSync(path.join(blogDir, `${slug}.mdx`), "utf8")
  const match = source.match(/^---\n([\s\S]*?)\n---\n?/)
  if (!match) throw new Error(`${slug}.mdx has no frontmatter`)

  return { data: YAML.parse(match[1]) as Frontmatter, body: source.slice(match[0].length) }
}

const blogSlugs = () =>
  fs
    .readdirSync(blogDir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""))

const post = (slug: string): BlogPost => {
  const { data, body } = parse(slug)
  return {
    slug,
    ...data,
    body,
    minutesToRead: readingTime(body),
    headings: extractHeadings(body),
  }
}

/** Newest first. */
export const getBlogPosts = (): BlogCard[] =>
  blogSlugs()
    .map(post)
    .sort((a, b) => b.publishDate.localeCompare(a.publishDate))
    .map(({ body: _body, headings: _headings, ...card }) => card)

export const getBlogPost = (slug?: string): BlogPost | undefined =>
  slug && blogSlugs().includes(slug) ? post(slug) : undefined

export const getBlogSlugs = () => blogSlugs()

/** Hand-picked for the home page, in the order they appear there. */
const FEATURED_POSTS = [
  "how-neovim-made-me-fall-in-love-with-tech-again",
  "building-a-spotify-widget-using-electron",
  "building-my-first-vs-code-extension",
]

export const getFeaturedBlogPosts = (): BlogCard[] =>
  FEATURED_POSTS.map((slug) => post(slug)).map(
    ({ body: _body, headings: _headings, ...card }) => card
  )

/* ----------------------------------------------------------- projects ---- */

export const getProject = (slug?: string): Project | undefined =>
  allProjects.find((project) => project.slug === slug)

export const getProjectSlugs = () => allProjects.map(({ slug }) => slug)

const toCard = ({
  slug,
  title,
  subtitle,
  excerpt,
  techStack,
  bannerImage,
}: Project): ProjectCard => ({
  slug,
  title,
  subtitle,
  excerpt,
  techStack,
  bannerImage,
})

export const getFeaturedProjects = (): ProjectCard[] => featuredProjects.map(toCard)

/** The next project in the featured order, or nothing at the end of the list. */
export const getNextProject = (slug: string): ProjectCard | undefined => {
  // A project that is not featured has no position, so it falls through to the
  // first of the list rather than showing nothing.
  const next = featuredProjects[featuredProjects.findIndex((p) => p.slug === slug) + 1]
  return next && toCard(next)
}
