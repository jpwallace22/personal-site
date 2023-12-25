"use client"

import { FC } from "react"
import { cva } from "class-variance-authority"
import { Heading, isHeading } from "datocms-structured-text-utils"
import { renderNodeRule, StructuredText } from "react-datocms"
import headingToId from "@components/StructuredText/utils/headingToId"
import { StructuredData } from "@components/StructuredText/utils/structuredTextParser"
import { smoothScrollToItem } from "@utils/smoothScrollToItem"
import { useBlogContext } from "src/contexts/BlogContext"

const styles = cva(
  "cursor-pointer my-2 rounded-lg px-4 py-2 hover:bg-gray-50 hover:dark:bg-purple-900 hover:border-gradient-primary",
  {
    variants: {
      active: {
        true: "border-gradient-primary bg-gray-50 dark:bg-purple-900",
      },
    },
  }
)

interface TableOfContentsProps {
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

const TableOfContents: FC<TableOfContentsProps> = ({ data }) => {
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
          // first heading active if no current active heading
          const active = activeHeading ? id === activeHeading : key.split("-")[1] === "0"

          return (
            <div key={key} className={styles({ active })} onClick={() => smoothScrollToItem(id)}>
              <span>{children}</span>
            </div>
          )
        }),
      ]}
    />
  )
}

export default TableOfContents
