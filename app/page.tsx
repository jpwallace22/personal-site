"use client"

import { Metadata, NextPage } from "next"

import Button from "@molecules/Button"
import Link from "@molecules/Link"
import Switch from "@molecules/Switch"

// export const metadata: Metadata = {
//   title: "Justin Wallace Development",
// }

const Page: NextPage = () => {
  const handleChecked = (checked: boolean) => {
    if (checked) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  return (
    <>
      <section>
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-8 text-6xl">Next.js Enterprise Boilerplate</h1>
            <p>
              <Link href="https://www.justinwallace.dev/about" variant="inline">
                Jumpstart{" "}
              </Link>
              your enterprise project with our feature-packed, high-performance Next.js boilerplate! Experience rapid UI
              development, AI-powered code reviews, and an extensive suite of tools for a smooth and enjoyable
              development process.
            </p>
            <Button className="mr-8">Get started</Button>
            <Button href="/about" variant="outlined">
              Deploy Now
            </Button>
            <Button href="/about" variant="text">
              Deploy Now
            </Button>
          </div>
          <Switch id="dark-mode" label={`Hit the lights`} onCheckedChange={(checked) => handleChecked(checked)} />
          <div className="border-gradient before:gradient-primary mt-16 h-[200px] w-[200px] rounded-lg bg-purple-900"></div>
        </div>
      </section>
      <section className="bg-white dark:bg-purple-900"></section>
    </>
  )
}

export default Page
