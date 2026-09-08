import { FC } from "react"

interface JsonLdProps {
  /** A schema.org node, or an array of them, to embed on the page. */
  schema: object | object[]
}

/**
 * Structured data for search engines.
 *
 * `<` is escaped so a stray angle bracket in content — a heading, an excerpt —
 * cannot close the script tag early, per the Next.js JSON-LD guidance.
 */
const JsonLd: FC<JsonLdProps> = ({ schema }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
    }}
  />
)

export default JsonLd
