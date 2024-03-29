"use client"

import { PropsWithChildren, useState } from "react"
import { createQuickContext } from "src/contexts/QuickContext"

interface BlogContextProps {
  activeHeading: string
  setActiveHeading: (heading: string) => void
}

const [Provider, useBlogContext] = createQuickContext<BlogContextProps>({
  activeHeading: "",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setActiveHeading: () => {},
})

export const BlogContextProvider = ({ children, ...props }: PropsWithChildren) => {
  const [activeHeading, setActiveHeading] = useState<string>("")

  return (
    <Provider {...props} value={{ activeHeading, setActiveHeading }}>
      {children}
    </Provider>
  )
}

export { useBlogContext }
