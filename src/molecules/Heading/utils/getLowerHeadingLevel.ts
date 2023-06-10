import { HeadingLevels, HeadingMarkup } from "@molecules/Heading"

export const getLowerHeadingLevel = (heading: HeadingMarkup): HeadingMarkup => {
  const number = Number(heading.split("h")[1])
  const higherHeadingNum = number === 6 ? 6 : ((number + 1) as HeadingLevels)

  return `h${higherHeadingNum}`
}
