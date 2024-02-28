import { ComponentPropsWithoutRef, FC } from "react"
import Circle from "@molecules/Circle"
import Heading, { HeadingMarkup } from "@molecules/Heading"
import Section from "@molecules/Section"
import ProjectCard from "@components/ProjectsListing/ProjectCard"
import { TracingBeam } from "@components/ProjectsListing/TracingBeam"

export type ProjectListingProps = Clean<ProjectListingFragment> & ComponentPropsWithoutRef<"div">

const ProjectListing: FC<ProjectListingProps> = ({
  cards,
  bgColor,
  heading,
  headingAs = "h2",
  sectionId,
  body,
}) => {
  return (
    <Section wrapperClass={`bg-${bgColor}`} id={sectionId || undefined} className="relative">
      <TracingBeam>
        <Heading as={headingAs as HeadingMarkup} headline={heading} body={body} />
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
      </TracingBeam>
    </Section>
  )
}

export default ProjectListing
