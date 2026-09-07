/**
 * Local content accessors -- the replacement for makeServerQuery.
 *
 * Each function mirrors one of the GraphQL queries the app used to run, so call
 * sites keep their shape and components keep receiving identical props.
 *
 * Rich text is MDX. Long-form documents (blog bodies, the info page) live as
 * .mdx files alongside this module and are read on demand; shorter component
 * copy is stored inline in the JSON as an MDX string. Both render through
 * @components/Markdown.
 *
 * Projections matter. Several components spread their rest props onto a DOM
 * element (BlogCard -> <article>, ProjectInfo, Button), so any field beyond what
 * the original fragment selected would render as a stray HTML attribute. Where a
 * record is returned wholesale it is because the export already captured it with
 * the app's own fragment; where it is picked apart below, the pick reproduces the
 * fragment field for field.
 */
import fs from "node:fs"
import path from "node:path"
import blog from "src/content/data/blog.json"
import companies from "src/content/data/companies.json"
import info from "src/content/data/info.json"
import pages from "src/content/data/pages.json"
import projects from "src/content/data/projects.json"
import site from "src/content/data/site.json"

type BlogRecord = (typeof blog)[number]
type ProjectRecord = (typeof projects)[number]

/** Every record type selects the same SeoField shape. JSON imports widen the
 *  __typename literal to string, so seo is re-narrowed on the way out. */
type Seo = PageFragment["seo"]

export type Heading = { level: number; id: string; text: string }

/** A blog post with its MDX body loaded and its headings for the table of contents. */
export type BlogPost = Omit<BlogFragment, "body"> & {
  body: string
  headings: Heading[]
  minutesToRead?: Maybe<number>
}

const bySlug = <T extends { slug?: Maybe<string> }>(records: readonly T[], slug?: string) =>
  slug ? records.find((record) => record.slug === slug) : undefined

/** Server-only: long-form MDX is read from disk rather than bundled into JSON. */
const readMdx = (collection: "blog" | "info", slug: string) =>
  fs.readFileSync(path.join(process.cwd(), "src/content", collection, `${slug}.mdx`), "utf8")

/* -------------------------------------------------------------- pages ---- */

/** TemplatePage($slug) -- captured with ...Page, so it is returned as-is. */
export const getPage = (slug?: string) => bySlug(pages, slug) as unknown as PageFragment | undefined

/** AllTemplatePageSlugs */
export const getPageSlugs = () => pages.map(({ slug }) => ({ slug }))

/** TemplatePageMetadata */
export const getPageSeo = (slug?: string) => getPage(slug)?.seo as Seo

/* --------------------------------------------------------------- blog ---- */

/** ...BlogCard -- exactly the fields the fragment selected, plus the precomputed
 *  reading time that replaced the duplicated body it was derived from. */
const toBlogCard = (post: BlogRecord) => ({
  __typename: post.__typename,
  id: post.id,
  internalName: post.internalName,
  title: post.title,
  publishDate: post.publishDate,
  slug: post.slug,
  minutesToRead: post.minutesToRead,
  featuredImage: post.featuredImage,
  excerpt: post.excerpt,
})

export type BlogCard = ReturnType<typeof toBlogCard>

/** TemplateBlogPost($slug) -- body is loaded from its .mdx file. */
export const getBlogPost = (slug?: string) => {
  const post = bySlug(blog, slug)
  if (!post?.slug) return undefined
  const { excerpt: _excerpt, seo: _seo, ...rest } = post
  return { ...rest, body: readMdx("blog", post.slug) } as unknown as BlogPost
}

/** AllBlogPostSlugs */
export const getBlogSlugs = () => blog.map(({ slug }) => ({ slug }))

/** AllBlogCards -- orderBy: publishDate_DESC */
export const getAllBlogCards = () =>
  [...blog]
    .sort((a, b) => (b.publishDate ?? "").localeCompare(a.publishDate ?? ""))
    .map(toBlogCard) as unknown as BlogCardFragment[]

/** BlogMetaData($slug) */
export const getBlogSeo = (slug?: string) => bySlug(blog, slug)?.seo as Seo

/* ----------------------------------------------------------- projects ---- */

/** ...Project -- the full project, minus the excerpt/seo the export added on top. */
const toProject = ({ excerpt: _excerpt, seo: _seo, ...project }: ProjectRecord) => project

/** ProjectPage($slug) -- pair with getPage("home") for the next-project card. */
export const getProject = (slug?: string) => {
  const project = bySlug(projects, slug)
  return project && (toProject(project) as unknown as ProjectFragment)
}

/** AllProjectSlugs */
export const getProjectSlugs = () => projects.map(({ slug }) => ({ slug }))

/** ProjectPageMetadata */
export const getProjectSeo = (slug?: string) => bySlug(projects, slug)?.seo as Seo

/* --------------------------------------------------------------- info ---- */

/** TemplateInfo($slug) -- information is loaded from its .mdx file. */
export const getInfo = (slug?: string) => {
  const record = bySlug(info, slug)
  if (!record?.slug) return undefined
  return { ...record, information: readMdx("info", record.slug) } as unknown as InfoFragment
}

/** AllTemplateInfoSlugs */
export const getInfoSlugs = () => info.map(({ slug }) => ({ slug }))

/* --------------------------------------------------------------- site ---- */

/** GetTrustedCompanies -- filter: { trust: { eq: "true" } } */
export const getTrustedCompanies = () =>
  companies.filter(({ trust }) => trust === true) as unknown as CompanyFragment[]

/** GlobalNavComponent / SiteMetaData */
export const getFavicon = () => site._site.favicon as unknown as ImageFragment
export const getGlobalNav = () => site.globalNav as unknown as GlobalNavFragment
