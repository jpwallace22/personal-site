"use client"

import { ComponentPropsWithoutRef, createRef, FC } from "react"
import { cva } from "class-variance-authority"
import Image from "next/image"
import { twMerge } from "tailwind-merge"
import { separateSwitchbacks } from "@components/ScrollingSwitchback/utils/separateSwitchbacks"
import StructuredText from "@components/StructuredText"
import { useIntersection } from "@utils/hooks/useIntersectionObserver"

export interface ScrollingSwitchbackProps
  extends Clean<ScrollingSwitchbackFragment>,
    ComponentPropsWithoutRef<"div"> {}

const contentStyles = cva(["card", "p-8", "gradient-radial-mono", "gap-8", "grid"], {
  variants: {
    active: {
      true: ["border-gradient-primary", "shadow-standard"],
    },
  },
})

const ScrollingSwitchback: FC<ScrollingSwitchbackProps> = ({
  switchbacks,
  className,
  ...props
}) => {
  const [contentArray, images] = separateSwitchbacks(switchbacks)
  const refs = Array.from({ length: contentArray.length }, () => createRef<HTMLDivElement>())
  const [_, activeIndex] = useIntersection(refs, { init: { threshold: 1 } })

  const image = images[activeIndex || 0].image

  return (
    <div className={twMerge("relative flex gap-12", className)} {...props}>
      <div className="flex-auto">
        {image && (
          <Image
            src={image.url}
            width={500}
            height={200}
            alt={image.alt || ""}
            className="sticky top-1/3 w-full rounded-lg"
          />
        )}
      </div>
      <div className="flex w-5/12 flex-col gap-[60vh] py-32">
        {contentArray.map(({ heading, body }, i) => (
          <div
            key={heading}
            ref={refs[i]}
            className={twMerge(contentStyles({ active: i === activeIndex }))}
          >
            <h3 className="text-4xl xl:text-5xl">{heading}</h3>
            <StructuredText data={body} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ScrollingSwitchback
