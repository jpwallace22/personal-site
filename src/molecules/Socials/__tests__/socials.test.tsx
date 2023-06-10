import { cleanup, render } from "@testing-library/react"
import Socials, { sizeMap } from "../"

describe("Socials component", () => {
  it("renders social icons with correct links", () => {
    const { getByRole } = render(<Socials />)

    const githubLink = getByRole("link", { name: "github" })
    expect(githubLink).toHaveAttribute("href", "https://www.github.com/jpwallace22")

    const linkedInLink = getByRole("link", { name: "linkedIn" })
    expect(linkedInLink).toHaveAttribute("href", "https://www.linkedin.com/in/thejustinwallace")

    const instagramLink = getByRole("link", { name: "instagram" })
    expect(instagramLink).toHaveAttribute("href", "https://www.instagram.com/van.surf.climb")
  })

  it("renders social icons with default size and colors", () => {
    const { getAllByRole } = render(<Socials />)

    const socialIcons = getAllByRole("img")

    socialIcons.forEach((icon) => {
      expect(icon).toHaveClass("text-purple-800")
    })
  })

  it("renders social icons with custom size", () => {
    let size: keyof typeof sizeMap
    for (size in sizeMap) {
      try {
        const { getAllByRole } = render(<Socials size={size} />)
        const socialIcons = getAllByRole("img")
        // eslint-disable-next-line no-loop-func
        socialIcons.forEach((icon) => {
          expect(icon).toHaveAttribute("width", sizeMap[size].toString())
        })
        cleanup()
      } catch (error) {
        throw new Error(`Incorrect size on Socials. Size "${size}" is invalid.
        ${error}`)
      }
    }
  })
})
