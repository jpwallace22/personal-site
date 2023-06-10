import { FC } from "react"
import { cva, VariantProps } from "class-variance-authority"
import Image from "next/image"
import { twMerge } from "tailwind-merge"

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

interface TechStackProps extends VariantProps<typeof techStack>, ElementAttributes {
  techs: {
    title?: Maybe<string>
    thumbnail?: Maybe<ImageFragment>
  }[]
  thumbSize?: number
}

const TechStack: FC<TechStackProps> = ({ techs, direction, className, reverse, thumbSize = 32 }) => {
  return (
    <ul className={twMerge(techStack({ direction, reverse, className }))}>
      {techs.map(
        ({ title, thumbnail }) =>
          thumbnail?.url && (
            <li key={title}>
              <Image src={thumbnail?.url} width={thumbSize} height={thumbSize} alt={title || ""} />
            </li>
          )
      )}
    </ul>
  )
}

export default TechStack