import { Metadata } from "next"
import Footer from "@components/Footer"
import JsonLd from "@components/JsonLd"
import { breadcrumbSchema, graph, projectSchema } from "@components/JsonLd/schemas"
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
  const project = getProject(slug)

  return renderMetadata({
    path: `/projects/${slug}`,
    seo: project?.seo,
    fallbackImage: project?.bannerImage,
  })
}

export const generateStaticParams = async () => {
  return getProjectSlugs().map((slug) => ({ slug }))
}

const Page = async ({ params }: Params) => {
  const { slug } = await params
  const project = getProject(slug)

  return (
    <>
      {project && (
        <JsonLd
          schema={graph(
            projectSchema(project),
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Projects", path: "/projects" },
              { name: project.title, path: `/projects/${project.slug}` },
            ])
          )}
        />
      )}
      <ProjectPage slug={slug} />
      <Footer />
    </>
  )
}

export default Page
