import { FC } from "react"
import { cva, VariantProps } from "class-variance-authority"
import Image from "next/image"
import { twMerge } from "tailwind-merge"
import dotsPath from "src/assets/images/dots.webp"

export interface CircleProps extends VariantProps<typeof circle> {
  className?: string
}

const circle = cva(["rounded-full", "-z-10", "absolute"], {
  variants: {
    size: {
      md: ["w-[580px] h-[580px]"],
      lg: ["w-[1280px] h-[1280px]"],
    },
    contrast: {
      low: ["bg-gray-100", "dark:bg-purple-900"],
      high: ["bg-gray-200", "dark:bg-purple-800"],
    },
    dots: {
      true: [],
    },
  },
})

const Circle: FC<CircleProps> = ({ size, contrast, className, dots, ...props }) => {
  return dots ? (
    <Image
      aria-hidden
      src={dotsPath}
      width={635}
      height={629}
      alt=""
      className={twMerge(circle({ dots, className }))}
      {...props}
    />
  ) : (
    <div aria-hidden role="img" className={twMerge(circle({ size, contrast, className }))} {...props} />
  )
}

export default Circle
