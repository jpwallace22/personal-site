import { ComponentPropsWithoutRef, ElementType, FC } from "react"
import { cva, VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"

export const GLOBAL_MAX_WIDTH = "max-w-screen-2xl mx-auto"
export const GLOBAL_PADDING = "px-4 sm:px-6 lg:px-8"

export interface SectionProps
  extends ComponentPropsWithoutRef<"section">,
    VariantProps<typeof section> {
  wrapperClass?: string
  as?: ElementType
}
const section = cva([GLOBAL_MAX_WIDTH, "py-12 sm:py-16 lg:py-20"], {
  variants: {
    fullWidth: {
      true: ["max-w-full"],
    },
    paddingTop: {
      none: ["pt-0 sm:pt-0 lg:pt-0"],
      sm: ["pt-4 sm:pt-8 lg:pt-12"],
      md: ["pt-8 sm:pt-12 lg:pt-16"],
      lg: ["pt-12 sm:pt-16 lg:pt-20"],
    },
    paddingBottom: {
      none: ["pb-0 sm:pb-0 lg:pb-0"],
      sm: ["pb-4 sm:pb-8 lg:pb-12"],
      md: ["pb-8 sm:pb-12 lg:pb-16"],
      lg: ["pb-12 sm:pb-16 lg:pb-20"],
    },
  },
  defaultVariants: {
    paddingBottom: "lg",
    paddingTop: "lg",
  },
})

const Section: FC<SectionProps> = ({
  children,
  className,
  wrapperClass,
  fullWidth,
  as: Component = "section",
  paddingBottom,
  paddingTop,
  ...props
}) => {
  return (
    <div className={twMerge(GLOBAL_PADDING, wrapperClass, "contain-layout")}>
      <Component
        className={twMerge(section({ fullWidth, paddingBottom, paddingTop, className }))}
        {...props}
      >
        {children}
      </Component>
    </div>
  )
}

export default Section
