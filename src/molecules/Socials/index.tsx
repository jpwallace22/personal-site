import { ComponentPropsWithoutRef, FC } from "react"
import { cva, VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"
import Icon from "@molecules/Icon"
import { IconIds } from "@molecules/Icon/iconIds"
import Link from "@molecules/Link"

interface SocialData {
  social: IconIds
  link: string
}

interface SocialProps extends VariantProps<typeof styles>, ComponentPropsWithoutRef<"div"> {
  socials?: SocialData[]
}

const defaultSocialData = [
  {
    social: "github",
    link: "https://www.github.com/jpwallace22",
  },
  {
    social: "linkedIn",
    link: "https://www.linkedin.com/in/thejustinwallace",
  },
  {
    social: "instagram",
    link: "https://www.instagram.com/van.surf.climb",
  },
]

const styles = cva(["flex items-center"], {
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

const Socials: FC<SocialProps> = ({
  size,
  colors,
  className,
  socials = defaultSocialData,
  ...props
}) => {
  return (
    <div className={twMerge(styles({ size, className }))} {...props}>
      {socials.map(({ social, link }) => (
        <Link key={social} href={link} aria-label={social}>
          <Icon
            size={sizeMap[size || "sm"]}
            id={social as IconIds}
            className={twMerge(styles({ colors }))}
          />
        </Link>
      ))}
    </div>
  )
}

export default Socials
