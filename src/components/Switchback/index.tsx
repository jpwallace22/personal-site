import { ComponentPropsWithoutRef, ElementType, type FC } from "react"
import { cva, VariantProps } from "class-variance-authority"
import Image from "next/image"
import { twMerge } from "tailwind-merge"
import { FadeIn } from "@molecules/animations"
import Circle from "@molecules/Circle"
import HeadingComp, { HeadingMarkup } from "@molecules/Heading"
import Section from "@molecules/Section"
import circleStyleFromCMS from "@components/Switchback/utils/circleStyleFromCMS"

const wrapper = cva(
  ["flex", "w-full", "flex-col lg:flex-row", "items-center", "gap-12 xl:gap-32"],
  {
    variants: {
      reverse: {
        true: ["lg:flex-row-reverse"],
      },
      imageTop: {
        true: ["flex-col-reverse"],
      },
    },
  }
)
const circle = cva(["-z-10"], {
  variants: {
    designAccent: {
      md: ["-right-full -top-1/4 sm:-right-3/4"],
      lg: ["right-[180%] -top-1/4"],
      dots: ["-right-32 top-1/3"],
    },
  },
})
const content = cva(["w-full lg:w-7/12 xl:w-1/2", "flex flex-col gap-8"])
const asset = cva(["relative", "lg:w-5/12 xl:w-1/2"])

export type SwitchbackProps = Clean<SwitchbackFragment> &
  ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof circle> & {
    headingAs: ElementType
    animated?: boolean
    imageTop?: boolean
    priority?: boolean
  }

const Switchback: FC<SwitchbackProps> = ({
  heading,
  headingAs = "h2",
  image,
  reverse,
  body,
  bgColor,
  sectionId,
  designAccent,
  imageTop = false,
  animated = true,
  priority = false,
}) => {
  return (
    <Section wrapperClass={`bg-${bgColor}`} id={sectionId || undefined}>
      <FadeIn animated={animated}>
        <div className={twMerge(wrapper({ reverse, imageTop }))}>
          <div className={content()}>
            <HeadingComp headline={heading} as={headingAs as HeadingMarkup} body={body} />
          </div>
          <div className={asset()}>
            {designAccent && (
              <Circle {...circleStyleFromCMS(designAccent)} className={circle({ designAccent })} />
            )}
            {image?.url && (
              <Image
                src={image?.url}
                width={700}
                height={700}
                alt={image.alt || ""}
                priority={priority}
              />
            )}
          </div>
        </div>
      </FadeIn>
    </Section>
  )
}

export default Switchback
