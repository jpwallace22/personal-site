import { Metadata } from "next"
import Footer from "@components/Footer"
import ProjectListing from "@components/ProjectsListing"
import Switchback from "@components/Switchback"
import { getAllProjectCards } from "src/content"
import { mdx } from "src/content/schema"
import renderMetadata from "src/template/renderMetadata"

export const metadata: Metadata = renderMetadata({
  path: "/projects",
  seo: {
    title: "Projects",
    description:
      "Work and side projects from Justin Wallace — AI platform frontends, component libraries, an Electron app, and a VS Code extension.",
  },
})

const ProjectsIndex = () => (
  <>
    <Switchback
      heading="The Work"
      headingAs="h1"
      bgColor="purple-900"
      designAccent="md"
      body={mdx`
        A curated collection of endeavors that blend my passion for software engineering with both professional and leisure pursuits. From innovative work solutions to whimsical experiments, each one is a record of something I set out to build.
      `}
    />
    <ProjectListing heading="All Projects" cards={getAllProjectCards()} />
    <Footer />
  </>
)

export default ProjectsIndex
