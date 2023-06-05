import { cva, type VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"
import parseUrl from "@utils/parseUrl"

const link = cva(["cursor-pointer"], {
  variants: {
    variant: {
      unstyled: [],
      inline: ["text-purple-400", "font-bold", "dark:text-primary-400", "underline-animation"],
    },
  },
  defaultVariants: {
    variant: "unstyled",
  },
})

export interface LinkProps extends React.LinkHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof link> {
  href: string
}

const Link = ({ className, variant, href, ...props }: LinkProps) => {
  const { as: Component, ...parsedUrl } = parseUrl(href)

  return (
    Component !== "div" && (
      <Component className={twMerge(link({ variant, className }))} {...parsedUrl} {...props}>
        {props.children}
      </Component>
    )
  )
}

export default Link
