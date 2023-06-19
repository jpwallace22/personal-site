import { ComponentPropsWithoutRef, type FC } from "react"
import { cva, VariantProps } from "class-variance-authority"
import Image from "next/image"
import { twMerge } from "tailwind-merge"
import { SlideIn } from "@molecules/animations"
import Link from "@molecules/Link"
import ProjectInfo from "@components/ProjectsListing/ProjectInfo"

const transition = "transition-transform duration-1000 ease-in-out"
const wrapper = cva(
  ["flex", "w-screen max-w-6xl", "items-center", "group", "md:w-fit", "min-h-[325px]"],
  {
    variants: {
      reverse: {
        true: ["flex-row-reverse"],
      },
    },
  }
)

const image = cva(
  [
    "opacity-20",
    "dark:brightness-75",
    "group-hover:rotate-3",
    "md:translate-x-20",
    "md:opacity-100",
    transition,
  ],
  {
    variants: {
      reverse: {
        true: ["md:-translate-x-20", "group-hover:-rotate-3"],
      },
    },
  }
)

export type ProjectCardProps = ProjectCardFragment &
  Omit<ComponentPropsWithoutRef<"a">, "title"> &
  VariantProps<typeof wrapper>

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  bannerImage,
  reverse,
  excerpt,
  subtitle,
  techStack,
  slug,
  ...props
}) => {
  const slideFrom = reverse ? "right" : "left"

  return (
    <article>
      <SlideIn from={slideFrom}>
        <Link href={`/projects/${slug}`} className={twMerge(wrapper({ reverse }))} {...props}>
          {bannerImage?.url && (
            <Image
              src={bannerImage?.url}
              width={600}
              height={600}
              alt={bannerImage.alt || ""}
              className={twMerge(image({ reverse }))}
            />
          )}
          <ProjectInfo
            title={title}
            excerpt={excerpt}
            subtitle={subtitle}
            techStack={techStack}
            reverse={reverse}
            className={twMerge("group-hover:scale-105", transition)}
          />
        </Link>
      </SlideIn>
    </article>
  )
}

export default ProjectCard
