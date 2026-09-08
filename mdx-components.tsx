import type { MDXComponents } from "mdx/types"
import components from "@components/Markdown/components"

/**
 * Element map for MDX compiled by @next/mdx (the .mdx routes under app/).
 * Shares the map used for content MDX so both render identically.
 */
export function useMDXComponents(existing: MDXComponents): MDXComponents {
  return { ...existing, ...(components as MDXComponents) }
}
