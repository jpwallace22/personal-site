import { render } from "@testing-library/react"
import DrawnArrow from ".."

describe("DrawnArrow component", () => {
  test("renders the arrow", () => {
    const { getByRole } = render(<DrawnArrow />)
    const svgElement = getByRole("img")
    expect(svgElement).toBeInTheDocument()
  })

  test("applies custom className", () => {
    const className = "custom-class"
    const { getByRole } = render(<DrawnArrow className={className} />)
    const svgElement = getByRole("img")
    expect(svgElement).toBeInTheDocument()
    expect(svgElement).toHaveClass(className)
  })

  test('does not apply "animated" variant when not specified', () => {
    const { getByRole } = render(<DrawnArrow />)
    const svgElement = getByRole("img")
    expect(svgElement).toBeInTheDocument()
    expect(svgElement).not.toHaveClass("animate-draw", "animation-delay-700")
  })
})
