// import { gql } from "@apollo/client"
import { NextPage } from "next"
// import serverQuery from "graphql/serverQuery"

// export const generateStaticParams = async () => {
//   const { allPageGenerators } = await serverQuery(gql`
//     query MyQuery {
//       allPageGenerators {
//         slug
//       }
//     }
//   `)

//   if (!allPageGenerators) {
//     return null
//   }

//   return allPageGenerators.filter((page) => page.slug !== "home").map((page) => ({ slug: page.slug }))
// }

const Page: NextPage = () => {
  return (
    <>
      <section className="grid h-[100vh] place-items-center bg-purple-900">
        <h1 className="text-gray-100">poop</h1>
      </section>
    </>
  )
}

export default Page
