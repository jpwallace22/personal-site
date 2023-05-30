import { render } from "@testing-library/react"

import Section from "@molecules/Section"

it("should render a <section>", () => {
  const { getByText } = render(<Section>test</Section>)

  expect(getByText("test").nodeName).toBe("SECTION")
})
