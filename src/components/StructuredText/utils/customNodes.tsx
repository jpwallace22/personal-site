import { Children, ReactElement, useRef } from "react"
import { renderNodeRule } from "datocms-structured-text-to-plain-text"
import {
  isBlockquote,
  isCode,
  isHeading,
  isLink,
  isList,
  isListItem,
  isParagraph,
} from "datocms-structured-text-utils"
import CodeBlock from "@molecules/CodeBlock"
import Icon from "@molecules/Icon"
import Link from "@molecules/Link"
import headingToId from "@components/StructuredText/utils/headingToId"
import { useIntersection } from "@utils/hooks/useIntersectionObserver"
import { useBlogContext } from "src/contexts/BlogContext"

export const heading = renderNodeRule(isHeading, ({ node, children, key }) => {
  const ref = useRef<HTMLHeadingElement>(null)
  const { setActiveHeading } = useBlogContext()
  const id = headingToId(node)

  useIntersection(ref, {
    onIntersection: () => setActiveHeading(id || ""),
    init: { rootMargin: "0px 0px -80%" },
  })

  const Component = `h${node.level}` as const

  return (
    <Component ref={ref} key={key} className="mt-8" id={headingToId(node)}>
      {children}
    </Component>
  )
})

export const link = renderNodeRule(isLink, ({ node, children, key }) => (
  <Link key={key} href={node.url} variant="inline">
    {children}
  </Link>
))

export const codeBlock = renderNodeRule(isCode, ({ node, children: _, key }) => (
  <CodeBlock key={key} node={node} />
))

export const blockQuote = renderNodeRule(isBlockquote, ({ node, children, key }) => (
  <div key={key} className="border-image-gradient-primary border-l-8 pl-6 ">
    <div className="dark:text-common-white">{children}</div>
    {node.attribution && <em className="text-sm">-{node.attribution}</em>}
  </div>
))

export const paragraph = renderNodeRule(isParagraph, ({ children, key }) => {
  // prevents linked records from being wrapped in a <p> tag
  const nodeData = children && (children[0] as ReactElement)
  const isText = nodeData?.props.children && typeof nodeData.props.children[0] === "string"

  return isText ? <p key={key}>{children}</p> : <div key={key}>{children}</div>
})

export const list = renderNodeRule(isList, ({ node, children, key }) =>
  node.style === "bulleted" ? (
    <ul key={key} className="ml-3">
      {Children.map(children, (child) => {
        return (
          <li className="flex items-center gap-4">
            <Icon
              id="check"
              size={16}
              className="mt-2.5 flex-shrink-0 self-start text-purple-400 dark:text-primary-500"
            />
            {child}
          </li>
        )
      })}
    </ul>
  ) : (
    <ol key={key} className="ml-8 list-decimal">
      {Children.map(children, (child) => {
        return <li className="pl-4">{child}</li>
      })}
    </ol>
  )
)

export const listItem = renderNodeRule(isListItem, ({ node: _, children, key }) => (
  <div key={key} className="mb-3">
    {children}
  </div>
))
