import type { MetadataRoute } from "next"
import { getAllProjectCards, getBlogPosts } from "src/content"
import { siteUrl } from "src/content/site"

/**
 * Every indexable route. Posts marked noindex are left out so the sitemap and
 * the robots meta tag cannot disagree about what belongs in the index.
 */
const sitemap = (): MetadataRoute.Sitemap => {
  const posts = getBlogPosts().filter(({ noindex }) => !noindex)
  const newestPost = posts[0]?.publishDate

  return [
    {
      url: siteUrl("/"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: siteUrl("/about"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: siteUrl("/projects"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: siteUrl("/blog"),
      ...(newestPost && { lastModified: new Date(newestPost) }),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...getAllProjectCards().map(({ slug }) => ({
      url: siteUrl(`/projects/${slug}`),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
    ...posts.map(({ slug, publishDate }) => ({
      url: siteUrl(`/blog/${slug}`),
      lastModified: new Date(publishDate),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
    {
      url: siteUrl("/info/cookies"),
      changeFrequency: "yearly",
      priority: 0.1,
    },
  ]
}

export default sitemap
