import fs from "fs/promises"
import path from "path"
import { cleanup, render } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"
import Icon from "@molecules/Icon"
import { IconIds } from "@molecules/Icon/iconIds"

describe("Icon", () => {
  expect.extend(toHaveNoViolations)
  it("should render an <svg> for each icon", async () => {
    const filename = new URL(import.meta.url).pathname
    const svgDir = path.resolve(filename, "../../../../assets/icons")
    const files = await fs.readdir(svgDir)
    const iconIds = files
      .filter((filename) => filename.endsWith(".svg"))
      .map((fileName) => fileName.replace(".svg", ""))

    for (const id of iconIds) {
      try {
        const { getByRole } = render(<Icon id={id as IconIds} />)
        expect(getByRole("img")).toBeTruthy()
        cleanup()
      } catch (error) {
        throw new Error(`Icon molecule does not contain a '${id}' id. Try running "yarn gen:icons"
      ${error}`)
      }
    }
  })

  it("renders without accessibility violations", async () => {
    const { container } = render(<Icon id="github" />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
