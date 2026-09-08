/**
 * Content types for the site.
 *
 * These describe the data as it actually is, not as a CMS once returned it:
 * fields that are always present are not optional, and nothing carries a
 * record id or a __typename discriminator.
 *
 * Rich text is MDX source, rendered through @components/Markdown.
 */

/**
 * MDX source. A tagged template so prose stays readable inline; the common
 * indentation is stripped, since four leading spaces would otherwise make
 * markdown treat every line as a code block.
 */
export const mdx = (strings: TemplateStringsArray, ...values: unknown[]) => {
  const raw = strings.reduce(
    (out, part, i) => out + part + (i < values.length ? String(values[i]) : ""),
    ""
  )
  const lines = raw.replace(/^\n/, "").trimEnd().split("\n")
  const indent = Math.min(...lines.filter((l) => l.trim()).map((l) => l.match(/^ */)![0].length))
  return lines.map((l) => l.slice(indent)).join("\n") + "\n"
}

export interface Image {
  url: string
  alt: string
  width: number
  height: number
}

export interface Seo {
  title: string
  description: string
  /** Falls back to the record's own image when absent. */
  image?: Image
}

export interface Heading {
  level: number
  id: string
  text: string
}

export interface Tech {
  title: string
  thumbnail: Image
}

export interface Company {
  name: string
  logo: Image
  website?: string
  /** Shown in the home page trust bar. */
  trusted?: boolean
}

export interface Person {
  firstName: string
  lastName: string
  role: string
  website?: string
  thumbnail?: Image
  company?: Company
}

export interface Testimonial {
  quote: string
  person: Person
}

export type ButtonVariant = "contained" | "outlined" | "text"

export interface Link {
  label: string
  url: string
  variant?: ButtonVariant
  startIcon?: string
  endIcon?: string
}

export interface Switchback {
  heading: string
  headingAs?: string
  body: string
  image?: Image
  designAccent?: "lg" | "md" | "dots"
  reverse?: boolean
  sectionId?: string
  bgColor?: string
}

/** A blog post: frontmatter from src/content/blog/<slug>.mdx plus its body. */
export interface BlogPost {
  slug: string
  title: string
  subtitle: string
  publishDate: string
  excerpt: string
  featuredImage: Image
  seo: Seo
  /** MDX body, loaded from the file. */
  body: string
  /** Derived from the body, so it cannot go stale. */
  minutesToRead: number
  headings: Heading[]
}

/** What a listing card needs. A post minus its body. */
export type BlogCard = Omit<BlogPost, "body" | "headings">

export interface Project {
  slug: string
  title: string
  subtitle: string
  heading: string
  body: string
  extraInformation: string
  excerpt: string
  bannerImage: Image
  techStack: Tech[]
  switchbacks: Switchback[]
  seo: Seo
}

/** What a project card needs. */
export type ProjectCard = Pick<
  Project,
  "slug" | "title" | "subtitle" | "excerpt" | "techStack" | "bannerImage"
>

/** Identity helper: gives autocomplete and type errors inside project modules. */
export const defineProject = (project: Project) => project
