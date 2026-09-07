import { Children, type ReactNode } from "react"
import { convertToKebabCase } from "@utils/toKebabCase"

/**
 * The text of a heading's FIRST inline child.
 *
 * The DAST renderer derived ids from `node.children[0].value` only, so a heading
 * whose first span is followed by marked spans produced an id from that first
 * span alone. MDX hands us the same sequence as React children, so taking the
 * first one reproduces the original ids.
 */
const firstChildText = (children: ReactNode): string => {
  const [first] = Children.toArray(children)
  if (typeof first === "string") return first
  if (typeof first === "number") return String(first)
  if (first && typeof first === "object" && "props" in first) {
    return firstChildText((first.props as { children?: ReactNode }).children)
  }
  return ""
}

/** Verbatim port of the former StructuredText/utils/headingToId.ts */
export const headingToId = (children: ReactNode) => {
  const specialChars = new RegExp(/[^a-zA-Z0-9]/g)
  return convertToKebabCase(firstChildText(children).replaceAll(specialChars, "")) ?? undefined
}

export default headingToId
