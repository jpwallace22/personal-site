import { convertToKebabCase } from "@utils/toKebabCase"

describe("convertToKebabCase", () => {
  it("converts Pascal to kebab case", () => {
    const input = "ThisIsATestSentence"
    const expectedOutput = "this-is-a-test-sentence"

    const result = convertToKebabCase(input)

    expect(result).toEqual(expectedOutput)
  })

  it("converts Camel to kebab case", () => {
    const input = "convertThisToKebabCase"
    const expectedOutput = "convert-this-to-kebab-case"

    const result = convertToKebabCase(input)

    expect(result).toEqual(expectedOutput)
  })

  it("keeps kebab as kebab", () => {
    const input = "kebab-case-is-awesome"
    const expectedOutput = "kebab-case-is-awesome"

    const result = convertToKebabCase(input)

    expect(result).toEqual(expectedOutput)
  })

  it("converts a sentence with all lowercase letters to kebab case", () => {
    const input = "this sentence is in normal case"
    const expectedOutput = "this-sentence-is-in-normal-case"

    const result = convertToKebabCase(input)

    expect(result).toEqual(expectedOutput)
  })

  it("converts a sentence with mixed case letters to kebab case", () => {
    const input = "this Sentence In in Not Normal case"
    const expectedOutput = "this-sentence-in-in-not-normal-case"

    const result = convertToKebabCase(input)

    expect(result).toEqual(expectedOutput)
  })

  it("converts a single capitalized word to kebab case", () => {
    const input = "Title"
    const expectedOutput = "title"

    const result = convertToKebabCase(input)

    expect(result).toEqual(expectedOutput)
  })
})
