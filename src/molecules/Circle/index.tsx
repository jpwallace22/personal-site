import { FC } from "react"
import { cva, VariantProps } from "class-variance-authority"
import Image from "next/image"
import { twMerge } from "tailwind-merge"
import dotsPath from "src/assets/images/dots.webp"

const baseStyles = ["-z-10", "absolute"]
const circle = cva(["rounded-full", ...baseStyles], {
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

export interface CircleProps extends VariantProps<typeof circle> {
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
      className={twMerge(baseStyles, className)}
      {...props}
    />
  ) : (
    <div aria-hidden role="img" className={twMerge(circle({ size, contrast, className }))} {...props} />
  )
}

export default Circle
