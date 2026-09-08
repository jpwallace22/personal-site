import { Metadata } from "next"
import Footer from "@components/Footer"
import JsonLd from "@components/JsonLd"
import { blogPostingSchema, breadcrumbSchema, graph } from "@components/JsonLd/schemas"
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
  const post = getBlogPost(slug)

  return renderMetadata({
    path: `/blog/${slug}`,
    seo: post?.seo,
    fallbackImage: post?.featuredImage,
    ...(post && { article: { publishedTime: post.publishDate } }),
    noindex: post?.noindex,
  })
}

export const generateStaticParams = async () => {
  return getBlogSlugs().map((slug) => ({ slug }))
}

const BlogPostPage = async ({ params }: Params) => {
  const { slug } = await params
  const post = getBlogPost(slug)

  return (
    <>
      {post && (
        <JsonLd
          schema={graph(
            blogPostingSchema(post),
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Blog", path: "/blog" },
              { name: post.title, path: `/blog/${post.slug}` },
            ])
          )}
        />
      )}
      <BlogPost slug={slug} />
      <Footer />
    </>
  )
}

export default BlogPostPage
