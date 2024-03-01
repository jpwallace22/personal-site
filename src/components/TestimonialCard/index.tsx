import "./styles/testimonialCard.css"
import { ComponentPropsWithoutRef, FC } from "react"
import Circle from "@molecules/Circle"
import Icon from "@molecules/Icon"
import StructuredText from "@components/StructuredText"
import Author from "@components/TestimonialCard/Author"

interface TestimonialCardProps extends TestimonialCardFragment, ComponentPropsWithoutRef<"div"> {}

const TestimonialCard: FC<TestimonialCardProps> = ({ quote, person }) => {
  return (
    <div className="testimonial-card h-full w-[90vw] max-w-3xl">
      <article className="card border-gradient-primary shadow-standard gradient-radial-mono relative m-1 flex h-full flex-col p-0 ">
        <Icon
          id="quote"
          className="absolute bottom-8 right-12 z-0 hidden -scale-x-1 text-common-white dark:text-purple-950 lg:block"
          size={200}
        />

        {person && (
          <div className="contain-paint bg-common-white/70 p-6 dark:bg-purple-950/50 lg:p-8">
            <Circle dots className="-right-60 -top-96 z-40 w-full opacity-20" />
            <Author {...person} />
          </div>
        )}
        <div className="z-20 p-6 lg:p-8">
          <StructuredText
            data={quote}
            className="text-xl font-normal leading-8 lg:text-3xl xl:text-4xl"
          />
        </div>
      </article>
    </div>
  )
}

export default TestimonialCard
