import { createContext, PropsWithChildren, useContext } from "react"

type ProviderProps<T> = PropsWithChildren<{ value: T }>

export const createQuickContext = <T extends object>(initialState?: T) => {
  const Context = createContext(initialState)

  const Provider = ({ value, children, ...props }: ProviderProps<T>) => {
    return (
      <Context.Provider {...props} value={value}>
        {children}
      </Context.Provider>
    )
  }

  const useCtx = (): T => {
    return useContext(Context) as T
  }

  return [Provider, useCtx] as const
}
