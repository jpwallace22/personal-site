import "./styles/testimonialCard.css"
import { ComponentPropsWithoutRef, FC } from "react"
import Icon from "@molecules/Icon"
import StructuredText from "@components/StructuredText"
import Author from "@components/TestimonialCard/Author"

interface TestimonialCardProps extends TestimonialCardFragment, ComponentPropsWithoutRef<"div"> {}

const TestimonialCard: FC<TestimonialCardProps> = ({ quote, person }) => {
  return (
    <div className="testimonial-card h-full w-[90vw] max-w-3xl pt-10">
      <article className="card border-gradient-primary shadow-standard gradient-radial-mono relative m-1 flex h-full flex-col justify-center gap-8 p-6 pt-12 lg:p-12">
        <Icon
          id="quote"
          className="absolute -top-10 z-10 text-purple-400  dark:text-gray-300"
          size={75}
        />
        {person && <Author {...person} className="z-10" />}
        <StructuredText data={quote} className="z-10 text-xl font-normal lg:text-3xl xl:text-4xl" />
        <Icon
          id="quote"
          className="absolute right-12 top-8 z-0 hidden -scale-x-1 text-common-white dark:text-purple-950 lg:block"
          size={200}
        />
      </article>
    </div>
  )
}

export default TestimonialCard
