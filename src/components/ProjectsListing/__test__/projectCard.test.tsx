import { render } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"
import { fakeTechs } from "@molecules/TechStack/__test__/techStack.test"
import { fakeImage } from "@utils/mockDataForTest"
import ProjectCard from "../ProjectCard"

describe("ProjectCard", () => {
  beforeEach(() => {
    const mockIntersectionObserver = jest.fn()
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    })
    window.IntersectionObserver = mockIntersectionObserver
  })

  expect.extend(toHaveNoViolations)

  it("renders the component with correct props", async () => {
    const title = "Project Title"
    const reverse = true
    const subtitle = "Project Subtitle"
    const slug = "project-slug"

    const { container, getByRole } = render(
      <ProjectCard
        __typename="ProjectRecord"
        title={title}
        bannerImage={fakeImage}
        reverse={reverse}
        subtitle={subtitle}
        techStack={fakeTechs}
        slug={slug}
      />
    )

    const articleElement = getByRole("article")
    const linkElement = getByRole("link")
    const imageElement = getByRole("img", { name: "Fake Image" })
    const projectInfoElement = getByRole("article", { name: title })

    expect(articleElement).toBeInTheDocument()
    expect(linkElement).toBeInTheDocument()
    expect(imageElement).toBeInTheDocument()
    expect(projectInfoElement).toBeInTheDocument()

    expect(await axe(container)).toHaveNoViolations()
  })
})
