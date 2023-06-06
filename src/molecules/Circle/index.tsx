import { FC } from "react"
import Image from "next/image"
import { tv, VariantProps } from "tailwind-variants"
import dotsPath from "src/assets/images/dots.webp"

const baseCircle = tv({ base: ["rounded-full", "-z-10", "absolute"] })
const solidCircle = tv({
  extend: baseCircle,
  variants: {
    size: {
      md: ["w-[580px] h-[580px]"],
      lg: ["w-[1280px] h-[1280px]"],
    },
    contrast: {
      low: ["bg-gray-100", "dark:bg-purple-900"],
      high: ["bg-gray-200", "dark:bg-purple-800"],
    },
  },
  defaultVariants: {
    size: "md",
    contrast: "high",
  },
})

export interface CircleProps extends VariantProps<typeof solidCircle> {
  className?: string
  dots?: boolean
}

const Circle: FC<CircleProps> = ({ size, contrast, className, dots, ...props }) => {
  return dots ? (
    <Image
      aria-hidden
      src={dotsPath}
      width={635}
      height={629}
      alt=""
      className={baseCircle({ className })}
      {...props}
    />
  ) : (
    <div aria-hidden role="img" className={solidCircle({ size, contrast, className })} {...props} />
  )
}

export default Circle
