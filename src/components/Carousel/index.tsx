import { ComponentPropsWithoutRef, FC } from "react"
import Carousel from "@molecules/Carousel"
import Section from "@molecules/Section"
import TestimonialCard from "@components/TestimonialCard"
import type { Testimonial } from "src/content/schema"

interface CarouselComponentProps extends ComponentPropsWithoutRef<"section"> {
  cards: Testimonial[]
}

const CarouselComponent: FC<CarouselComponentProps> = ({ cards }) => {
  return (
    <Section>
      <Carousel>
        {cards.map((card) => (
          <TestimonialCard key={card.person.lastName} {...card} />
        ))}
      </Carousel>
    </Section>
  )
}

export default CarouselComponent
