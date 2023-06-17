import { FC } from "react"
import { notFound } from "next/navigation"
import { ProjectPageQuery } from "@codegen/sdk"
import { SlideIn } from "@molecules/animations"
import Heading from "@molecules/Heading"
import Section from "@molecules/Section"
import TechStack from "@molecules/TechStack"
import Switchback from "@components/Switchback"
import makeServerQuery from "@utils/makeServerQuery"

interface ProjectPageProps {
  slug?: string
}

const ProjectPage: FC<ProjectPageProps> = async ({ slug }) => {
  const { project } = await makeServerQuery<ProjectPageQuery>(ProjectPageQuery, { slug })
  if (!project) {
    return notFound()
  }
  const { title, subtitle, heading, bannerImage, body, techStack } = project

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
      <Section paddingTop="none">
        <TechStack
          techs={techStack}
          thumbSize={60}
          className="justify-center lg:gap-12"
          showTitles
        />
      </Section>
    </>
  )
}

export default ProjectPage
