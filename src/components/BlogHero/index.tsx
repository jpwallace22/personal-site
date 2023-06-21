import { ComponentPropsWithoutRef, ElementType, type FC } from "react"
import { cva } from "class-variance-authority"
import Image from "next/image"
import { twMerge } from "tailwind-merge"
import { BreadCrumbs } from "@molecules/BreadCrumbs"
import HeadingComp, { HeadingMarkup } from "@molecules/Heading"
import Section from "@molecules/Section"
import timeToReadStructuredText from "@components/BlogListing/utils/timeToRead"
import { StructuredData } from "@components/StructuredText/utils/structuredTextParser"

export type BlogHeroProps = Clean<Omit<SwitchbackFragment, "body">> &
  ComponentPropsWithoutRef<"div"> & {
    body?: StructuredData
    headingAs: ElementType
    animated?: boolean
    imageTop?: boolean
    subtitle?: Maybe<string>
    publishDate?: Maybe<string>
  }

const breadcrumbs = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "All Blogs",
    link: "/blog",
  },
  {
    label: "Blog",
    link: "",
  },
]

const wrapper = cva(["flex", "w-full", "flex-col lg:flex-row", "items-center", "gap-12 xl:gap-32"])
const content = cva(["w-full lg:w-7/12 xl:w-1/2", "flex flex-col gap-8"])
const asset = cva(["relative", "lg:w-5/12 xl:w-1/2"])

const BlogHero: FC<BlogHeroProps> = ({
  heading,
  headingAs = "h2",
  image,
  body,
  subtitle,
  sectionId,
  publishDate,
}) => {
  const formattedDate =
    publishDate &&
    new Date(publishDate).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    })

  return (
    <Section id={sectionId || undefined}>
      <BreadCrumbs breadcrumbs={breadcrumbs} />
      <div className={twMerge(wrapper())}>
        <div className={content()}>
          <HeadingComp headline={heading} as={headingAs as HeadingMarkup} />
          <h2 className="text-4xl !font-normal text-gray-800 dark:text-gray-500">{subtitle}</h2>
          <div className="text-purple-900 dark:text-common-white">
            {formattedDate && <span>{formattedDate} • </span>}
            {<span>{timeToReadStructuredText(body)} minute read</span>}
          </div>
        </div>
        <div className={asset()}>
          {image?.url && (
            <Image
              src={image?.url}
              width={700}
              height={700}
              alt={image.alt || ""}
              className="rounded-lg"
            />
          )}
        </div>
      </div>
    </Section>
  )
}

export default BlogHero
