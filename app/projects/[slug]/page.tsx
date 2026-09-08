import { Metadata } from "next"
import Footer from "@components/Footer"
import { getProjectSeo, getProjectSlugs } from "src/content"
import ProjectPage from "src/template/Project"
import renderMetadata from "src/template/renderMetadata"

type Params = {
  params: {
    slug?: string
  }
}

export const generateMetadata = async ({ params: { slug } }: Params): Promise<Metadata> => {
  return renderMetadata(slug, getProjectSeo(slug))
}

export const generateStaticParams = async () => {
  return getProjectSlugs().map(({ slug }) => ({ slug }))
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
