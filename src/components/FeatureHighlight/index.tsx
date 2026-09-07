import { FC } from "react"
import FeatureHighlightGrid from "@components/FeatureHighlight/FeatureHighlightGrid"
import Markdown from "@components/Markdown"

/**
 * Server wrapper: renders the MDX and hands finished nodes to the interactive
 * grid, which needs client state for its hover behaviour. Keeping the render
 * here is what stops the MDX compiler being bundled for the browser.
 */
const FeatureHighlight: FC<FeatureHighlightFragment> = ({ id, eyebrow, heading, body, cards }) => (
  <FeatureHighlightGrid
    id={id}
    eyebrow={eyebrow}
    heading={heading}
    body={<Markdown source={body} className="mt-8" />}
    cards={cards.map((card) => ({ ...card, body: <Markdown source={card.body} /> }))}
  />
)

export default FeatureHighlight
