import { ComponentPropsWithoutRef } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"
import parseUrl from "@utils/parseUrl"

export interface LinkProps extends ComponentPropsWithoutRef<"a">, VariantProps<typeof link> {}

const link = cva(["cursor-pointer"], {
  variants: {
    variant: {
      unstyled: [],
      inline: ["text-purple-400", "font-bold", "dark:text-primary-400", "underline-animation"],
    },
    asDiv: {
      true: ["cursor-auto"],
    },
  },
  defaultVariants: {
    variant: "unstyled",
  },
})

const Link = ({ className, variant, href, ...props }: LinkProps) => {
  const { as: Component, ...parsedUrl } = parseUrl(href)
  const asDiv = Component === "div"
  variant = asDiv ? "unstyled" : variant

  return (
    <Component className={twMerge(link({ variant, className, asDiv }))} {...parsedUrl} {...props}>
      {props.children}
    </Component>
  )
}

export default Link
