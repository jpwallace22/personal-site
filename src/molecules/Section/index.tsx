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
  },
})

const Section: FC<SectionProps> = ({
  children,
  className,
  wrapperClass,
  fullWidth,
  as: Component = "section",
  ...props
}) => {
  return (
    <div className={twMerge(GLOBAL_PADDING, wrapperClass, "contain-layout")}>
      <Component className={twMerge(section({ fullWidth, className }))} {...props}>
        {children}
      </Component>
    </div>
  )
}

export default Section
