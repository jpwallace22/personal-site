import { render } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"
import CodeBlock from "../"

describe("CodeBlock component", () => {
  expect.extend(toHaveNoViolations)

  const node = {
    type: "code" as const,
    language: "javascript",
    code: 'const message = "Hello, World!";',
  }

  test("renders the code block", () => {
    const { getByText } = render(<CodeBlock node={node} />)
    const codeElement = getByText(node.code)
    expect(codeElement).toBeInTheDocument()
  })

  test("renders the correct language label", () => {
    const { getByText } = render(<CodeBlock node={node} />)
    const languageLabel = getByText(node.language)
    expect(languageLabel).toBeInTheDocument()
  })

  test("copies code on button on click", () => {
    const clipboardData = {
      writeText: jest.fn(() => "Copied content"),
    }
    // @ts-expect-error not in browser environment
    global.navigator.clipboard = clipboardData
    const { getByRole } = render(<CodeBlock node={node} />)
    const copyButton = getByRole("button", { name: "Copy" })
    copyButton.click()
    expect(clipboardData.writeText).toHaveBeenCalledWith(node.code)
  })

  it("renders without accessibility violations", async () => {
    const { container } = render(<CodeBlock node={node} />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
