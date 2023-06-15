import { render } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"
import Heading from "../"

describe("Heading component", () => {
  expect.extend(toHaveNoViolations)

  test("renders the headline", () => {
    const headline = "Hello World"
    const { getByRole } = render(<Heading headline={headline} />)
    const headingElement = getByRole("heading", { level: 2 })
    expect(headingElement).toBeInTheDocument()
    expect(headingElement).toHaveTextContent(headline)
  })

  test("renders the eyebrow", () => {
    const headline = "Hello World"
    const eyebrow = "Subtitle"
    const { getByRole, getByText } = render(<Heading headline={headline} eyebrow={eyebrow} />)
    const headingGroupElement = getByRole("group")
    expect(headingGroupElement).toBeInTheDocument()

    const headingElement = getByRole("heading", { level: 2 })
    expect(headingElement).toBeInTheDocument()
    expect(headingElement).toHaveTextContent(headline)

    const eyebrowElement = getByText("Subtitle")
    expect(eyebrowElement).toBeInTheDocument()
    expect(eyebrowElement).toHaveTextContent(eyebrow)
  })

  test("uses the specified heading level", () => {
    const headline = "Hello World"
    const { getByRole } = render(<Heading headline={headline} as="h3" />)
    const headingElement = getByRole("heading", { level: 3 })
    expect(headingElement).toBeInTheDocument()
    expect(headingElement).toHaveTextContent(headline)
  })

  test("applies custom className", () => {
    const headline = "Hello World"
    const className = "custom-class"
    const { getByRole } = render(<Heading headline={headline} className={className} />)
    const headingElement = getByRole("heading", { level: 2 })
    expect(headingElement).toBeInTheDocument()
    expect(headingElement).toHaveTextContent(headline)
    expect(headingElement).toHaveClass(className)
  })

  it("renders without accessibility violations", async () => {
    const { container } = render(<Heading headline="Hello World" eyebrow="Goodbye World" />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
