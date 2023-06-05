import useStore from "src/store/useStore"

/**
 * A custom React hook to manage dark mode state.
 *
 * @returns {[boolean, () => void]} A tuple containing the current state of dark mode (`isDark`) and a function to toggle dark mode (`toggleDarkMode`).
 */
const useDarkMode = (): [boolean, () => void] => {
  const isDark = useStore((state) => state.isDark)
  const setIsDark = useStore((state) => state.setIsDark)
  const body = document.documentElement

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
