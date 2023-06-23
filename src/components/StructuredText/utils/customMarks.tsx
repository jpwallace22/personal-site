import { renderMarkRule } from "datocms-structured-text-to-plain-text"

export const strong = renderMarkRule("strong", ({ children, key }) => (
  <strong key={key}>{children}</strong>
))

export const code = renderMarkRule("code", ({ children, key }) => (
  <span
    key={key}
    className="border-gradient-primary mx-1 whitespace-nowrap rounded-md bg-gray-100 px-2 py-1 font-mono text-base text-common-black dark:bg-purple-800 dark:text-common-white"
  >
    {children}
  </span>
))
