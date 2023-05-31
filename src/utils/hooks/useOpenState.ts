import { useEffect, useRef, useState } from "react"

type ClickAwayEvent = MouseEvent | TouchEvent

/**
 * Handles state, clicking way, and scroll lock for opening things
 * @param defaultState
 * @returns - { ref, open, setOpen}
 */
const useOpenState = <T extends HTMLElement>(defaultState = false) => {
  const [open, setOpen] = useState(defaultState)
  const ref = useRef<T>(null)

  useEffect(() => {
    const handleClickAway = (event: ClickAwayEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickAway)
    document.addEventListener("touchstart", handleClickAway)

    return () => {
      document.removeEventListener("mousedown", handleClickAway)
      document.removeEventListener("touchstart", handleClickAway)
    }
  }, [ref])

  useEffect(() => {
    const body = document.body
    if (open) {
      body.classList.add("overflow-hidden")
    } else {
      body.classList.remove("overflow-hidden")
    }
  }, [open])

  return { ref, open, setOpen }
}

export default useOpenState
