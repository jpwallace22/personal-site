import { render } from "@testing-library/react"

import Button from "@molecules/Button"

describe("Render with correct DOM nodes", () => {
  it("should render as a button", () => {
    const { getByRole } = render(<Button>test</Button>)
    const button = getByRole("button")

    expect(button).toBeInTheDocument()
  })

  it("should render as an anchor", () => {
    const { getByRole } = render(<Button href="https://www.justinwallace.dev">test</Button>)
    const button = getByRole("link")

    expect(button).toBeInTheDocument()
  })

  it("should render a start icon", () => {
    const { getByTestId } = render(<Button startIcon="next">test</Button>)
    const icon = getByTestId("button-icon")

    expect(icon).toBeInTheDocument()
  })

  it("should render an end icon", () => {
    const { getByTestId } = render(<Button endIcon="next">test</Button>)
    const icon = getByTestId("button-icon")

    expect(icon).toBeInTheDocument()
  })
})

describe("twMerge className merging", () => {
  it("removes the base tailwind class and applies a new one", () => {
    const customClassName = "text-3xl"
    const { getByRole } = render(<Button className={customClassName}>Button Text</Button>)
    const buttonElement = getByRole("button", { name: /Button Text/i })
    expect(buttonElement).not.toHaveClass("text-2xl")
  })
})
