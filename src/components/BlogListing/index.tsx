import { ComponentPropsWithoutRef, FC } from "react"
import Heading, { HeadingMarkup } from "@molecules/Heading"
import Section from "@molecules/Section"
import BlogCard from "@components/BlogListing/BlogCard"

interface BlogListingProps extends Clean<BlogListingFragment>, ComponentPropsWithoutRef<"div"> {}

const BlogListing: FC<BlogListingProps> = ({ heading, headingAs, eyebrow, body, cards }) => {
  return (
    <Section>
      <Heading
        as={headingAs as HeadingMarkup}
        headline={heading}
        eyebrow={eyebrow}
        body={body}
        className="mb-4"
      />
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => (
          <BlogCard key={card.id} {...card} />
        ))}
      </div>
    </Section>
  )
}

export default BlogListing
