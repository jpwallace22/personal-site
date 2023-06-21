import { Metadata } from "next"
import { AllBlogPostSlugsQuery, BlogMetaDataQuery } from "@codegen/sdk"
import Footer from "@components/Footer"
import makeServerQuery from "@utils/makeServerQuery"
import BlogPost from "src/templates/blogDetails"
import renderMetadata from "src/templates/renderMetadata"

type Params = {
  params: {
    slug?: string
  }
}

export const generateMetadata = async ({ params: { slug } }: Params): Promise<Metadata> => {
  const { blogMetaData } = await makeServerQuery<BlogMetaDataQuery>(BlogMetaDataQuery, {
    slug,
  })

  return renderMetadata(slug, blogMetaData?.seo)
}

export const generateStaticParams = async () => {
  const { allTemplateBlogPosts } = await makeServerQuery<AllBlogPostSlugsQuery>(
    AllBlogPostSlugsQuery
  )

  return allTemplateBlogPosts.map(({ slug }) => ({
    params: {
      slug,
    },
  }))
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
