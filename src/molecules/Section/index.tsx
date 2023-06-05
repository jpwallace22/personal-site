import { FC } from "react"
import { cva, VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"

export const GLOBAL_MAX_WIDTH = "max-w-screen-2xl mx-auto"
export const GLOBAL_PADDING = "px-4 sm:px-6 lg:px-8"

const section = cva([GLOBAL_MAX_WIDTH, "py-12 sm:py-16 lg:py-20"], {
  variants: {
    fullWidth: {
      true: ["max-w-full"],
    },
  },
})

export interface SectionProps extends React.InputHTMLAttributes<HTMLSelectElement>, VariantProps<typeof section> {
  className?: string
  wrapperClass?: string
}

const Section: FC<SectionProps> = ({ children, className, wrapperClass, fullWidth, ...props }) => {
  return (
    <div className={twMerge(GLOBAL_PADDING, wrapperClass)}>
      <section className={twMerge(section({ fullWidth, className }))} {...props}>
        {children}
      </section>
    </div>
  )
}

export default Section
