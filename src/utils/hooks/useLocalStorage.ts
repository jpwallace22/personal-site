import { useEffect, useState } from "react"

// TODO create a more robust version of this hook

const useLocalStorage = <T>(key: string, defaultValue: T) => {
  const [value, setValue] = useState<Maybe<T>>(null)

  // useEffect to set default to prevent RSC issues (hydration mismatch) if used to conditionally render
  useEffect(() => {
    let currentValue
    try {
      currentValue = JSON.parse(localStorage.getItem(key) || String(defaultValue))
    } catch (e) {
      currentValue = defaultValue
    }
    setValue(currentValue as T)
  }, [])

  const setLocalStorage = (newValue: T) => {
    localStorage.setItem(key, JSON.stringify(newValue))
    setValue(newValue)
  }

  return [value, setLocalStorage] as const
}

export default useLocalStorage
