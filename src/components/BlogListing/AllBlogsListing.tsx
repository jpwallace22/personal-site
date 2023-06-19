import { AllBlogCardsQuery } from "@codegen/sdk"
import Circle from "@molecules/Circle"
import BlogListing from "@components/BlogListing"
import makeServerQuery from "@utils/makeServerQuery"

const AllBlogsListing = async () => {
  const { allTemplateBlogPosts } = await makeServerQuery<AllBlogCardsQuery>(AllBlogCardsQuery)
  return (
    <div className="contain-layout relative">
      <Circle size="lg" contrast="low" className="absolute -left-1/3 -top-48 hidden xl:block" />
      <Circle dots className="absolute -bottom-60 -right-12 hidden xl:block" />
      <BlogListing cards={allTemplateBlogPosts} />
    </div>
  )
}

export default AllBlogsListing
