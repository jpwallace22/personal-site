import createMDX from "@next/mdx"
import withBundleAnalyzer from "@next/bundle-analyzer"
import withPlugins from "next-compose-plugins"

const shouldAnalyze = process.env.ANALYZE === "true"

/**
 * @type {import('next').NextConfig}
 */
const config = {
  pageExtensions: ["ts", "tsx", "mdx"],
  experimental: {
    reactCompiler: true,
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.datocms-assets.com",
        port: "",
        pathname: "**/*",
      },
    ],
  },
  redirects: async () => [
    {
      source: "/resume",
      destination: "/resume.pdf",
      permanent: true,
    },
  ],
}

const withMDX = createMDX({})

export default shouldAnalyze
  ? withMDX(withPlugins([[withBundleAnalyzer({ enabled: shouldAnalyze })]], config))
  : withMDX(config)
