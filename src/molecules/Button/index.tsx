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
    "border",
    "border-blue-400",
    "transition-colors",
    "delay-50",
  ],
  {
    variants: {
      variant: {
        primary: ["bg-blue-400", "text-white", "hover:enabled:bg-blue-700"],
        secondary: ["bg-transparent", "text-blue-400", "hover:enabled:bg-blue-400", "hover:enabled:text-white"],
      },
      size: {
        sm: ["min-w-20", "h-full", "min-h-10", "text-sm", "py-1.5", "px-4"],
        lg: ["min-w-32", "h-full", "min-h-12", "text-lg", "py-2.5", "px-6"],
      },
      underline: { true: ["underline"], false: [] },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLAnchorElement | HTMLButtonElement>,
    VariantProps<typeof button> {
  underline?: boolean
  href?: string
}

const Button = ({ className, variant, size, underline, href, ...props }: ButtonProps) => {
  const { as, ...parsedUrl } = parseUrl(href)
  const Component = href ? as : "button"

  return (
    <Component className={twMerge(button({ variant, size, className, underline }))} {...parsedUrl} {...props}>
      {props.children}
    </Component>
  )
}

export default Button
