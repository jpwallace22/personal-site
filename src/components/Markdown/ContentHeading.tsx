"use client"

import { type ReactNode, useRef } from "react"
import { useIntersection } from "@utils/hooks/useIntersectionObserver"
import { useBlogContext } from "src/contexts/BlogContext"

interface ContentHeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6
  id?: string
  children?: ReactNode
}

/**
 * Headings register themselves with the blog context as they scroll into view,
 * which is what drives the active item in the table of contents.
 */
const ContentHeading = ({ level, id, children }: ContentHeadingProps) => {
  const ref = useRef<HTMLHeadingElement>(null)
  const { setActiveHeading } = useBlogContext()

  useIntersection(ref, {
    onIntersection: () => setActiveHeading(id || ""),
    init: { rootMargin: "0px 0px -80%" },
  })

  const Component = `h${level}` as const

  return (
    <Component ref={ref} className="mt-8" id={id}>
      {children}
    </Component>
  )
}

export default ContentHeading
