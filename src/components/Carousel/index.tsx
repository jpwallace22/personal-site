import { ComponentPropsWithoutRef, FC } from "react"
import Carousel from "@molecules/Carousel"
import Section from "@molecules/Section"
import TestimonialCard from "@components/TestimonialCard"

interface CarouselComponentProps
  extends ComponentPropsWithoutRef<"section">,
    Clean<CarouselFragment> {}

const cardChooser = (card: CarouselFragment["cards"][number]) => {
  switch (card.__typename) {
    case "TestimonialCardRecord":
      return <TestimonialCard key={card.person?.lastName} {...card} />
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
