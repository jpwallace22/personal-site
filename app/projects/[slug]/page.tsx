import { AllProjectSlugsQuery } from "@codegen/sdk"
import Footer from "@components/Footer"
import makeServerQuery from "@utils/makeServerQuery"
import ProjectPage from "src/templates/project"

type Params = {
  params: {
    slug?: string
  }
}

export const generateStaticParams = async () => {
  const { allProjects } = await makeServerQuery<AllProjectSlugsQuery>(AllProjectSlugsQuery)

  return allProjects.map(({ slug }) => ({
    params: {
      slug,
    },
  }))
}

const Page = async ({ params: { slug } }: Params) => {
  return (
    <>
      <ProjectPage slug={slug} />
      <Footer />
    </>
  )
}

export default Page