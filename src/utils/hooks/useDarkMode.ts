import useStore from "src/store/useStore"

/**
 * A custom React hook to manage dark mode state.
 *
 * @returns {[boolean, () => void]} A tuple containing the current state of dark mode (`isDark`) and a function to toggle dark mode (`toggleDarkMode`).
 */
const useDarkMode = (): [boolean, () => void] => {
  const isDark = useStore((state) => state.isDark)
  const setIsDark = useStore((state) => state.setIsDark)

  const toggleDarkMode = () => {
    const toggle = document.documentElement.classList.toggle("dark")
    const theme = toggle ? "dark" : "light"
    window.localStorage.setItem("theme", theme)
    setIsDark(toggle)
    // const body = document.documentElement
    // if (isDark) {
    //   body.classList.remove("dark")
    // } else {
    //   body.classList.add("dark")
    // }
    // setIsDark(body.classList.contains("dark"))
  }

  return [isDark, toggleDarkMode]
}

export default useDarkMode
