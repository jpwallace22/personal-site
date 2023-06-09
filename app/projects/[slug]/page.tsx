import { Metadata } from "next"
import { AllProjectSlugsQuery, ProjectPageMetadataQuery } from "@codegen/sdk"
import Footer from "@components/Footer"
import makeServerQuery from "@utils/makeServerQuery"
import ProjectPage from "src/template/Project"
import renderMetadata from "src/template/renderMetadata"

type Params = {
  params: {
    slug?: string
  }
}

export const generateMetadata = async ({ params: { slug } }: Params): Promise<Metadata> => {
  const { metaData } = await makeServerQuery<ProjectPageMetadataQuery>(ProjectPageMetadataQuery, {
    slug,
  })

  return renderMetadata(slug, metaData?.seo)
}

export const generateStaticParams = async () => {
  const { allSlugs } = await makeServerQuery<AllProjectSlugsQuery>(AllProjectSlugsQuery)

  return allSlugs.map(({ slug }) => ({
    params: {
      slug,
    },
  }))
}

const Page = ({ params: { slug } }: Params) => {
  return (
    <>
      <ProjectPage slug={slug} />
      <Footer />
    </>
  )
}

export default Page
