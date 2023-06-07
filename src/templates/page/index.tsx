import { FC } from "react"
import { TemplatePageQuery } from "@codegen/sdk"
import ComponentRenderer from "@utils/ComponentRenderer"
import makeServerQuery from "@utils/makeServerQuery"

interface PageProps {
  slug?: string
}

const Page: FC<PageProps> = async ({ slug }) => {
  const { templatePage } = await makeServerQuery<TemplatePageQuery>(TemplatePageQuery, { slug })

  return <>{ComponentRenderer(templatePage?.components)}</>
}

export default Page
