import { Metadata } from "next"
import Footer from "@components/Footer"
import { getProject, getProjectSlugs } from "src/content"
import ProjectPage from "src/template/Project"
import renderMetadata from "src/template/renderMetadata"

type Params = {
  params: Promise<{
    slug?: string
  }>
}

export const generateMetadata = async ({ params }: Params): Promise<Metadata> => {
  const { slug } = await params
  return renderMetadata(slug, getProject(slug)?.seo)
}

export const generateStaticParams = async () => {
  return getProjectSlugs().map((slug) => ({ slug }))
}

const Page = async ({ params }: Params) => {
  const { slug } = await params
  return (
    <>
      <ProjectPage slug={slug} />
      <Footer />
    </>
  )
}

export default Page
