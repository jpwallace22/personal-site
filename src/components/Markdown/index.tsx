import { ComponentPropsWithoutRef, FC } from "react"
import { MDXRemote } from "next-mdx-remote/rsc"
import { twMerge } from "tailwind-merge"
import components from "@components/Markdown/components"
import type { MDXComponents } from "mdx/types"

interface MarkdownProps extends Omit<ComponentPropsWithoutRef<"div">, "children"> {
  /** MDX source: either an inline string from content JSON or a loaded .mdx file. */
  source?: string | null
}

/**
 * Renders content MDX. Replaces the former StructuredText component; the element
 * map in ./components reproduces the markup the DatoCMS renderer produced.
 */
const Markdown: FC<MarkdownProps> = ({ source, className, ...props }) => {
  if (!source) {
    return null
  }

  return (
    <div className={twMerge("flex flex-col gap-6", className)} {...props}>
      <MDXRemote source={source} components={components as MDXComponents} />
    </div>
  )
}

export default Markdown
