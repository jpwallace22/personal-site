"use client"

import React, { createContext, memo, useState } from "react"

interface CarouselContextReturn {
  activeIndex: number
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>
}

export const CarouselContext = createContext<CarouselContextReturn>({} as CarouselContextReturn)

export const CarouselProvider = memo(function CarouselProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <CarouselContext.Provider
      value={{
        activeIndex,
        setActiveIndex,
      }}
    >
      {children}
    </CarouselContext.Provider>
  )
})
