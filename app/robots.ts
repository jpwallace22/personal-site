import type { MetadataRoute } from "next"
import { siteUrl } from "src/content/site"

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: "*",
    allow: "/",
  },
  sitemap: siteUrl("/sitemap.xml"),
  host: siteUrl(),
})

export default robots
