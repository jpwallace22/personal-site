import { gql } from "@apollo/client"
import { NextPage } from "next"
import serverQuery from "src/graphql/serverQuery"

interface PageProps {
  params: {
    slug: string
  }
}

export const generateStaticParams = async () => {
  const { allPageGenerators } = await serverQuery<MyQueryQuery>(gql`
    query MyQuery {
      allPageGenerators {
        slug
      }
    }
  `)

  return allPageGenerators.filter((page) => page.slug !== "home").map((page) => ({ slug: page.slug }))
}

const Page: NextPage<PageProps> = ({ params }) => {
  console.log(params.slug)
  return (
    <>
      <section className="grid h-[100vh] place-items-center bg-purple-900">
        <h1 className="text-gray-100">poop</h1>
      </section>
    </>
  )
}

export default Page
