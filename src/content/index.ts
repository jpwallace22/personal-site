/**
 * Local content accessors -- the replacement for makeServerQuery.
 *
 * Each function mirrors one of the GraphQL queries the app used to run, so call
 * sites keep their shape and components keep receiving identical props.
 *
 * Projections matter. Several components spread their rest props onto a DOM
 * element (BlogCard -> <article>, ProjectInfo, Button), so any field beyond what
 * the original fragment selected would render as a stray HTML attribute. Where a
 * record is returned wholesale it is because the export already captured it with
 * the app's own fragment; where it is picked apart below, the pick reproduces the
 * fragment field for field.
 */
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

const bySlug = <T extends { slug?: Maybe<string> }>(records: readonly T[], slug?: string) =>
  slug ? records.find((record) => record.slug === slug) : undefined

/* -------------------------------------------------------------- pages ---- */

/** TemplatePage($slug) -- captured with ...Page, so it is returned as-is. */
export const getPage = (slug?: string) => bySlug(pages, slug) as unknown as PageFragment | undefined

/** AllTemplatePageSlugs */
export const getPageSlugs = () => pages.map(({ slug }) => ({ slug }))

/** TemplatePageMetadata */
export const getPageSeo = (slug?: string) => getPage(slug)?.seo as Seo

/* --------------------------------------------------------------- blog ---- */

/** ...Blog -- the full post, minus the excerpt/seo the export added on top. */
const toBlog = ({ excerpt: _excerpt, seo: _seo, ...post }: BlogRecord) =>
  post as unknown as BlogFragment

/** ...BlogCard -- exactly the fields the fragment selects, nothing more. */
const toBlogCard = (post: BlogRecord) =>
  ({
    __typename: post.__typename,
    id: post.id,
    internalName: post.internalName,
    title: post.title,
    publishDate: post.publishDate,
    slug: post.slug,
    body: post.body && { __typename: post.body.__typename, value: post.body.value },
    featuredImage: post.featuredImage,
    excerpt: post.excerpt,
  }) as unknown as BlogCardFragment

/** TemplateBlogPost($slug) */
export const getBlogPost = (slug?: string) => {
  const post = bySlug(blog, slug)
  return post && toBlog(post)
}

/** AllBlogPostSlugs */
export const getBlogSlugs = () => blog.map(({ slug }) => ({ slug }))

/** AllBlogCards -- orderBy: publishDate_DESC */
export const getAllBlogCards = () =>
  [...blog].sort((a, b) => (b.publishDate ?? "").localeCompare(a.publishDate ?? "")).map(toBlogCard)

/** BlogMetaData($slug) */
export const getBlogSeo = (slug?: string) => bySlug(blog, slug)?.seo as Seo

/* ----------------------------------------------------------- projects ---- */

/** ...Project -- the full project, minus the excerpt/seo the export added on top. */
const toProject = ({ excerpt: _excerpt, seo: _seo, ...project }: ProjectRecord) =>
  project as unknown as ProjectFragment

/** ProjectPage($slug) -- the project itself; pair with getPage("home") for the next-project card. */
export const getProject = (slug?: string) => {
  const project = bySlug(projects, slug)
  return project && toProject(project)
}

/** AllProjectSlugs */
export const getProjectSlugs = () => projects.map(({ slug }) => ({ slug }))

/** ProjectPageMetadata */
export const getProjectSeo = (slug?: string) => bySlug(projects, slug)?.seo as Seo

/* --------------------------------------------------------------- info ---- */

/** TemplateInfo($slug) -- captured with ...Info, so it is returned as-is. */
export const getInfo = (slug?: string) => bySlug(info, slug) as unknown as InfoFragment | undefined

/** AllTemplateInfoSlugs */
export const getInfoSlugs = () => info.map(({ slug }) => ({ slug }))

/* --------------------------------------------------------------- site ---- */

/** GetTrustedCompanies -- filter: { trust: { eq: "true" } } */
export const getTrustedCompanies = () =>
  companies.filter(({ trust }) => trust === true) as unknown as CompanyFragment[]

/** GlobalNavComponent / SiteMetaData */
export const getFavicon = () => site._site.favicon as unknown as ImageFragment
export const getGlobalNav = () => site.globalNav as unknown as GlobalNavFragment
