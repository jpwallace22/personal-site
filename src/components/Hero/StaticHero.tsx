import Image from "next/image"
import { twJoin } from "tailwind-merge"
import Circle from "@molecules/Circle"
import DrawnArrow from "@molecules/DrawnArrow"
import Section from "@molecules/Section"
import logoPath from "src/assets/images/logo-gradient.webp"

const StaticHero = () => {
  const styles = {
    image: ["mb-8 mr-8", "lg:float-left lg:mb-0"],
    h1: [
      "-mt-4 max-w-[360px] text-6xl leading-[0.8]",
      "sm:max-w-[575px] sm:text-8xl sm:leading-[0.75]",
      "lg:max-w-[920px]",
    ],
    wrapper: ["absolute top-24", "lg:top-[40%]"],
    hand: ["text-5xl", "sm:text-6xl"],
    tagline: [
      "absolute -bottom-12 -rotate-[10deg] whitespace-nowrap",
      "text-2xl dark:text-gray-500 dark:font-thin",
      "sm:text-4xl sm:right-1",
      "lg:text-5xl lg:-bottom-8 lg:-right-16",
    ],
  }

  return (
    <Section>
      <div className="relative h-[80vh]">
        <Circle dots className="left-1/2" priority />
        <Circle size="lg" contrast="low" className="bottom-1/2 right-1/3 lg:right-1/2" />
        <Circle size="md" contrast="high" className="left-3/4 top-12" />
        <div className={twJoin(styles.wrapper)}>
          <DrawnArrow className="absolute bottom-[115%] right-3/4 hidden w-96 lg:block" animated />
          {logoPath && (
            <Image
              src={logoPath}
              width={130}
              height={130}
              alt="A take on the Typescript logo with JW in the place of TS"
              className={twJoin(styles.image)}
            />
          )}
          <h1 className={twJoin(styles.h1)}>
            Oh, hello there!<span className={twJoin(styles.hand)}> 👋🏼</span> I&apos;m{" "}
            <span className="text-gradient-primary">Justin Wallace</span> A dedicated developer &
            designer
          </h1>
          <span className={twJoin(styles.tagline)}>(Don&apos;t you just love alliteration?)</span>
        </div>
      </div>
    </Section>
  )
}

export default StaticHero
