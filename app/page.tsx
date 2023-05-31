import { Metadata, NextPage } from "next"
import Button from "@molecules/Button"
import Icon from "@molecules/Icon"
import Section from "@molecules/Section"
import StaticHero from "@components/Hero/StaticHero"
import { ModeChanger } from "@components/TEMP"

export const metadata: Metadata = {
  title: "Justin Wallace Development",
}

const Page: NextPage = () => {
  return (
    <>
      {/* @ts-expect-error Async Server Component (fix in TS 5.1) */}
      <StaticHero />
      <ModeChanger />
      <Section>
        <Button className="mr-8">Get started</Button>
        <Button href="/about" variant="outlined" startIcon="next">
          Deploy Now
        </Button>
        <Button href="/about" variant="text" endIcon="next">
          Deploy Now
        </Button>
      </Section>
      <Section>
        <div className="border-gradient before:gradient-primary my-3 h-[200px] w-[200px] rounded-lg bg-purple-900"></div>
        <div className="flex items-center gap-8">
          <Icon id="typescript" size={100} />
          <Icon id="node" size={80} />
          <Icon id="react" size={80} className="text-common-black dark:text-common-white" />
        </div>
      </Section>
    </>
  )
}

export default Page
