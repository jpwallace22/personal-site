import { ComponentPropsWithoutRef, FC } from "react"
import { cva } from "class-variance-authority"
import Image from "next/image"
import { twMerge } from "tailwind-merge"
import Button from "@molecules/Button"
import Link from "@molecules/Link"
import timeToReadStructuredText from "@components/BlogListing/utils/timeToRead"
import StructuredText from "@components/StructuredText"

interface BlogCardProps
  extends Clean<BlogCardFragment>,
    Omit<ComponentPropsWithoutRef<"div">, "title"> {}

const blogCard = cva([
  "card",
  "p-0",
  "flex",
  "flex-col",
  "h-full",
  "border",
  "border-gray-300",
  "dark:border-purple-700",
  "hover:shadow-standard hover:brightness-110 hover:-translate-y-0.5 transition-all duration-300",
])
const content = cva(["gradient-radial-mono grid flex-1 gap-4 rounded-t-none p-6"])
const footer = cva(["mt-auto flex items-center justify-between"])

const BlogCard: FC<BlogCardProps> = ({
  title,
  featuredImage,
  excerpt,
  body,
  slug,
  className,
  internalName: _internalName,
  publishDate: _publishDate,
  ...props
}) => {
  const minutes = timeToReadStructuredText(body)
  const path = `/blog/${slug}`

  return (
    <Link href={path}>
      <article className={twMerge(blogCard({ className }))} {...props}>
        {featuredImage && (
          <div className="relative h-80">
            <Image
              src={featuredImage.url}
              alt={featuredImage.alt || ""}
              fill
              className="rounded-t-lg object-cover"
            />
          </div>
        )}
        <div className={content()}>
          <h3 className="font-body text-lg leading-tight">{title}</h3>
          <StructuredText data={excerpt} className="line-clamp-child text-base" />
          <div className={footer()}>
            <Button variant="text" size="sm" endIcon="right-arrow" className="w-fit">
              See Full Article
            </Button>
            <span className="eyebrow">{minutes} minute read</span>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default BlogCard
