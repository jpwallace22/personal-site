import { AllTemplatePageSlugsQuery } from "@codegen/sdk"
import makeServerQuery from "@utils/makeServerQuery"
import Page from "src/templates/Page"

type Params = {
  params: {
    slug?: string
  }
}

export const generateStaticParams = async () => {
  const { allTemplatePages } = await makeServerQuery<AllTemplatePageSlugsQuery>(
    AllTemplatePageSlugsQuery
  )

  return allTemplatePages.map(({ slug }) => ({
    params: {
      slug,
    },
  }))
}

const NextPage = async ({ params: { slug } }: Params) => {
  return <Page slug={slug} />
}

export default NextPage
