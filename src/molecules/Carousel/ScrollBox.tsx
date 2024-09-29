"use client"

import "./styles/carousel.css"
import React, { Children, ComponentPropsWithoutRef, createRef, FC, useRef } from "react"
import { cva, VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"
import Pagination from "@molecules/Pagination"
import { useAbsoluteHeight } from "@utils/hooks/useAbsoluteHeight"
import { useAbsoluteRight } from "@utils/hooks/useAbsoluteRight"
import useCarousel from "../../molecules/Carousel/utils/useCarousel"

export interface CarouselProps
  extends ComponentPropsWithoutRef<"section">,
    VariantProps<typeof card> {
  pagination?: boolean
  hideGradient?: boolean
}

const scrollBox = cva(
  [
    "flex",
    "overflow-x-scroll",
    "bg",
    "no-scrollbar",
    "scroll-smooth",
    "items-stretch",
    "overscroll-auto",
    "right-0",
    "scroll-padding",
    "absolute",
    "left-0",
  ],
  {
    variants: {
      scrollSnap: {
        true: ["snap-mandatory snap-x"],
      },
    },
    defaultVariants: {
      scrollSnap: true,
    },
  }
)
const card = cva(["mx-4", "first:ml-0", "last:mr-[2000px]", "mb-8"], {
  variants: {
    scrollSnap: {
      true: ["snap-start"],
    },
  },
  defaultVariants: {
    scrollSnap: true,
  },
})

const ScrollBox: FC<CarouselProps> = ({ children, pagination = true }) => {
  const refs = Array.from({ length: Children.count(children) }, () => createRef<HTMLDivElement>())
  const scrollBoxRef = useRef<Maybe<HTMLDivElement>>(null)
  const wrapperRef = useRef<Maybe<HTMLDivElement>>(null)
  const height = useAbsoluteHeight(refs[0])
  /* eslint-disable react-compiler/react-compiler */
  const right = useAbsoluteRight(wrapperRef)
  const { activeIndex, onPaginationClick, onLeftClick, onRightClick } = useCarousel(
    scrollBoxRef,
    refs
  )

  return (
    <>
      <div className="relative" style={{ height }} ref={wrapperRef}>
        <div ref={scrollBoxRef} className={twMerge(scrollBox())} style={{ right }}>
          {Children.map(children, (child, i) => {
            return (
              <div key={`carousel-card-${i}`} ref={refs[i]} className={twMerge(card())}>
                {child}
              </div>
            )
          })}
        </div>
      </div>
      {pagination && (
        <Pagination
          count={Children.count(children)}
          onDotClick={onPaginationClick}
          onLeftClick={onLeftClick}
          onRightClick={onRightClick}
          activeDot={activeIndex}
          className="mt-8"
        />
      )}
    </>
  )
}

export default ScrollBox
