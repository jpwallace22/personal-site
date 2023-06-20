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
  useEffect(() => {
    import("prismjs").then((Prism) => {
      require("./styles/prism-theme.css")
      require("prismjs/components/prism-typescript.min.js")
      require("prismjs/components/prism-shell-session.min.js")
      require("prismjs/components/prism-jsx.min.js")
      require("prismjs/components/prism-tsx.min.js")
      Prism.highlightAll()
    })
  }, [])

  const inClipboard = copied === node.code
  const buttonColor = inClipboard ? "text-purple-200 dark:text-purple-200" : "text-common-white"
  const label = inClipboard ? "Copied" : "Copy"

  return (
    <pre className="relative block overflow-auto whitespace-pre rounded-lg border border-primary-500">
      <div className="flex h-10 items-center justify-between border-b border-b-gray-800 bg-gray-950 px-4">
        <span className="font-body text-sm text-common-white">{node.language}</span>
        <Button
          className={twMerge([
            "w-fit hover:text-purple-200 hover:dark:text-purple-200",
            buttonColor,
          ])}
          variant="text"
          size="sm"
          startIcon="copy"
          onClick={() => copy(node.code)}
        >
          {label}
        </Button>
      </div>
      <code
        className={`language-${node.language} block w-full overflow-auto whitespace-pre p-4 text-base`}
        style={{ fontFamily: "var(--plex-mono)" }}
      >
        {node.code}
      </code>
    </pre>
  )
}

export default CodeBlock
