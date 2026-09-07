"use client"

import { FC } from "react"
import { cva } from "class-variance-authority"
import { smoothScrollToItem } from "@utils/smoothScrollToItem"
import { useBlogContext } from "src/contexts/BlogContext"
import type { Heading } from "src/content"

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
  headings?: Heading[]
}

const TableOfContents: FC<TableOfContentsProps> = ({ headings }) => {
  const { activeHeading } = useBlogContext()

  if (!headings?.length) {
    return null
  }

  return (
    <>
      {headings.map(({ id, text }, index) => {
        // first heading is active until one scrolls into view
        const active = activeHeading ? id === activeHeading : index === 0

        return (
          <div key={id} className={styles({ active })} onClick={() => smoothScrollToItem(id)}>
            <span>{text}</span>
          </div>
        )
      })}
    </>
  )
}

export default TableOfContents
