"use client"

import { FC } from "react"
import { cva } from "class-variance-authority"
import { isHeading } from "datocms-structured-text-utils"
import { Heading } from "datocms-structured-text-utils"
import { renderNodeRule, StructuredText } from "react-datocms"
import headingToId from "@components/StructuredText/utils/headingToId"
import { StructuredData } from "@components/StructuredText/utils/structuredTextParser"
import { smoothScrollToItem } from "@utils/smoothScrollToItem"
import { useBlogContext } from "src/contexts/BlogContext"

const styles = cva(
  "hover:border-gradient-primary rounded-lg bg-transparent p-4 hover:bg-gray-50 hover:dark:bg-purple-900 cursor-pointer",
  {
    variants: {
      active: {
        true: "border-gradient-primary dark:bg-purple-900",
      },
    },
  }
)

interface TocParserProps {
  data?: TocData
  slug?: string | null
}

export type TocData = StructuredData & {
  value: {
    document: {
      children: Heading[]
    }
  }
}

const TocParser: FC<TocParserProps> = ({ data }) => {
  const { activeHeading } = useBlogContext()

  if (!data?.value) {
    return null
  }

  const onlyHeadings = {
    value: {
      schema: "dast",
      document: {
        type: "root",
        children: data.value.document.children.filter((node: Heading) => node.type === "heading"),
      },
    },
  } as const

  return (
    <StructuredText
      data={onlyHeadings}
      customNodeRules={[
        renderNodeRule(isHeading, ({ node, children, key }) => {
          const id = headingToId(node)

          return (
            <div
              key={key}
              className={styles({ active: id === activeHeading })}
              onClick={() => smoothScrollToItem(id)}
            >
              <span>{children}</span>
            </div>
          )
        }),
      ]}
    />
  )
}

export default TocParser
