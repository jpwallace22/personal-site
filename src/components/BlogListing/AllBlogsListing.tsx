import Circle from "@molecules/Circle"
import BlogListing from "@components/BlogListing"
import { getAllBlogCards } from "src/content"

const AllBlogsListing = async () => {
  const allTemplateBlogPosts = getAllBlogCards()
  return (
    <div className="contain-layout relative">
      <Circle size="lg" contrast="low" className="absolute -left-1/3 -top-48 hidden xl:block" />
      <Circle dots className="absolute -bottom-60 -right-12 hidden xl:block" />
      <BlogListing cards={allTemplateBlogPosts} />
    </div>
  )
}

export default AllBlogsListing
