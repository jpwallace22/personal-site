import { render } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"
import { fakeImage } from "@utils/mockDataForTest"
import TechStack from ".."

export const fakeTechs = [
  { __typename: "TechStackRecord" as const, title: "Tech 1", thumbnail: fakeImage },
  { __typename: "TechStackRecord" as const, title: "Tech 2", thumbnail: fakeImage },
  { __typename: "TechStackRecord" as const, title: "Tech 3", thumbnail: fakeImage },
]

describe("TechStack Component", () => {
  expect.extend(toHaveNoViolations)

  it("renders the component with horizontal direction and no reverse", () => {
    const { getByRole } = render(
      <TechStack techs={fakeTechs} direction="horizontal" reverse={false} />
    )
    const techStackElement = getByRole("list")

    expect(techStackElement).toBeInTheDocument()
    expect(techStackElement).toHaveClass("flex")
    expect(techStackElement).not.toHaveClass("flex-row-reverse")
    expect(techStackElement).not.toHaveClass("flex-col")
    expect(techStackElement).not.toHaveClass("flex-col-reverse")
  })

  it("renders the component with vertical direction and reverse", () => {
    const { getByRole } = render(
      <TechStack techs={fakeTechs} direction="vertical" reverse={true} />
    )
    const techStackElement = getByRole("list")

    expect(techStackElement).toBeInTheDocument()
    expect(techStackElement).toHaveClass("flex")
    expect(techStackElement).toHaveClass("flex-col-reverse")
    expect(techStackElement).not.toHaveClass("flex-row")
    expect(techStackElement).not.toHaveClass("flex-row-reverse")
  })

  it("renders the correct number of techs", () => {
    const { getAllByRole } = render(<TechStack techs={fakeTechs} />)
    const techImages = getAllByRole("listitem")

    expect(techImages.length).toBe(fakeTechs.length)
  })

  it("renders the correct thumbnail URLs and alt attributes", () => {
    const { getAllByRole } = render(<TechStack techs={fakeTechs} />)
    const techImages = getAllByRole("img")

    techImages.forEach((image, index) => {
      const isNextSrc = image.getAttribute("src")?.startsWith("/_next")
      expect(isNextSrc).toBeTruthy()
      expect(image).toHaveAttribute("alt", fakeTechs[index].title)
    })
  })

  it("renders without accessibility violations", async () => {
    const { container } = render(<TechStack techs={fakeTechs} />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
