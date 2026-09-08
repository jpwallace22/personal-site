import { useCallback, useMemo, useSyncExternalStore } from "react"

// TODO create a more robust version of this hook

/** Same-document writes don't fire `storage`, so setLocalStorage announces itself. */
const LOCAL_STORAGE_EVENT = "local-storage"

const subscribe = (onStoreChange: () => void) => {
  window.addEventListener("storage", onStoreChange)
  window.addEventListener(LOCAL_STORAGE_EVENT, onStoreChange)
  return () => {
    window.removeEventListener("storage", onStoreChange)
    window.removeEventListener(LOCAL_STORAGE_EVENT, onStoreChange)
  }
}

const useLocalStorage = <T>(key: string, defaultValue: T) => {
  const getSnapshot = useCallback(() => localStorage.getItem(key), [key])

  // The server snapshot is undefined rather than null so "not hydrated yet" stays
  // distinguishable from "key is absent". Both surface as null, which is what keeps
  // the value from causing a hydration mismatch when it drives conditional rendering.
  const stored = useSyncExternalStore<Maybe<string> | undefined>(
    subscribe,
    getSnapshot,
    () => undefined
  )

  const value = useMemo<Maybe<T>>(() => {
    if (stored === undefined) {
      return null
    }
    try {
      return JSON.parse(stored || String(defaultValue)) as T
    } catch {
      return defaultValue
    }
  }, [stored, defaultValue])

  const setLocalStorage = (newValue: T) => {
    localStorage.setItem(key, JSON.stringify(newValue))
    window.dispatchEvent(new Event(LOCAL_STORAGE_EVENT))
  }

  return [value, setLocalStorage] as const
}

export default useLocalStorage
