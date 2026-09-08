"use client"

import React, { FC, type ReactNode, useState } from "react"
import { cva, VariantProps } from "class-variance-authority"
import Image from "next/image"
import { twMerge } from "tailwind-merge"
import Circle from "@molecules/Circle"
import Heading, { HeadingMarkup } from "@molecules/Heading"
import Section from "@molecules/Section"
import { FeatureCard } from "@components/FeatureHighlight/FeatureCard"
import { splitAndColorArray } from "@components/FeatureHighlight/utils/splitAndColor"
import type { FeatureCard as FeatureCardData } from "src/content/about"

interface FeatureHighlightGridProps extends VariantProps<typeof wrapper> {
  heading: string
  headingAs?: HeadingMarkup
  eyebrow?: string
  /** Rich text arrives pre-rendered so the MDX runtime stays out of the client bundle. */
  body?: ReactNode
  cards: (Omit<FeatureCardData, "body"> & { body?: ReactNode })[]
}

const wrapper = cva(["grid", "lg:grid-cols-12", "gap-12 "])

const columns = cva([
  "grid",
  "gap-8",
  "md:grid-cols-2",
  "md:items-center",
  "lg:gap-12",
  "lg:col-span-8",
])

const singleColumn = cva(["grid", "gap-8", "w-full", "lg:gap-12"], {
  variants: {
    shiftDown: {
      true: ["md:mt-32"],
    },
  },
})

const imageStyles = cva(["relative mt-16", "h-[450px]", "w-full", "hidden"], {
  variants: {
    active: {
      true: ["lg:block"],
    },
  },
})

const FeatureHighlightGrid: FC<FeatureHighlightGridProps> = ({
  eyebrow,
  heading,
  headingAs,
  body,
  cards,
}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const twoArrays = splitAndColorArray(cards)

  return (
    <Section className={twMerge(wrapper())}>
      <div className="grid h-fit gap-3 lg:col-span-4">
        <Heading as={headingAs} eyebrow={eyebrow} headline={heading} body={body} />
        {cards.map(
          ({ image }, i) =>
            image && (
              <div key={i} className={twMerge(imageStyles({ active: i === activeIndex }))}>
                <Image src={image.url} alt={image.alt || ""} fill className="object-contain" />
              </div>
            )
        )}
      </div>
      <Circle className="absolute -top-24 left-1/4 " dots />
      <Circle className="absolute -bottom-96 left-3/4 " size="md" contrast="high" />
      <div className={twMerge(columns())}>
        {twoArrays?.map((features, index) => (
          <div
            key={`feature-column-${index}`}
            className={twMerge(singleColumn({ shiftDown: cards.length === 4 && index === 0 }))}
          >
            {features.map((feature, i) => {
              const activeIndexCalc = index ? i + 2 : i
              return (
                <FeatureCard
                  key={feature.heading}
                  onMouseEnter={() => setActiveIndex(i + index * 2)}
                  active={activeIndexCalc === activeIndex}
                  {...feature}
                />
              )
            })}
          </div>
        ))}
      </div>
    </Section>
  )
}

export default FeatureHighlightGrid
