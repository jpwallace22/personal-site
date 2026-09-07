import { Metadata } from "next"
import Footer from "@components/Footer"
import { getPageSeo } from "src/content"
import renderMetadata from "src/template/renderMetadata"

type Params = {
  params: {
    slug?: string
  }
}

export const generateMetadata = async ({ params: { slug } }: Params): Promise<Metadata> => {
  return renderMetadata(slug, getPageSeo(slug))
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
