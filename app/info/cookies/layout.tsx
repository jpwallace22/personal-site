import { FC, PropsWithChildren } from "react"
import { Metadata } from "next"
import Section from "@molecules/Section"
import renderMetadata from "src/template/renderMetadata"

export const metadata: Metadata = renderMetadata({
  path: "/info/cookies",
  seo: {
    title: "Cookie Policy",
    description: "How justinwallace.dev uses cookies, and what you can do about it.",
  },
})

/**
 * Chrome for the cookie policy. The page itself is plain MDX, so the layout
 * supplies the section and prose width the content used to get from a template.
 */
const CookiesLayout: FC<PropsWithChildren> = ({ children }) => (
  <Section>
    <div className="flex flex-col gap-6 mx-auto max-w-4xl">{children}</div>
  </Section>
)

export default CookiesLayout
