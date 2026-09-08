import { Metadata } from "next"
import Footer from "@components/Footer"
import { getBlogPost, getBlogSlugs } from "src/content"
import BlogPost from "src/template/BlogDetails"
import renderMetadata from "src/template/renderMetadata"

type Params = {
  params: Promise<{
    slug?: string
  }>
}

export const generateMetadata = async ({ params }: Params): Promise<Metadata> => {
  const { slug } = await params
  return renderMetadata(slug, getBlogPost(slug)?.seo)
}

export const generateStaticParams = async () => {
  return getBlogSlugs().map((slug) => ({ slug }))
}

const BlogPostPage = async ({ params }: Params) => {
  const { slug } = await params
  return (
    <>
      <BlogPost slug={slug} />
      <Footer />
    </>
  )
}

export default BlogPostPage
