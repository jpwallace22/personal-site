import { ScrollingSwitchbackProps } from "@components/ScrollingSwitchback"
import type { Switchback } from "src/content/schema"

type SwitchbackContent = Pick<Switchback, "heading" | "body">
type SwitchbackImage = Pick<Switchback, "image">

export const separateSwitchbacks = (
  switchbacks: ScrollingSwitchbackProps["switchbacks"]
): [SwitchbackContent[], SwitchbackImage[]] => {
  const splitSwitchbacks = switchbacks.reduce<[SwitchbackContent[], SwitchbackImage[]]>(
    (result, switchback) => {
      const { heading, body, image } = switchback
      result[0].push({ heading, body })
      result[1].push({ image })

      return result
    },
    [[], []]
  )

  return splitSwitchbacks
}
