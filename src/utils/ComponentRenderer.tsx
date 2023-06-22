import { Fragment } from "react"
import BlogListing from "@components/BlogListing"
import CarouselComponent from "@components/Carousel"
import FeatureHighlight from "@components/FeatureHighlight"
import ProjectListing from "@components/ProjectsListing"
import ScrollingSwitchbackComponent from "@components/ScrollingSwitchback"
import SingleUseComponent from "@components/SingleUseComponent"
import Switchback, { SwitchbackProps } from "@components/Switchback"

const ComponentRenderer = (components?: PageFragment["components"]) => {
  if (!components || !components.length) return null
  const componentChecker = (component: PageFragment["components"][number], index: number) => {
    switch (component.__typename) {
      case "SwitchbackRecord":
        return <Switchback {...(component as SwitchbackProps)} priority={index === 0} /> // prefetch image if first component
      case "ProjectListingRecord":
        return <ProjectListing {...component} />
      case "CarouselRecord":
        return <CarouselComponent {...component} />
      case "ScrollingSwitchbackRecord":
        return <ScrollingSwitchbackComponent {...component} />
      case "BlogListingRecord":
        return <BlogListing {...component} />
      case "SingleUseComponentRecord":
        return <SingleUseComponent {...component} />
      case "FeatureHighlightRecord":
        return <FeatureHighlight {...component} />
      default:
        return null
    }
  }

  return (
    <>
      {components.map((component, i) => {
        return <Fragment key={component.id}>{componentChecker(component, i)}</Fragment>
      })}
    </>
  )
}

export default ComponentRenderer
