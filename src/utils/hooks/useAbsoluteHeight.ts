import { RefObject, useCallback, useEffect, useState } from "react"

export const useAbsoluteHeight = <T extends HTMLElement>(ref: RefObject<T | null>) => {
  const [height, setHeight] = useState("0px")

  const handleResize = useCallback(() => {
    if (ref.current) {
      const newHeight = ref.current.getBoundingClientRect().height
      setHeight(newHeight + "px")
    }
  }, [ref])

  useEffect(() => {
    handleResize()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [ref, handleResize])

  return height
}
