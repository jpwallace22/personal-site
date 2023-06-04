import { act, renderHook } from "@testing-library/react"
import useOpenState from "@utils/hooks/useOpenState"

describe("useOpenState", () => {
  test("should initialize with the correct initial state", () => {
    const { result } = renderHook(() => useOpenState(false))

    const { open } = result.current
    expect(open).toBe(false)
  })

  test("should update open state when setOpen is called", () => {
    const { result } = renderHook(() => useOpenState())

    const { setOpen } = result.current

    act(() => {
      setOpen(true)
    })

    const { open } = result.current
    expect(open).toBe(true)
  })

  test("should close when clicked outside the referenced element", () => {
    const { result } = renderHook(() => useOpenState())

    const { open, setOpen } = result.current

    act(() => {
      setOpen(true)
    })

    const clickEvent = new MouseEvent("mousedown", { bubbles: true })
    act(() => {
      document.dispatchEvent(clickEvent)
    })

    expect(open).toBe(false)
  })
})
