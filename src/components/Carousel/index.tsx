import { ComponentPropsWithoutRef, FC } from "react"
import Section from "@molecules/Section"
import Carousel from "@components/Carousel/Carousel"
import TestimonialCard from "@components/TestimonialCard"

interface CarouselComponentProps
  extends ComponentPropsWithoutRef<"section">,
    Clean<CarouselFragment> {}

const cardChooser = (card: CarouselFragment["cards"][number]) => {
  switch (card.__typename) {
    case "TestimonialCardRecord":
      return <TestimonialCard {...card} />
    default:
      return null
  }
}

const CarouselComponent: FC<CarouselComponentProps> = ({ cards }) => {
  return (
    <Section>
      <Carousel>{cards.map((card) => cardChooser(card))}</Carousel>
    </Section>
  )
}

export default CarouselComponent
