import { ComponentPropsWithoutRef, type FC } from "react"
import { cva, VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"
import Heading from "@molecules/Heading"
import TechStack from "@molecules/TechStack"
import StructuredText from "@components/StructuredText"

const projectInfo = cva(
  [
    "absolute left-4 right-4",
    "flex",
    "flex-col",
    "gap-6",
    "text-right",
    "leading-normal",
    "lg:relative lg:left-0 lg:right-0",
    "lg:max-w-lg",
    "lg:-translate-x-20",
  ],
  {
    variants: {
      reverse: {
        true: ["text-left", "lg:translate-x-20"],
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
        headline={title}
        eyebrow={subtitle}
        className="text-4xl drop-shadow-md sm:text-4xl xl:text-4xl"
      />
      <div className="card shadow-standard border border-gray-300 text-left dark:border-purple-700">
        <StructuredText data={excerpt} />
      </div>
      <TechStack techs={techStack} thumbSize={24} direction="horizontal" reverse={!reverse} />
    </div>
  )
}

export default ProjectInfo
