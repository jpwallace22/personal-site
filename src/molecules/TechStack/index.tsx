import { ComponentPropsWithoutRef, FC } from "react"
import { cva, VariantProps } from "class-variance-authority"
import Image from "next/image"
import { twMerge } from "tailwind-merge"

interface TechStackProps extends VariantProps<typeof techStack>, ComponentPropsWithoutRef<"ul"> {
  techs: {
    title?: Maybe<string>
    thumbnail?: Maybe<ImageFragment>
  }[]
  thumbSize?: number
  showTitles?: boolean
}

const techStack = cva(["flex", "gap-6"], {
  variants: {
    direction: {
      horizontal: ["flex-row"],
      vertical: ["flex-col"],
    },
    reverse: {
      true: [],
    },
  },
  compoundVariants: [
    {
      direction: "horizontal",
      reverse: true,
      className: "flex-row-reverse",
    },
    {
      direction: "vertical",
      reverse: true,
      className: "flex-col-reverse",
    },
  ],
})

const titleStyles = cva([
  "hidden",
  "font-medium",
  "font-heading",
  "dark:text-gray-100",
  "md:block",
  "tracking-wide",
  "text-purple-900",
])

const TechStack: FC<TechStackProps> = ({
  techs,
  direction,
  className,
  reverse,
  thumbSize = 32,
  showTitles = false,
  ...props
}) => {
  return (
    <ul className={twMerge(techStack({ direction, reverse, className }))} {...props}>
      {techs.map(
        ({ title, thumbnail }) =>
          thumbnail?.url && (
            <li key={title} className="flex flex-col items-center gap-2">
              <Image
                src={thumbnail?.url}
                width={thumbSize}
                height={thumbSize}
                alt={title || ""}
                className="aspect-square"
              />
              {showTitles && <span className={titleStyles()}>{title}</span>}
            </li>
          )
      )}
    </ul>
  )
}

export default TechStack
