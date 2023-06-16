import { FC } from "react"
import { notFound } from "next/navigation"
import { ProjectPageQuery } from "@codegen/sdk"
import makeServerQuery from "@utils/makeServerQuery"

interface ProjectPageProps {
  slug?: string
}

const ProjectPage: FC<ProjectPageProps> = async ({ slug }) => {
  const { project } = await makeServerQuery<ProjectPageQuery>(ProjectPageQuery, { slug })
  if (!project) {
    return notFound()
  }

  return (
    <>
      <div>{project?.title}</div>
    </>
  )
}

export default ProjectPage
