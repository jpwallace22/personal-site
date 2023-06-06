import { tv, type VariantProps } from "tailwind-variants"
import Icon from "@molecules/Icon"
import parseUrl from "@utils/parseUrl"
import type { IconIds } from "@molecules/Icon/iconIds"

const button = tv({
  base: [
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
    "gap-2",
  ],
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
      sm: ["min-w-20", "h-full", "min-h-10", "text-lg", "py-1", "px-6"],
      md: ["min-w-32", "h-full", "min-h-12", "py-2", "px-8", "text-2xl"],
      lg: ["min-w-36", "h-full", "min-h-14", "py-3", "px-9", "text-2xl"],
    },
  },
  defaultVariants: {
    variant: "contained",
    size: "md",
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLAnchorElement | HTMLButtonElement>,
    VariantProps<typeof button> {
  underline?: boolean
  href?: string
  startIcon?: IconIds
  endIcon?: IconIds
  iconSize?: number | string
}

const Button = ({
  className,
  variant,
  size,
  href,
  iconSize: inputIconSize,
  startIcon,
  endIcon,
  ...props
}: ButtonProps) => {
  const { as, tabIndex: _tabIndex, ...parsedUrl } = parseUrl(href)
  const Component = href ? as : "button"
  const iconSize = inputIconSize || (size === "sm" ? 14 : 20)
  const iconProps = {
    size: iconSize,
    "aria-hidden": true,
  }

  return (
    <Component className={button({ variant, size, className })} {...parsedUrl} {...props}>
      {startIcon && <Icon id={startIcon} {...iconProps} />}
      <span className="mb-1">{props.children}</span>
      {endIcon && <Icon id={endIcon} {...iconProps} />}
    </Component>
  )
}

export default Button
