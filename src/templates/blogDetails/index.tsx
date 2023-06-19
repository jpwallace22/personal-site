import { FC } from "react"
import { notFound } from "next/navigation"
import { TemplateBlogPostQuery } from "@codegen/sdk"
import makeServerQuery from "@utils/makeServerQuery"

interface BlogPostProps {
  slug?: string
}

const BlogPost: FC<BlogPostProps> = async ({ slug }) => {
  const { templateBlogPost } = await makeServerQuery<TemplateBlogPostQuery>(TemplateBlogPostQuery, {
    slug,
  })
  if (!templateBlogPost || !slug) {
    return notFound()
  }

  const { title } = templateBlogPost

  return (
    <>
      <h1>{title}</h1>
    </>
  )
}

export default BlogPost
