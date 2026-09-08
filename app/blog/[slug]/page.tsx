import { Metadata } from "next"
import Footer from "@components/Footer"
import { getBlogPost, getBlogSlugs } from "src/content"
import BlogPost from "src/template/BlogDetails"
import renderMetadata from "src/template/renderMetadata"

type Params = {
  params: {
    slug?: string
  }
}

export const generateMetadata = async ({ params: { slug } }: Params): Promise<Metadata> => {
  return renderMetadata(slug, getBlogPost(slug)?.seo)
}

export const generateStaticParams = async () => {
  return getBlogSlugs().map((slug) => ({ slug }))
}

const BlogPostPage = ({ params: { slug } }: Params) => {
  return (
    <>
      <BlogPost slug={slug} />
      <Footer />
    </>
  )
}

export default BlogPostPage
