import { render } from "@testing-library/react"

import Button from "@molecules/Button"

it("should render", () => {
  const { getByRole } = render(<Button>test</Button>)

  expect(getByRole("button")).toBeTruthy()
})

describe("correct DOM node", () => {
  it("should render a button", () => {
    const { getByText } = render(<Button>test</Button>)
    const button = getByText("test")

    expect(button.nodeName).toBe("BUTTON")
  })

  it("should render an anchor", () => {
    const { getByText } = render(<Button href="https://www.justinwallace.dev">test</Button>)
    const button = getByText("test")

    expect(button.nodeName).toBe("A")
  })
})

describe("twMerge className merging", () => {
  it("removes the base tailwind class and applies a new one", () => {
    const customClassName = "text-3xl"
    const { getByRole } = render(<Button className={customClassName}>Button Text</Button>)
    const buttonElement = getByRole("button", { name: /Button Text/i })
    expect(buttonElement).not.toHaveClass("text-2xl")
  })
})
