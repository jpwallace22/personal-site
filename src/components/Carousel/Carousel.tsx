"use client"

import "./styles/carousel.css"
import { Children, ComponentPropsWithoutRef, createRef, FC, useRef } from "react"
import { cva, VariantProps } from "class-variance-authority"
import dynamic from "next/dynamic"
import { twMerge } from "tailwind-merge"
import useCarousel from "@components/Carousel/utils/useCarousel"

const Pagination = dynamic(() => import("@molecules/Pagination"))

interface CarouselProps
  extends ComponentPropsWithoutRef<"section">,
    VariantProps<typeof card>,
    VariantProps<typeof gradients> {
  pagination?: boolean
}

const scrollBox = cva(
  ["flex", "overflow-x-scroll", "bg", "no-scrollbar", "scroll-smooth", "items-stretch"],
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
const card = cva(["mx-4", "first:ml-0", "last:mr-0", "flex-full", "mb-8"], {
  variants: {
    width: {
      full: ["md:flex-[0_0_66%]"],
      half: ["md:flex-1/2"],
      third: ["md:flex-1/3"],
    },
    scrollSnap: {
      true: ["snap-center"],
    },
  },
  defaultVariants: {
    width: "full",
    scrollSnap: true,
  },
})
const gradients = cva(
  [
    "absolute",
    "left-0",
    "right-0",
    "top-0",
    "bottom-0",
    "pointer-events-none",
    "carousel-fade",
    "z-50",
  ],
  {
    variants: {
      startGradient: {
        true: ["carousel-fade-to-l"],
      },
      endGradient: {
        true: ["carousel-fade-to-r"],
      },
    },
  }
)

const Carousel: FC<CarouselProps> = ({ children, width, scrollSnap, pagination = true }) => {
  const refs = Array.from({ length: Children.count(children) }, () => createRef<HTMLDivElement>())
  const scrollBoxRef = useRef<Maybe<HTMLDivElement>>(null)
  const { activeIndex, onDotClick, onLeftClick, onRightClick, isFirstCard, isLastCard } =
    useCarousel(scrollBoxRef, refs)

  return (
    <div className="relative">
      <div ref={scrollBoxRef} className={twMerge(scrollBox({ scrollSnap }))}>
        {Children.map(children, (child, i) => {
          return (
            <div key={i} ref={refs[i]} className={twMerge(card({ width, scrollSnap }))}>
              {child}
            </div>
          )
        })}
      </div>
      <div
        className={twMerge(gradients({ startGradient: isFirstCard, endGradient: isLastCard }))}
      ></div>
      {pagination && (
        <Pagination
          className="mt-3"
          count={Children.count(children)}
          onDotClick={onDotClick}
          onLeftClick={onLeftClick}
          onRightClick={onRightClick}
          activeDot={activeIndex}
        />
      )}
    </div>
  )
}

export default Carousel
