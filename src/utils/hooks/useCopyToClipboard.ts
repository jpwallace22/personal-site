import { useEffect } from "react"
import useStore from "src/store/useStore"

type CopiedValue = string | null
type CopyFn = (text: string) => void

const useCopyToClipboard = (): [CopiedValue, CopyFn] => {
  const value = useStore((state) => state.clipBoard)
  const setClipboard = useStore((state) => state.setClipBoard)

  const copy: CopyFn = (text) => {
    if (!navigator?.clipboard) {
      console.warn("Clipboard not supported")
    }

    try {
      navigator.clipboard.writeText(text)
      setClipboard(text)
    } catch (error) {
      console.warn("Copy failed", error)
      setClipboard("")
    }
  }

  const handleCopy = (e: ClipboardEvent) => {
    e.preventDefault()
    const selection = document.getSelection()
    if (selection) {
      setClipboard(selection.toString())
    }
  }

  useEffect(() => {
    document.addEventListener("copy", handleCopy)

    return () => {
      document.removeEventListener("copy", handleCopy)
    }
  })

  return [value, copy]
}

export default useCopyToClipboard
