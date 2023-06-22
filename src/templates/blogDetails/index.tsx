import { FC } from "react"
import dynamic from "next/dynamic"
import { notFound } from "next/navigation"
import { TemplateBlogPostQuery } from "@codegen/sdk"
import Circle from "@molecules/Circle"
import Section from "@molecules/Section"
import Socials from "@molecules/Socials"
import BlogHero from "@components/BlogHero"
import StructuredText from "@components/StructuredText"
import makeServerQuery from "@utils/makeServerQuery"
import tocParser, { TocData } from "src/templates/blogDetails/utils/tocParser"

const ScrollPercentageBar = dynamic(() => import("@components/ScrollPercentageBar"))

interface BlogPostProps {
  slug?: string
}

const BlogPost: FC<BlogPostProps> = async ({ slug }) => {
  const { templateBlogPost } = await makeServerQuery<TemplateBlogPostQuery>(TemplateBlogPostQuery, {
    slug,
  })
  if (!templateBlogPost || !slug) {
    return notFound()
  }

  const { title, featuredImage, subtitle, publishDate, body } = templateBlogPost

  const sharingSocials = [
    {
      social: "facebook",
      link: `https://www.facebook.com/sharer/sharer.php?u=https://justinwallace.dev/blog/${slug}`,
    } as const,
    {
      social: "linkedIn",
      link: `https://www.linkedin.com/share?url=https://justinwallace.dev/blog/${slug}`,
    } as const,
    {
      social: "twitter",
      link: `https://twitter.com/intent/tweet?url=https://justinwallace.dev/blog/${slug}`,
    } as const,
  ]

  return (
    <>
      <ScrollPercentageBar />
      <BlogHero
        heading={title}
        headingAs="h1"
        image={featuredImage}
        subtitle={subtitle}
        publishDate={publishDate}
        body={body}
        animated={false}
      />
      <Section>
        <div className="contain-layout grid-cols-12 gap-16 md:grid ">
          <Circle dots className="absolute left-3/4 top-0 -z-10" />
          <Circle size="md" contrast="high" className="absolute -bottom-64 left-3/4" />
          <div className="sticky top-24 col-span-3 hidden self-start lg:block xl:col-start-2">
            <Circle size="lg" contrast="low" className="absolute right-full top-0" />
            <p className="font-display text-xl font-bold text-primary-500 dark:text-common-white">
              In this Article
            </p>
            {tocParser(body as TocData, slug)}
            <p className="font-display text-xl font-bold text-primary-500 dark:text-common-white">
              Share
            </p>
            <Socials size="sm" className="p-4" socials={sharingSocials} />
          </div>
          <StructuredText
            data={body}
            className="col-span-10 col-start-2 text-xl dark:text-gray-300 lg:col-span-9 lg:col-start-4 xl:col-span-7"
          />
        </div>
        <div className="mt-12 flex w-full flex-col items-center lg:hidden">
          <p className="font-display text-xl font-bold text-primary-500 dark:text-common-white">
            Share
          </p>
          <Socials size="md" className="p-4" socials={sharingSocials} />
        </div>
      </Section>
    </>
  )
}

export default BlogPost
