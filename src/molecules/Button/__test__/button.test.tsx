import { render, RenderResult } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"
import Button, { ButtonProps } from "@molecules/Button"

describe("Button molecule", () => {
  expect.extend(toHaveNoViolations)
  let renderResult: RenderResult

  const setup = (props?: ButtonProps) => {
    renderResult = render(<Button {...props}>test</Button>)
  }

  it("should render as a button", () => {
    setup()
    const button = renderResult.getByRole("button")
    expect(button).toBeInTheDocument()
  })

  it("should render as an anchor", () => {
    setup({ url: "https://www.justinwallace.dev" })
    const button = renderResult.getByRole("link")

    expect(button).toBeInTheDocument()
  })

  it("should render a start icon", () => {
    setup({ startIcon: "next" })
    const icon = renderResult.getByRole("img", { hidden: true })
    expect(icon).toBeInTheDocument()
  })

  it("should render an end icon", () => {
    setup({ endIcon: "next" })
    const icon = renderResult.getByRole("img", { hidden: true })
    expect(icon).toBeInTheDocument()
  })

  it("removes the base tailwind class and applies a new one", () => {
    const className = "text-3xl"
    setup({ className })
    const buttonElement = renderResult.getByRole("button")
    expect(buttonElement).not.toHaveClass("text-2xl")
    expect(buttonElement).toHaveClass(className)
  })

  it("renders without accessibility violations", async () => {
    const { container } = render(<Button>test</Button>)
    expect(await axe(container)).toHaveNoViolations()
  })
})
