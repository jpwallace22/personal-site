"use client"

import { Metadata, NextPage } from "next"

import Button from "@molecules/Button"
import Icon from "@molecules/Icon"
import Link from "@molecules/Link"
import Section from "@molecules/Section"
import Switch from "@molecules/Switch"

// export const metadata: Metadata = {
//   title: "Justin Wallace Development",
// }

const Page: NextPage = () => {
  const handleChecked = (checked: boolean) => {
    if (checked) {
      document.documentElement.classList.remove("dark")
    } else {
      document.documentElement.classList.add("dark")
    }
  }

  return (
    <>
      <Section>
        <h1 className="mb-8 text-6xl">This should be in Grotesque</h1>
        <p>
          <Link href="https://www.justinwallace.dev/about" variant="inline">
            A Rad Link{" "}
          </Link>
          And a bunch of random text that should be the right colors and change when in dark and light mode
        </p>
      </Section>
      <Section>
        <Button className="mr-8">Get started</Button>
        <Button href="/about" variant="outlined" startIcon="next">
          Deploy Now
        </Button>
        <Button href="/about" variant="text" endIcon="next">
          Deploy Now
        </Button>
        <Switch id="dark-mode" label={`Hit the lights`} onCheckedChange={(checked) => handleChecked(checked)} />
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
