import { ComponentPropsWithoutRef, ReactNode } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"
import Icon from "@molecules/Icon"
import parseUrl from "@utils/parseUrl"
import type { IconIds } from "@molecules/Icon/iconIds"

export interface ButtonProps
  extends ComponentPropsWithoutRef<"button">,
    VariantProps<typeof button> {
  underline?: boolean
  url?: string
  startIcon?: IconIds
  endIcon?: IconIds
  iconSize?: number | string
  label?: ReactNode
}

const button = cva(
  [
    "justify-center",
    "inline-flex",
    "items-center",
    "rounded-lg",
    "text-center",
    "transition-all",
    "duration-300",
    "delay-50",
    "font-heading",
    "font-extrabold",
    "gap-2",
    "w-full",
    "sm:w-fit",
  ],
  {
    variants: {
      variant: {
        contained: [
          "bg-primary-500 text-common-white hover:bg-primary-600 hover:shadow-standard",
          "dark:bg-gray-200 dark:text-common-black dark:hover:bg-primary-600",
        ],
        outlined: [
          "text-common-black border border-primary-500 hover:bg-gray-200 hover:border-primary-400",
          "dark:text-common-white dark:border-gray-200 dark:hover:bg-purple-800 dark:hover:border-primary-600",
        ],
        text: [
          "text-common-black hover:text-purple-600",
          "dark:text-common-white dark:hover:text-primary-500",
        ],
      },
      size: {
        sm: ["min-w-20", "h-fit", "min-h-10", "text-lg", "py-1", "px-6"],
        md: ["min-w-32", "h-fit", "min-h-12", "py-2", "px-8", "text-2xl"],
        lg: ["min-w-36", "h-fit", "min-h-14", "py-3", "px-9", "text-2xl"],
      },
    },
    defaultVariants: {
      variant: "contained",
      size: "md",
    },
    compoundVariants: [
      {
        variant: ["text"],
        size: ["lg", "md", "sm"],
        className: ["min-w-0", "min-h-0", "py-0", "px-0"],
      },
    ],
  }
)

const Button = ({
  className,
  variant,
  size,
  url,
  iconSize: inputIconSize,
  startIcon,
  endIcon,
  label,
  ...props
}: ButtonProps) => {
  const { as, tabIndex: _tabIndex, ...parsedUrl } = parseUrl(url)
  const Component = url ? as : "button"
  const iconSize = inputIconSize || (size === "sm" ? 14 : 20)
  const iconProps = {
    size: iconSize,
    "aria-hidden": true,
  }

  return (
    <Component className={twMerge(button({ variant, size, className }))} {...parsedUrl} {...props}>
      {startIcon && <Icon id={startIcon} {...iconProps} />}
      <span className="mb-1">{props.children || label}</span>
      {endIcon && <Icon id={endIcon} {...iconProps} />}
    </Component>
  )
}

export default Button
