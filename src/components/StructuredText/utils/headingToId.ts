import { Heading, Span } from "datocms-structured-text-utils"
import { convertToKebabCase } from "@utils/toKebabCase"

export const headingToId = (node: Heading) => {
  const headingContent = node && (node.children[0] as Span).value?.toString()

  return convertToKebabCase(headingContent) ?? undefined
}

export default headingToId
