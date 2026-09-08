import { FC } from "react"
import { HeadingMarkup } from "@molecules/Heading"
import FeatureHighlightGrid from "@components/FeatureHighlight/FeatureHighlightGrid"
import Markdown from "@components/Markdown"
import type { FeatureCard } from "src/content/about"

interface FeatureHighlightProps {
  heading: string
  headingAs?: HeadingMarkup
  eyebrow?: string
  body: string
  cards: FeatureCard[]
}

/**
 * Server wrapper: renders the MDX and hands finished nodes to the interactive
 * grid, which needs client state for its hover behaviour. Keeping the render
 * here is what stops the MDX compiler being bundled for the browser.
 */
const FeatureHighlight: FC<FeatureHighlightProps> = ({
  eyebrow,
  heading,
  headingAs,
  body,
  cards,
}) => (
  <FeatureHighlightGrid
    eyebrow={eyebrow}
    heading={heading}
    headingAs={headingAs}
    body={<Markdown source={body} className="mt-8" />}
    cards={cards.map((card) => ({ ...card, body: <Markdown source={card.body} /> }))}
  />
)

export default FeatureHighlight
