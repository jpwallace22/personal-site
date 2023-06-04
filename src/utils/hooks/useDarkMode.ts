import { useState } from "react"

// TODO maybe add this to a linked state/server friendly global state

/**
 * A custom React hook to manage dark mode state.
 *
 * @returns {[boolean, () => void]} A tuple containing the current state of dark mode (`isDark`) and a function to toggle dark mode (`toggleDarkMode`).
 */
const useDarkMode = (): [boolean, () => void] => {
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

  return [isDark, toggleDarkMode]
}

export default useDarkMode
