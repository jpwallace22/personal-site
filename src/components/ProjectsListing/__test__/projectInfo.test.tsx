import { render } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"
import { fakeTechs } from "@molecules/TechStack/__test__/techStack.test"
import ProjectInfo from "../ProjectInfo"

describe("ProjectInfo", () => {
  expect.extend(toHaveNoViolations)

  it("renders the component with correct props", async () => {
    const title = "Project Title"
    const reverse = true
    const subtitle = "Project Subtitle"
    const className = "custom-class"

    const { container, getByRole, getByText } = render(
      <ProjectInfo
        title={title}
        reverse={reverse}
        subtitle={subtitle}
        techStack={fakeTechs}
        className={className}
      />
    )

    const headingElement = getByRole("heading", { name: "Project Title" })
    const subtitleElement = getByText(subtitle)
    const techStackElement = getByRole("list")

    expect(headingElement).toBeInTheDocument()
    expect(subtitleElement).toBeInTheDocument()
    expect(techStackElement).toBeInTheDocument()

    expect(await axe(container)).toHaveNoViolations()
  })
})
