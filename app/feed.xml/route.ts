import { getBlogPosts } from "src/content"
import { SITE_NAME, siteUrl } from "src/content/site"

// The feed is built from files on disk, so it is prerendered rather than
// rebuilt per request. GET handlers default to dynamic as of Next 15.
export const dynamic = "force-static"

/** XML text escaping, so an ampersand or a quote in a title cannot break the feed. */
const escape = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")

const item = ({
  slug,
  title,
  excerpt,
  publishDate,
}: {
  slug: string
  title: string
  excerpt: string
  publishDate: string
}) => {
  const url = siteUrl(`/blog/${slug}`)

  return `    <item>
      <title>${escape(title.trim())}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(publishDate).toUTCString()}</pubDate>
      <description>${escape(excerpt.trim())}</description>
    </item>`
}

/**
 * RSS for the blog. Drafts are excluded on the same flag that keeps them out of
 * the sitemap, so a scratch post never reaches subscribers.
 */
export const GET = async () => {
  const posts = getBlogPosts().filter(({ noindex }) => !noindex)

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escape(`${SITE_NAME} | Blog`)}</title>
    <link>${siteUrl("/blog")}</link>
    <description>The thoughts and ramblings of a software engineer.</description>
    <language>en-us</language>
    <atom:link href="${siteUrl("/feed.xml")}" rel="self" type="application/rss+xml" />
${posts.map(item).join("\n")}
  </channel>
</rss>`

  return new Response(body, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  })
}
