import { FC } from "react"
import dynamic from "next/dynamic"
import { notFound } from "next/navigation"
import Circle from "@molecules/Circle"
import Section from "@molecules/Section"
import Socials from "@molecules/Socials"
import BlogHero from "@components/BlogHero"
import Markdown from "@components/Markdown"
import { getBlogPost } from "src/content"
import { BlogContextProvider } from "src/contexts/BlogContext"
import TableOfContents from "src/template/BlogDetails/TableOfContents"

const ScrollPercentageBar = dynamic(() => import("@components/ScrollPercentageBar"))

interface BlogPostProps {
  slug?: string
}

const BlogPost: FC<BlogPostProps> = async ({ slug }) => {
  const templateBlogPost = getBlogPost(slug)
  if (!templateBlogPost || !slug) {
    return notFound()
  }

  const { title, featuredImage, subtitle, publishDate, body, minutesToRead, headings } =
    templateBlogPost

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
        minutesToRead={minutesToRead}
        animated={false}
      />
      <Section>
        <BlogContextProvider>
          <div className="contain-layout grid-cols-12 gap-16 md:grid ">
            <Circle dots className="absolute left-3/4 top-0 -z-10" />
            <Circle size="md" contrast="high" className="absolute -bottom-64 left-3/4" />
            <div className="sticky top-24 col-span-3 hidden self-start lg:block xl:col-start-2">
              <Circle size="lg" contrast="low" className="absolute right-full top-0" />
              <p className="font-display text-xl font-bold text-primary-500 dark:text-common-white">
                In this Article
              </p>
              <TableOfContents headings={headings} />
              <p className="font-display text-xl font-bold text-primary-500 dark:text-common-white">
                Share
              </p>
              <Socials size="sm" className="p-4" socials={sharingSocials} />
            </div>
            <Markdown
              source={body}
              className="col-span-10 col-start-2 gap-8 text-xl dark:text-gray-300 lg:col-span-9 lg:col-start-4 xl:col-span-7"
            />
          </div>
        </BlogContextProvider>
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
