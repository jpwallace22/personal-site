import { FC } from "react"
import AllBlogsListing from "@components/BlogListing/AllBlogsListing"

const SingleUseComponent: FC<SingleUseComponentFragment> = ({ componentName }) => {
  switch (componentName) {
    case "All Blogs Listing":
      return <AllBlogsListing />
    default:
      return null
  }
}

export default SingleUseComponent
