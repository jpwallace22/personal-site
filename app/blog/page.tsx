import { Metadata } from "next"
import AllBlogsListing from "@components/BlogListing/AllBlogsListing"
import Footer from "@components/Footer"
import Switchback from "@components/Switchback"
import { mdx } from "src/content/schema"
import renderMetadata from "src/template/renderMetadata"

export const metadata: Metadata = renderMetadata("blog", {
  title: "Blog",
  description:
    "The thoughts and ramblings of a software engineer. This is to keep me motivated and hopefully help some people along the way.",
})

const BlogIndex = () => (
  <>
    <Switchback
      heading="The Blog"
      headingAs="h1"
      bgColor="purple-900"
      designAccent="md"
      image={{
        url: "https://www.datocms-assets.com/85391/1668971669-reactworkflow-1.webp",
        alt: "React Icon over the Mac Terminal",
        width: 700,
        height: 700,
      }}
      priority
      body={mdx`
        The humble beginnings of my personal blog. Here you can follow my journey through the world of coding. Hopefully, like me, you learn something along the way.
      `}
    />
    <AllBlogsListing />
    <Footer />
  </>
)

export default BlogIndex
