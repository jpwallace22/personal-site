import { Metadata, NextPage } from "next"

import Button from "@molecules/Button"
import Link from "@molecules/Link"

export const metadata: Metadata = {
  title: "Justin Wallace Development",
}

const Page: NextPage = () => {
  return (
    <>
      <section className="h-[100vh] bg-gray-50">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-8 text-6xl">Next.js Enterprise Boilerplate</h1>
            <p className="font-regular text-xl text-gray-800 ">
              <Link href="https://www.justinwallace.dev/about" variant="inline">
                Jumpstart{" "}
              </Link>
              your enterprise project with our feature-packed, high-performance Next.js boilerplate! Experience rapid UI
              development, AI-powered code reviews, and an extensive suite of tools for a smooth and enjoyable
              development process.
            </p>
            <Button className="mr-8">Get started</Button>
            <Button href="/about" variant="secondary">
              Deploy Now
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-purple-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">poop</div>
      </section>
    </>
  )
}

export default Page
