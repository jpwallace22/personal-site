import { ComponentPropsWithoutRef, FC } from "react"
import Circle from "@molecules/Circle"
import Heading, { HeadingMarkup } from "@molecules/Heading"
import Section from "@molecules/Section"
import ProjectCard from "@components/ProjectsListing/ProjectCard"
import StructuredText from "@components/StructuredText"

export type ProjectListingProps = Clean<ProjectListingFragment> & ComponentPropsWithoutRef<"div">

const ProjectListing: FC<ProjectListingProps> = ({
  cards,
  bgColor,
  heading,
  headingAs,
  sectionId,
  body,
}) => {
  return (
    <Section wrapperClass={`bg-${bgColor}`} id={sectionId || undefined} className="relative">
      {heading && <Heading as={headingAs as HeadingMarkup} headline={heading} />}
      {body && <StructuredText data={body} className="mt-8 max-w-3xl" />}
      <div className="mt-12 flex flex-col items-center gap-8">
        {cards.map((card, i) => (
          <ProjectCard key={card.title} reverse={i % 2 === 0} {...card} />
        ))}
      </div>
      {cards.length > 3 && (
        <Circle
          size="lg"
          contrast="low"
          className="absolute bottom-1/2 right-3/4 hidden md:block"
        />
      )}
    </Section>
  )
}

export default ProjectListing
