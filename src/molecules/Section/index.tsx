import { FC } from "react"
import { cva, VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"

const section = cva(["max-w-screen-2xl mx-auto py-12 sm:py-16 lg:py-20"], {
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
    <div className={twMerge("px-4 sm:px-6 lg:px-8", wrapperClass)}>
      <section className={twMerge(section({ fullWidth, className }))} {...props}>
        {children}
      </section>
    </div>
  )
}

export default Section
