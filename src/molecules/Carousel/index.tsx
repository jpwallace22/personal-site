import "./styles/carousel.css"
import React, { FC } from "react"
import ScrollBox, { CarouselProps } from "@molecules/Carousel/ScrollBox"
import { CarouselProvider } from "@molecules/Carousel/utils/CarouselContext"

const Carousel: FC<CarouselProps> = (props) => {
  return (
    <CarouselProvider>
      <ScrollBox {...props} />
    </CarouselProvider>
  )
}

export default Carousel
