import { Metadata } from "next"
import { AUTHOR_NAME, SITE_NAME, siteUrl } from "src/content/site"
import type { Image, Seo } from "src/content/schema"

const DEFAULT_TITLE = `${AUTHOR_NAME} | Software Engineer`
const DEFAULT_DESCRIPTION =
  "The personal site and portfolio of Justin Wallace the Software Engineer. Here I showcase some projects and the progress of my career. I also write about dev-related experiences."
const DEFAULT_IMAGE = "https://www.datocms-assets.com/85391/1670693320-jwdev.webp"

interface RenderMetadataOptions {
  /** Route path with a leading slash, or omitted for the home page. */
  path?: string
  seo?: Partial<Seo>
  /**
   * The record's own art. Used for og:image when the record has no explicit
   * seo.image, so a post or project shares as itself rather than as the
   * generic site card.
   */
  fallbackImage?: Image
  /** Present on blog posts, which are articles rather than pages. */
  article?: {
    publishedTime: string
    authors?: string[]
  }
  /** Drafts and scratch posts: reachable and linked, but not indexed. */
  noindex?: boolean
}

/**
 * Builds a page's metadata.
 *
 * `path` is the full route path, not a bare slug — a post at /blog/foo must
 * canonicalise to /blog/foo, not /foo.
 *
 * `title` is deliberately left undefined when a record has no SEO title, so
 * the root layout's `title.default` applies instead of this helper stamping
 * the site title onto every page and defeating the template.
 */
const renderMetadata = ({
  path = "",
  seo,
  fallbackImage,
  article,
  noindex,
}: RenderMetadataOptions = {}): Metadata => {
  const description = seo?.description || DEFAULT_DESCRIPTION
  const title = seo?.title
  const image = seo?.image?.url || fallbackImage?.url || DEFAULT_IMAGE
  const alt = seo?.image?.alt || fallbackImage?.alt
  const url = siteUrl(path)

  return {
    ...(title && { title }),
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: article ? "article" : "website",
      title: title || DEFAULT_TITLE,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      images: [{ url: image, ...(alt && { alt }) }],
      ...(article && {
        publishedTime: new Date(article.publishedTime).toISOString(),
        authors: article.authors || [AUTHOR_NAME],
      }),
    },
    ...(noindex && {
      robots: {
        index: false,
        follow: true,
      },
    }),
  }
}

export default renderMetadata
