import { render, RenderResult } from "@testing-library/react"
import Circle, { CircleProps } from "@molecules/Circle"

describe("Circle Component", () => {
  let renderResult: RenderResult

  const setup = (props?: CircleProps) => {
    renderResult = render(<Circle {...props} />)
  }

  test("renders without dots", () => {
    setup()
    const circleElement = renderResult.getByRole("img", { hidden: true })
    expect(circleElement).toBeInTheDocument()
  })

  test("renders with dots", () => {
    setup({ dots: true })
    const imageElement = renderResult.getByRole("img", { hidden: true })
    expect(imageElement).toBeInTheDocument()
  })

  test("applies custom className", () => {
    const customClassName = "custom-class"
    setup({ className: customClassName })
    const circleElement = renderResult.getByRole("img", { hidden: true })
    expect(circleElement).toHaveClass(customClassName)
  })

  test("applies size variant", () => {
    const customSize = "lg"
    setup({ size: customSize })
    const circleElement = renderResult.getByRole("img", { hidden: true })
    expect(circleElement).toHaveClass("w-[1280px]")
    expect(circleElement).toHaveClass("h-[1280px]")
  })

  test("applies contrast variant", () => {
    const customContrast = "low"
    setup({ contrast: customContrast })
    const circleElement = renderResult.getByRole("img", { hidden: true })
    expect(circleElement).toHaveClass("bg-gray-100")
    expect(circleElement).toHaveClass("dark:bg-purple-900")
  })
})
