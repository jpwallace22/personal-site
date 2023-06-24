import { Metadata } from "next"
import { TemplatePageMetadataQuery } from "@codegen/sdk"
import Footer from "@components/Footer"
import makeServerQuery from "@utils/makeServerQuery"
import renderMetadata from "src/template/renderMetadata"

type Params = {
  params: {
    slug?: string
  }
}

export const generateMetadata = async ({ params: { slug } }: Params): Promise<Metadata> => {
  const { metaData } = await makeServerQuery<TemplatePageMetadataQuery>(TemplatePageMetadataQuery, {
    slug,
  })

  return renderMetadata(slug, metaData?.seo)
}

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  )
}

export default Layout
