/**
 * schema.org nodes for the site.
 *
 * Everything here is derived from content that already exists, so the
 * structured data cannot describe something the page does not show.
 */
import { AUTHOR_NAME, SITE_NAME, SITE_URL, siteUrl, socialProfiles } from "src/content/site"
import type { BlogPost, Project } from "src/content/schema"

const PERSON_ID = siteUrl("/#person")
const SITE_ID = siteUrl("/#website")

export const personSchema = () => ({
  "@type": "Person",
  "@id": PERSON_ID,
  name: AUTHOR_NAME,
  url: SITE_URL,
  jobTitle: "Software Engineer",
  sameAs: socialProfiles.map(({ link }) => link),
})

export const websiteSchema = () => ({
  "@type": "WebSite",
  "@id": SITE_ID,
  url: SITE_URL,
  name: SITE_NAME,
  publisher: { "@id": PERSON_ID },
})

export const blogPostingSchema = (post: BlogPost) => ({
  "@type": "BlogPosting",
  headline: post.title,
  description: post.seo?.description || post.excerpt,
  image: [post.seo?.image?.url || post.featuredImage.url],
  datePublished: new Date(post.publishDate).toISOString(),
  dateModified: new Date(post.publishDate).toISOString(),
  wordCount: post.words,
  timeRequired: `PT${post.minutesToRead}M`,
  author: { "@id": PERSON_ID },
  publisher: { "@id": PERSON_ID },
  isPartOf: { "@id": SITE_ID },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": siteUrl(`/blog/${post.slug}`),
  },
})

export const projectSchema = (project: Project) => ({
  "@type": "CreativeWork",
  name: project.title,
  headline: project.heading,
  description: project.seo?.description || project.excerpt,
  image: [project.seo?.image?.url || project.bannerImage.url],
  url: siteUrl(`/projects/${project.slug}`),
  creator: { "@id": PERSON_ID },
  keywords: project.techStack.map(({ title }) => title).join(", "),
  isPartOf: { "@id": SITE_ID },
})

/** `crumbs` is ordered from the site root to the current page. */
export const breadcrumbSchema = (crumbs: { name: string; path: string }[]) => ({
  "@type": "BreadcrumbList",
  itemListElement: crumbs.map(({ name, path }, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name,
    item: siteUrl(path),
  })),
})

/** Wraps nodes in the single @context block a page emits. */
export const graph = (...nodes: object[]) => ({
  "@context": "https://schema.org",
  "@graph": nodes,
})
