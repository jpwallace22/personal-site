import { ComponentPropsWithoutRef, FC, ReactNode } from "react"
import { cva } from "class-variance-authority"
import { twMerge } from "tailwind-merge"

export type HeadingLevels = 1 | 2 | 3 | 4 | 5 | 6
export type HeadingMarkup = `h${HeadingLevels}`

interface HeadingProps extends ComponentPropsWithoutRef<"h1"> {
  headline: ReactNode
  as?: HeadingMarkup
  eyebrow?: ReactNode
  size?: "sm" | "md" | "lg"
}

const wrapper = cva(["flex", "flex-col-reverse", "gap-3"])
const headingStyles = cva(["text-5xl sm:text-6xl xl:text-7xl"], {
  variants: {
    size: {
      sm: ["text-4xl sm:text-5xl xl:text-6xl"],
      md: ["text-5xl sm:text-6xl xl:text-7xl"],
      lg: ["text-6xl sm:text-7xl xl:text-8xl"],
    },
  },
  defaultVariants: {
    size: "md",
  },
})

const Heading: FC<HeadingProps> = ({ headline, as = "h2", className, eyebrow, size, ...props }) => {
  const Headline = as
  const Wrapper = eyebrow ? "hgroup" : "div"
  // aria required because hgroup is not semantically supported yet
  const aria = eyebrow ? { role: "group", "aria-roledescription": "Heading group" } : {}

  return (
    <Wrapper {...aria} className={wrapper()}>
      <Headline className={twMerge(headingStyles({ className, size }))} {...props}>
        {headline}
      </Headline>
      {/* Renders the eyebrow semantically below but visually above (for better screen reader UX) */}
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
    </Wrapper>
  )
}

export default Heading
