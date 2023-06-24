import { AllTemplateInfoSlugsQuery } from "@codegen/sdk"
import makeServerQuery from "@utils/makeServerQuery"
import Info from "src/template/Info"

type Params = {
  params: {
    slug?: string
  }
}

export const generateStaticParams = async () => {
  const { slugs } = await makeServerQuery<AllTemplateInfoSlugsQuery>(AllTemplateInfoSlugsQuery)

  return slugs.map(({ slug }) => ({
    params: {
      slug,
    },
  }))
}

const InfoPage = ({ params: { slug } }: Params) => {
  return <Info slug={slug} />
}

export default InfoPage
