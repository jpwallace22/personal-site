import withBundleAnalyzer from "@next/bundle-analyzer"
import withPlugins from "next-compose-plugins"

const shouldAnalyze = process.env.ANALYZE === "true"

/**
 * @type {import('next').NextConfig}
 */
const config = {
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

export default shouldAnalyze
  ? withPlugins([[withBundleAnalyzer({ enabled: shouldAnalyze })]], config) : config
