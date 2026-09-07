import { FC } from "react"
import { notFound } from "next/navigation"
import Section from "@molecules/Section"
import Markdown from "@components/Markdown"
import { getInfo } from "src/content"

interface PageProps {
  slug?: string
}

const Info: FC<PageProps> = async ({ slug }) => {
  const templateInfo = getInfo(slug)

  if (!templateInfo) {
    return notFound()
  }

  const { information } = templateInfo

  return (
    <Section>
      <Markdown source={information} className="mx-auto max-w-4xl" />
    </Section>
  )
}

export default Info
