import { AllBlogPostSlugsQuery } from "@codegen/sdk"
import Footer from "@components/Footer"
import makeServerQuery from "@utils/makeServerQuery"
import BlogPost from "src/templates/blogDetails"

type Params = {
  params: {
    slug?: string
  }
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
