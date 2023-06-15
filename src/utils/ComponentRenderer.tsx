import { Fragment } from "react"
import CarouselComponent from "@components/Carousel"
import ProjectListing, { ProjectListingProps } from "@components/ProjectsListing"
import Switchback, { SwitchbackProps } from "@components/Switchback"

const ComponentRenderer = (components?: PageFragment["components"]) => {
  if (!components || !components.length) return null
  const componentChecker = (component: PageFragment["components"][number]) => {
    switch (component.__typename) {
      case "SwitchbackRecord":
        return <Switchback {...(component as SwitchbackProps)} />
      case "ProjectListingRecord":
        return <ProjectListing {...(component as ProjectListingProps)} />
      case "CarouselRecord":
        return <CarouselComponent {...component} />
      default:
        return null
    }
  }

  return (
    <>
      {components.map((component) => {
        return <Fragment key={component.__typename}>{componentChecker(component)}</Fragment>
      })}
    </>
  )
}

export default ComponentRenderer
