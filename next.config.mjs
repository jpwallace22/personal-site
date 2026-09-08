import createMDX from "@next/mdx"

/**
 * @type {import('next').NextConfig}
 */
const config = {
  pageExtensions: ["ts", "tsx", "mdx"],
  reactCompiler: true,
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

export default withMDX(config)
