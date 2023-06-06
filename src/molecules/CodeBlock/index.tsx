"use client"

import { useEffect } from "react"
import { twMerge } from "tailwind-merge"
import Button from "@molecules/Button"
import useCopyToClipboard from "@utils/hooks/useCopyToClipboard"
import type { Code } from "datocms-structured-text-utils"
import type { FC } from "react"

interface CodeBlockProps {
  node: Code
}

const CodeBlock: FC<CodeBlockProps> = ({ node }) => {
  const [copied, copy] = useCopyToClipboard()

  // split the Prism and css load
  useEffect(() => {
    import("prismjs").then((Prism) => {
      require("./styles/prism-theme.css")
      Prism.highlightAll()
    })
  }, [])

  const inClipboard = copied === node.code
  const buttonColor = inClipboard ? "text-purple-200 dark:text-purple-200" : "text-common-white"
  const label = inClipboard ? "Copied" : "Copy"

  return (
    <pre className="relative block overflow-auto whitespace-pre rounded-lg border-2 border-primary-500 p-4">
      <Button
        className={twMerge([
          "absolute right-0 top-0 z-10 h-fit hover:text-purple-200 hover:dark:text-purple-200",
          buttonColor,
        ])}
        variant="text"
        size="sm"
        startIcon="copy"
        onClick={() => copy(node.code)}
      >
        {label}
      </Button>
      <code
        className={`language-${node.language} block w-full overflow-auto whitespace-pre text-base`}
        style={{ fontFamily: "var(--plex-mono)" }}
      >
        {node.code}
      </code>
    </pre>
  )
}

export default CodeBlock
