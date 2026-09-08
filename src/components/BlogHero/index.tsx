import { ComponentPropsWithoutRef, ElementType, type FC } from "react"
import { cva } from "class-variance-authority"
import Image from "next/image"
import { twMerge } from "tailwind-merge"
import { BreadCrumbs } from "@molecules/BreadCrumbs"
import HeadingComp, { HeadingMarkup } from "@molecules/Heading"
import Section from "@molecules/Section"
import type { Switchback } from "src/content/schema"

export type BlogHeroProps = Omit<Switchback, "body"> &
  ComponentPropsWithoutRef<"div"> & {
    minutesToRead?: Maybe<number>
    headingAs: ElementType
    animated?: boolean
    imageTop?: boolean
    subtitle?: Maybe<string>
    publishDate?: Maybe<string>
  }

const wrapper = cva(["flex", "w-full", "flex-col lg:flex-row", "items-center", "gap-12 xl:gap-32"])
const content = cva(["w-full lg:w-7/12 xl:w-1/2", "flex flex-col gap-8"])
const asset = cva(["relative", "lg:w-5/12 xl:w-1/2"])

const BlogHero: FC<BlogHeroProps> = ({
  heading,
  headingAs = "h2",
  image,
  minutesToRead,
  subtitle,
  sectionId,
  publishDate,
}) => {
  // Publish dates are plain calendar days, so they are formatted in UTC. The
  // machine's own zone would render a date west of UTC as the day before.
  const date = publishDate ? new Date(publishDate) : undefined
  const formattedDate = date?.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  })

  return (
    <Section
      id={sectionId || undefined}
      wrapperClass="bg-gradient-to-t from-gray-50 dark:from-purple-900 to-transparent"
    >
      <BreadCrumbs
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "All Blogs", link: "/blog" },
          { label: typeof heading === "string" ? heading : "Blog", link: "" },
        ]}
      />
      <div className={twMerge(wrapper())}>
        <div className={content()}>
          <HeadingComp headline={heading} as={headingAs as HeadingMarkup} />
          <h2 className="text-4xl !font-normal text-gray-800 dark:text-gray-500">{subtitle}</h2>
          <div className="text-purple-900 dark:text-common-white">
            {formattedDate && (
              <span>
                <time dateTime={date!.toISOString().slice(0, 10)}>{formattedDate}</time> •{" "}
              </span>
            )}
            {<span>{minutesToRead} minute read</span>}
          </div>
        </div>
        <div className={asset()}>
          {image?.url && (
            <Image
              priority
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
