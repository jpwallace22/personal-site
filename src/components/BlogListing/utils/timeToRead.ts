import { render, StructuredTextGraphQlResponse } from "datocms-structured-text-to-plain-text"
import { StructuredData } from "@components/StructuredText/utils/structuredTextParser"

/**
 * Will take in Structured text data from Data and return how long in minutes
 * it would take to read the given text. Defaults to a reading speed of 200 wpm, but can be changed
 * @param structuredText StructuredData
 * @param wordsPerMin number `default = 200`
 * @returns number | "" | null
 */
const timeToReadStructuredText = (
  structuredText?: StructuredData,
  { wordsPerMin } = { wordsPerMin: 200 }
) => {
  const content = render(structuredText as StructuredTextGraphQlResponse)

  return content && Math.ceil(content.split(" ").length / wordsPerMin)
}

export default timeToReadStructuredText
