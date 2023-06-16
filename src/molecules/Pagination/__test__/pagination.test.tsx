import { fireEvent, render } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"
import Pagination from ".."

describe("Pagination component", () => {
  expect.extend(toHaveNoViolations)

  const count = 5
  const activeDot = 2
  const onDotClick = jest.fn()
  const onLeftClick = jest.fn()
  const onRightClick = jest.fn()

  afterEach(() => {
    jest.clearAllMocks()
  })

  it("renders the correct number of dots", () => {
    const { getAllByRole } = render(
      <Pagination
        count={count}
        activeDot={activeDot}
        onDotClick={onDotClick}
        onLeftClick={onLeftClick}
        onRightClick={onRightClick}
      />
    )

    const dots = getAllByRole("button")
    expect(dots).toHaveLength(count + 2) // dots plus buttons
  })

  it("calls the onDotClick function with the correct index when a dot is clicked", () => {
    const { getAllByRole } = render(
      <Pagination
        count={count}
        activeDot={activeDot}
        onDotClick={onDotClick}
        onLeftClick={onLeftClick}
        onRightClick={onRightClick}
      />
    )

    const dots = getAllByRole("button")
    fireEvent.click(dots[3])

    expect(onDotClick).toHaveBeenCalledTimes(1)
    expect(onDotClick).toHaveBeenCalledWith(2) // -1 for the left button
  })

  it("calls the onLeftClick function when the left arrow button is clicked", () => {
    const { getByRole } = render(
      <Pagination
        count={count}
        activeDot={activeDot}
        onDotClick={onDotClick}
        onLeftClick={onLeftClick}
        onRightClick={onRightClick}
      />
    )

    const leftButton = getByRole("button", { name: "Left arrow" })
    fireEvent.click(leftButton)

    expect(onLeftClick).toHaveBeenCalledTimes(1)
  })

  it("calls the onRightClick function when the right arrow button is clicked", () => {
    const { getByRole } = render(
      <Pagination
        count={count}
        activeDot={activeDot}
        onDotClick={onDotClick}
        onLeftClick={onLeftClick}
        onRightClick={onRightClick}
      />
    )

    const rightButton = getByRole("button", { name: "Right arrow" })
    fireEvent.click(rightButton)

    expect(onRightClick).toHaveBeenCalledTimes(1)
  })

  it("renders without accessibility violations", async () => {
    const { container } = render(
      <Pagination
        count={count}
        activeDot={activeDot}
        onDotClick={onDotClick}
        onLeftClick={onLeftClick}
        onRightClick={onRightClick}
      />
    )
    expect(await axe(container)).toHaveNoViolations()
  })
})
