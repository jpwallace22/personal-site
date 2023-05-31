import Image from "next/image"
import { twJoin } from "tailwind-merge"
import { SiteLogoQuery } from "@codegen/sdk"
import Circle from "@molecules/Circle"
import Section from "@molecules/Section"
import makeServerQuery from "src/graphql/makeServerQuery"

const StaticHero = async () => {
  const {
    _site: { favicon },
  } = await makeServerQuery<SiteLogoQuery>(SiteLogoQuery)

  const styles = {
    image: ["mb-8 mr-8", "lg:float-left lg:mb-0"],
    h1: [
      "-mt-4 max-w-[360px] text-6xl leading-[0.8]",
      "sm:max-w-[575px] sm:text-8xl sm:leading-[0.7]",
      "lg:max-w-[920px]",
    ],
    wrapper: ["absolute top-24", "lg:top-[40%]"],
    hand: ["text-5xl", "sm:text-6xl"],
    tagline: [
      "absolute right-12 -bottom-12 -rotate-[10deg]",
      "text-2xl dark:text-gray-500 font-thin",
      "sm:text-4xl sm:right-1",
      "lg:text-5xl lg:-bottom-8 lg:-right-16",
    ],
  }

  return (
    <Section>
      <div className="contain-layout relative h-screen">
        <Circle dots className="left-1/2" />
        <Circle size="lg" contrast="low" className="bottom-1/2 right-1/3 lg:right-1/2" />
        <Circle className="left-3/4 top-12" />
        <div className={twJoin(styles.wrapper)}>
          {favicon?.url && (
            <Image
              src={favicon?.url}
              width={128}
              height={128}
              alt={favicon.alt || ""}
              className={twJoin(styles.image)}
            />
          )}
          <h1 className={twJoin(styles.h1)}>
            Oh, hello there!<span className={twJoin(styles.hand)}> 👋🏼</span> I&apos;m{" "}
            <span className="text-gradient-primary">Justin Wallace</span> A dedicated developer & designer
          </h1>
          <span className={twJoin(styles.tagline)}>(Don&apos;t you just love alliteration?)</span>
        </div>
      </div>
    </Section>
  )
}

export default StaticHero