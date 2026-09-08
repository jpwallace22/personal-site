import { ComponentPropsWithoutRef, FC } from "react"
import Section from "@molecules/Section"
import Markdown from "@components/Markdown"
import ScrollingSwitchback from "@components/ScrollingSwitchback/ScrollingSwitchback"
import SwitchingSwitchbacks from "@components/ScrollingSwitchback/SwitchingSwitchbacks"
import type { Switchback } from "src/content/schema"

export interface ScrollingSwitchbackProps extends ComponentPropsWithoutRef<"div"> {
  switchbacks: Switchback[]
}

const ScrollingSwitchbackComponent: FC<ScrollingSwitchbackProps> = ({ switchbacks }) => {
  return (
    <Section>
      <ScrollingSwitchback
        switchbacks={switchbacks}
        bodies={switchbacks.map(({ body }, i) => (
          <Markdown key={i} source={body} />
        ))}
        className="hidden lg:flex"
      />
      <SwitchingSwitchbacks switchbacks={switchbacks} className="lg:hidden" />
    </Section>
  )
}

export default ScrollingSwitchbackComponent
