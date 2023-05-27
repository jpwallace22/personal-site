import { Metadata, NextPage } from "next"
import { Button } from "src/components/Button/Button"

export const metadata: Metadata = {
  title: "Justin Wallace Development",
}

const Page: NextPage = () => {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="dark:text-white mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl">
              Next.js Enterprise Boilerplate
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              Jumpstart your enterprise project with our feature-packed, high-performance Next.js boilerplate!
              Experience rapid UI development, AI-powered code reviews, and an extensive suite of tools for a smooth and
              enjoyable development process.
            </p>
            <Button className="mr-[50px]">Get started</Button>
            <Button
              href="https://vercel.com/new/git/external?repository-url=https://github.com/Blazity/next-enterprise"
              variant="secondary"
            >
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
