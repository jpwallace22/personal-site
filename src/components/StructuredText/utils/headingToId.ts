import { Heading, Span } from "datocms-structured-text-utils"
import { convertToKebabCase } from "@utils/toKebabCase"

export const headingToId = (node: Heading) => {
  const headingContent = node && (node.children[0] as Span).value?.toString()
  const specialChars = new RegExp(/[^a-zA-Z0-9]/g)

  return convertToKebabCase(headingContent.replaceAll(specialChars, "")) ?? undefined
}

export default headingToId
