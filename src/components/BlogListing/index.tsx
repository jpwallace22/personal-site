import { ComponentPropsWithoutRef, FC } from "react"
import Heading, { HeadingMarkup } from "@molecules/Heading"
import Section from "@molecules/Section"
import BlogCard from "@components/BlogListing/BlogCard"
import Markdown from "@components/Markdown"
import type { BlogCard as BlogCardData } from "src/content/schema"

interface BlogListingProps extends Omit<ComponentPropsWithoutRef<"div">, "children"> {
  heading?: string
  headingAs?: string
  eyebrow?: string
  body?: string
  cards: BlogCardData[]
}

const BlogListing: FC<BlogListingProps> = ({ heading, headingAs, eyebrow, body, cards }) => {
  return (
    <Section>
      <Heading
        as={headingAs as HeadingMarkup}
        headline={heading}
        eyebrow={eyebrow}
        body={<Markdown source={body} className="mt-8" />}
        className="mb-4"
      />
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => (
          <BlogCard
            key={card.slug}
            title={card.title}
            slug={card.slug}
            excerpt={card.excerpt}
            featuredImage={card.featuredImage}
            minutesToRead={card.minutesToRead}
          />
        ))}
      </div>
    </Section>
  )
}

export default BlogListing
