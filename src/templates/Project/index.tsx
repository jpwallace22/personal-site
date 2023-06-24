import { FC } from "react"
import { notFound } from "next/navigation"
import { ProjectPageQuery } from "@codegen/sdk"
import { SlideIn } from "@molecules/animations"
import Heading from "@molecules/Heading"
import Section from "@molecules/Section"
import TechStack from "@molecules/TechStack"
import ProjectListing from "@components/ProjectsListing"
import ScrollingSwitchbackComponent from "@components/ScrollingSwitchback"
import StructuredText from "@components/StructuredText"
import Switchback from "@components/Switchback"
import makeServerQuery from "@utils/makeServerQuery"
import { nextProjectFromPage } from "src/templates/Project/utils/nextProjectFromPage"

interface ProjectPageProps {
  slug?: string
}

const ProjectPage: FC<ProjectPageProps> = async ({ slug }) => {
  const { templateProject, templatePage } = await makeServerQuery<ProjectPageQuery>(
    ProjectPageQuery,
    { slug }
  )
  if (!templateProject || !slug) {
    return notFound()
  }

  const nextProjectCard = nextProjectFromPage(templatePage, slug)
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
        body={body as SwitchbackFragment["body"]}
        animated={false}
        designAccent="dots"
        reverse
        imageTop
      />
      <Section paddingTop="none">
        <TechStack
          techs={techStack}
          thumbSize={60}
          className="justify-center lg:gap-12"
          showTitles
        />
      </Section>
      {switchbacks && <ScrollingSwitchbackComponent {...switchbacks} />}
      <Section>
        <StructuredText data={extraInformation} />
      </Section>
      {nextProjectCard && <ProjectListing heading="Next Project" cards={nextProjectCard} />}
    </>
  )
}

export default ProjectPage
