import { cva, type VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"

import parseUrl from "@utils/parseUrl"

const button = cva(
  [
    "justify-center",
    "inline-flex",
    "items-center",
    "rounded-xl",
    "text-center",
    "transition-all",
    "duration-300",
    "delay-50",
    "font-heading",
    "font-extrabold",
  ],
  {
    variants: {
      variant: {
        contained: [
          "bg-primary-500 text-common-white hover:bg-primary-600 hover:shadow-xl",
          "dark:bg-gray-200 dark:text-common-black dark:hover:bg-primary-600",
        ],
        outlined: [
          "text-common-black border border-primary-500 hover:bg-gray-200 hover:border-primary-400",
          "dark:text-common-white dark:border-gray-200 dark:hover:bg-purple-800 dark:hover:border-primary-600",
        ],
        text: ["text-common-black hover:text-purple-600", "dark:text-common-white dark:hover:text-gray-500"],
      },
      size: {
        sm: ["min-w-20", "h-full", "min-h-10", "text-lg", "pt-1", "pb-2", "px-6"],
        md: ["min-w-32", "h-full", "min-h-12", "pt-2", "pb-3", "px-8", "text-2xl"],
        lg: ["min-w-36", "h-full", "min-h-14", "pt-3", "pb-4", "px-9", "text-2xl"],
        link: [],
      },
    },
    defaultVariants: {
      variant: "contained",
      size: "md",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLAnchorElement | HTMLButtonElement>,
    VariantProps<typeof button> {
  underline?: boolean
  href?: string
}

const Button = ({ className, variant, size, href, ...props }: ButtonProps) => {
  const { as, tabIndex: _tabIndex, ...parsedUrl } = parseUrl(href)
  const Component = href ? as : "button"

  return (
    <Component className={twMerge(button({ variant, size, className }))} {...parsedUrl} {...props}>
      {props.children}
    </Component>
  )
}

export default Button
