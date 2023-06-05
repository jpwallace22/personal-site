import { act, renderHook } from "@testing-library/react"
import useDarkMode from "@utils/hooks/useDarkMode"

describe("useDarkMode", () => {
  test("should initialize with the correct initial state", () => {
    const { result } = renderHook(() => useDarkMode())

    const [isDark] = result.current
    expect(isDark).toBe(true)
  })

  test("should toggle dark mode when toggleDarkMode is called", () => {
    const { result } = renderHook(() => useDarkMode())

    const [beforeToggle, toggleDarkMode] = result.current
    expect(beforeToggle).toBe(true)
    act(() => {
      toggleDarkMode()
    })

    const [afterToggle] = result.current
    expect(afterToggle).toBe(false)
  })
})
