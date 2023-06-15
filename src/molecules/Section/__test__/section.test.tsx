import { render, screen } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"
import Section, { SectionProps } from "@molecules/Section"

describe("Section Component", () => {
  expect.extend(toHaveNoViolations)

  const setup = (props?: SectionProps) => {
    return render(<Section {...props}>Test Content</Section>)
  }

  test("renders children", () => {
    setup()
    const sectionElement = screen.getByText("Test Content")
    expect(sectionElement).toBeInTheDocument()
    expect(screen.getByText("Test Content")).toBeInTheDocument()
  })

  test("applies custom className", () => {
    const customClassName = "custom-class"
    setup({ className: customClassName })
    const sectionElement = screen.getByText("Test Content")
    expect(sectionElement).toHaveClass(customClassName)
  })

  test("applies wrapperClass", () => {
    const className = "wrapper-class"
    setup({ className })
    const wrapperElement = screen.getByText("Test Content")
    expect(wrapperElement).toHaveClass(className)
  })

  test("applies fullWidth variant", () => {
    setup({ fullWidth: true })
    const sectionElement = screen.getByText("Test Content")
    expect(sectionElement).toHaveClass("max-w-full")
  })

  it("renders without accessibility violations", async () => {
    const { container } = render(<Section>Test Content</Section>)
    expect(await axe(container)).toHaveNoViolations()
  })
})
