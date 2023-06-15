import { ComponentPropsWithoutRef, type FC } from "react"
import { cva, VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"
import Heading from "@molecules/Heading"
import TechStack from "@molecules/TechStack"
import structuredTextParser from "@components/StructuredText/utils/structuredTextParser"

const projectInfo = cva(
  [
    "absolute left-4 right-4",
    "flex",
    "flex-col",
    "gap-6",
    "text-right",
    "leading-normal",
    "md:relative md:left-0 md:right-0",
    "md:max-w-lg",
    "md:-translate-x-20",
  ],
  {
    variants: {
      reverse: {
        true: ["text-left", "md:translate-x-20"],
      },
    },
  }
)

export type ProjectInfoProps = Omit<ProjectCardFragment, "__typename"> &
  Omit<ComponentPropsWithoutRef<"div">, "title"> &
  VariantProps<typeof projectInfo>

const ProjectInfo: FC<ProjectInfoProps> = ({
  title,
  reverse,
  excerpt,
  subtitle,
  techStack,
  className,
  ...props
}) => {
  return (
    <div className={twMerge(projectInfo({ reverse, className }))} {...props}>
      <Heading
        as="h3"
        id="project-heading"
        headline={title}
        eyebrow={subtitle}
        className="text-4xl drop-shadow-md sm:text-4xl xl:text-4xl"
      />
      <div className="card shadow-standard text-left">{structuredTextParser(excerpt)}</div>
      <TechStack techs={techStack} thumbSize={24} direction="horizontal" reverse={!reverse} />
    </div>
  )
}

export default ProjectInfo
