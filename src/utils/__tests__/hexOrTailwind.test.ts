import hexOrTailwindColor from "@utils/hexOrTailwindColor"

describe("Hex color from tailwind string", () => {
  it("should return a hex color", () => {
    let result = hexOrTailwindColor("text-primary-500")
    expect(result).toBe("#007173")

    result = hexOrTailwindColor("primary-500")
    expect(result).toBe("#007173")

    result = hexOrTailwindColor("#123456")
    expect(result).toBe("#123456")
  })

  it("should return undefined", () => {
    let result = hexOrTailwindColor("")
    expect(result).toBe(undefined)

    result = hexOrTailwindColor(undefined)
    expect(result).toBe(undefined)

    result = hexOrTailwindColor("primary200")
    expect(result).toBe(undefined)
  })
})
