import { render } from "@testing-library/react"
import Link from "@molecules/Link"

it("should render", () => {
  const { getByText } = render(<Link href="/about">test</Link>)

  expect(getByText("test")).toBeTruthy()
})

describe("properly renders internal and external", () => {
  it("should render an anchor that opens in a new tab", () => {
    const { getByText } = render(<Link href="https://www.google.com">test</Link>)
    const link = getByText("test")

    expect(link.nodeName).toBe("A")
    expect(link.getAttribute("rel")).toBe("noreferrer noopener")
    expect(link.getAttribute("target")).toBe("_blank")
  })

  it("should render an absolute NextLink", () => {
    const { getByText } = render(<Link href="https://www.justinwallace.dev/about">test</Link>)
    const link = getByText("test")

    expect(link.nodeName).toBe("A")
    expect(link.getAttribute("href")).toBe("/about")
  })
})
