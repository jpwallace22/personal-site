import { FC } from "react"
import { notFound } from "next/navigation"
import { SlideIn } from "@molecules/animations"
import Heading from "@molecules/Heading"
import Section from "@molecules/Section"
import TechStack from "@molecules/TechStack"
import Markdown from "@components/Markdown"
import ProjectListing from "@components/ProjectsListing"
import ScrollingSwitchbackComponent from "@components/ScrollingSwitchback"
import Switchback from "@components/Switchback"
import { getNextProject, getProject } from "src/content"

interface ProjectPageProps {
  slug?: string
}

const ProjectPage: FC<ProjectPageProps> = async ({ slug }) => {
  const templateProject = getProject(slug)
  if (!templateProject || !slug) {
    return notFound()
  }

  const nextProject = getNextProject(slug)
  const { title, subtitle, heading, bannerImage, body, techStack, switchbacks, extraInformation } =
    templateProject

  return (
    <>
      <SlideIn from="left">
        <Section paddingBottom="none">
          <Heading as="h1" headline={title} eyebrow={subtitle} size="lg" />
        </Section>
      </SlideIn>
      <Switchback
        headingAs="h2"
        heading={heading}
        image={bannerImage}
        body={body}
        animated={false}
        designAccent="dots"
        reverse
        imageTop
      />
      {techStack && (
        <Section paddingTop="none">
          <TechStack
            techs={techStack}
            thumbSize={60}
            className="justify-center lg:gap-12"
            showTitles
          />
        </Section>
      )}
      {switchbacks.length > 0 && <ScrollingSwitchbackComponent switchbacks={switchbacks} />}
      {extraInformation && (
        <Section>
          <div className="lg:max-w-4xl">
            <Markdown source={extraInformation} />
          </div>
        </Section>
      )}
      {nextProject && <ProjectListing heading="Next Project" cards={[nextProject]} />}
    </>
  )
}

export default ProjectPage
