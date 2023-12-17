"use client"

import { createContext, PropsWithChildren, useContext, useState } from "react"

interface BlogContextProps {
  activeHeading: string
  setActiveHeading: (heading: string) => void
}

const Context = createContext<BlogContextProps>({ activeHeading: "", setActiveHeading: () => null })

export const BlogContextProvider = ({ children, ...props }: PropsWithChildren) => {
  const [activeHeading, setActiveHeading] = useState<string>("")

  return (
    <Context.Provider {...props} value={{ activeHeading, setActiveHeading }}>
      {children}
    </Context.Provider>
  )
}

export const useBlogContext = () => useContext(Context)
