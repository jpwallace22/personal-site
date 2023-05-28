import NextLink from "next/link"

import parseUrl from "@utils/parseUrl"

it("should return a base state", () => {
  let toTest = parseUrl("")
  const result = {
    as: "div",
    tabIndex: -1,
    isInternal: false,
  }
  expect(toTest).toMatchObject(result)
  toTest = parseUrl()
  expect(toTest).toMatchObject(result)
  toTest = parseUrl("asdkflhasdf")
  expect(toTest).toMatchObject(result)
})

it("should be internal", () => {
  let toTest = parseUrl("https://www.justinwallace.dev/about")
  const result = {
    as: NextLink,
    href: "/about",
    rel: undefined,
    target: undefined,
  }
  expect(toTest).toMatchObject(result)
  toTest = parseUrl("/about")
  expect(toTest).toMatchObject({ as: result.as, href: result.href })
  toTest = parseUrl("/#about")
  expect(toTest).toMatchObject({ as: result.as, href: "/#about" })
})

it("should be external", () => {
  const href = "https://www.google.com"
  const toTest = parseUrl(href)
  expect(toTest).toMatchObject({
    as: "a",
    href,
    rel: "noreferrer noopener",
    target: "_blank",
  })
})
