import { act, renderHook } from "@testing-library/react"
import useLocalStorage from "@utils/hooks/useLocalStorage"

describe("useLocalStorage", () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it("reads an existing value out of storage", () => {
    localStorage.setItem("theme", JSON.stringify("dark"))

    const { result } = renderHook(() => useLocalStorage("theme", "light"))

    expect(result.current[0]).toBe("dark")
  })

  it("falls back to the default when the key is absent", () => {
    const { result } = renderHook(() => useLocalStorage("theme", "light"))

    expect(result.current[0]).toBe("light")
  })

  it("falls back to the default when the stored value is not valid JSON", () => {
    localStorage.setItem("theme", "not json")

    const { result } = renderHook(() => useLocalStorage("theme", "light"))

    expect(result.current[0]).toBe("light")
  })

  it("writes JSON to storage and re-renders with the new value", () => {
    const { result } = renderHook(() => useLocalStorage("theme", "light"))

    act(() => {
      result.current[1]("dark")
    })

    expect(localStorage.getItem("theme")).toBe(JSON.stringify("dark"))
    expect(result.current[0]).toBe("dark")
  })

  it("picks up writes made in another tab", () => {
    const { result } = renderHook(() => useLocalStorage("theme", "light"))

    act(() => {
      localStorage.setItem("theme", JSON.stringify("dark"))
      window.dispatchEvent(new StorageEvent("storage", { key: "theme" }))
    })

    expect(result.current[0]).toBe("dark")
  })
})
