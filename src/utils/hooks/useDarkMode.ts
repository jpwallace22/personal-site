import { useState } from "react"

// TODO maybe add this to a linked state/server friendly global state
const useDarkMode = () => {
  const body = document.documentElement
  const [isDark, setIsDark] = useState(body.classList.contains("dark"))

  const toggleDarkMode = () => {
    if (isDark) {
      body.classList.remove("dark")
    } else {
      body.classList.add("dark")
    }
    setIsDark(body.classList.contains("dark"))
  }

  return [isDark, toggleDarkMode] as const
}

export default useDarkMode
