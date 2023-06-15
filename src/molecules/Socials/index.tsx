import { ComponentPropsWithoutRef, FC } from "react"
import { cva, VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"
import Icon from "@molecules/Icon"
import { IconIds } from "@molecules/Icon/iconIds"
import Link from "@molecules/Link"

const SOCIAL_DATA = {
  github: "https://www.github.com/jpwallace22",
  linkedIn: "https://www.linkedin.com/in/thejustinwallace",
  instagram: "https://www.instagram.com/van.surf.climb",
}

interface SocialProps extends VariantProps<typeof socials>, ComponentPropsWithoutRef<"div"> {}

const socials = cva(["flex items-center"], {
  variants: {
    size: {
      sm: ["gap-4"],
      md: ["gap-5"],
      lg: ["gap-7"],
    },
    colors: {
      standard: [
        "text-purple-800 dark:text-gray-200",
        "hover:text-primary-500 dark:hover:text-primary-500",
      ],
    },
  },
  defaultVariants: { size: "md", colors: "standard" },
})

export const sizeMap = {
  sm: 32,
  md: 48,
  lg: 56,
}

const Socials: FC<SocialProps> = ({ size, colors, className, ...props }) => {
  return (
    <div className={twMerge(socials({ size, className }))} {...props}>
      {Object.entries(SOCIAL_DATA).map(([social, link]) => (
        <Link key={social} href={link} aria-label={social}>
          <Icon
            size={sizeMap[size || "sm"]}
            id={social as IconIds}
            className={twMerge(socials({ colors }))}
          />
        </Link>
      ))}
    </div>
  )
}

export default Socials
