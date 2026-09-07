import { FC } from "react"
import { notFound } from "next/navigation"
import ComponentRenderer from "@utils/ComponentRenderer"
import { getPage } from "src/content"

interface PageProps {
  slug?: string
}

const Page: FC<PageProps> = async ({ slug }) => {
  const templatePage = getPage(slug)

  if (!templatePage) {
    return notFound()
  }

  return <>{ComponentRenderer(templatePage?.components)}</>
}

export default Page
