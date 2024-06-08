import withBundleAnalyzer from "@next/bundle-analyzer"
import withPlugins from "next-compose-plugins"

const shouldAnalyze = process.env.ANALYZE === "true"

/**
 * @type {import('next').NextConfig}
 */
const config = {
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
  // sharp cannot run on edge runtime, can only be used on serverless functions
  webpack: (cfg, options = {}) => {
    cfg.externals.push("sharp")
    const { webpack } = options
    const regex = /^sharp$/
    cfg.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: regex,
      })
    )
    return cfg
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
  ? withPlugins([[withBundleAnalyzer({ enabled: shouldAnalyze })]], config)
  : config
