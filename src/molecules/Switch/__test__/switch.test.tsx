import { fireEvent, render } from "@testing-library/react"
import Switch from "@molecules/Switch"

describe("Switch molecule", () => {
  it("should render a <button> with a switch role", () => {
    const { getByRole } = render(<Switch id="test">test</Switch>)

    expect(getByRole("switch").nodeName).toBe("BUTTON")
  })

  it("renders the label if provided", () => {
    const label = "My Switch"
    const { getByText } = render(<Switch id="switchId" label={label} />)
    const switchLabel = getByText(label)
    expect(switchLabel).toBeInTheDocument()
  })

  it("does not render the label if not provided", () => {
    const { queryByTestId } = render(<Switch id="switchId" />)
    const switchLabel = queryByTestId("switch-label")
    expect(switchLabel).not.toBeInTheDocument()
  })

  it("calls the onCheckedChange function with the correct value when clicked", () => {
    const onCheckedChange = jest.fn()
    const { getByRole } = render(
      <Switch id="switchId" checked={false} onCheckedChange={onCheckedChange} />
    )
    const switchInput = getByRole("switch")

    fireEvent.click(switchInput)

    expect(onCheckedChange).toHaveBeenCalledTimes(1)
    expect(onCheckedChange).toHaveBeenCalledWith(true)
  })
})
