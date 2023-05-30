"use client"

import { Metadata, NextPage } from "next"

import Button from "@molecules/Button"
import Icon from "@molecules/Icon"
import Link from "@molecules/Link"
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
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-8 text-6xl">This should be in Grotesque</h1>
            <p>
              <Link href="https://www.justinwallace.dev/about" variant="inline">
                A Rad Link{" "}
              </Link>
              And a bunch of random text that should be the right colors and change when in dark and light mode
            </p>
            <Button className="mr-8">Get started</Button>
            <Button href="/about" variant="outlined" startIcon="next">
              Deploy Now
            </Button>
            <Button href="/about" variant="text" endIcon="next">
              Deploy Now
            </Button>
          </div>
          <Switch id="dark-mode" label={`Hit the lights`} onCheckedChange={(checked) => handleChecked(checked)} />
          <div className="border-gradient before:gradient-primary mt-16 h-[200px] w-[200px] rounded-lg bg-purple-900"></div>
          <div className="flex items-center gap-8 p-8">
            <Icon id="next" size={100} />
            <Icon id="node" />
            <Icon id="react" size={80} className="text-common-black dark:text-common-white" />
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-purple-900"></section>
    </>
  )
}

export default Page
