import { ComponentPropsWithoutRef, FC } from "react"
import Switchback, { SwitchbackProps } from "@components/Switchback"

export interface SwitchingSwitchbacksProps
  extends Clean<ScrollingSwitchbackFragment>,
    ComponentPropsWithoutRef<"div"> {}

const SwitchingSwitchbacks: FC<SwitchingSwitchbacksProps> = ({ switchbacks, ...props }) => {
  return (
    <div {...props}>
      {switchbacks.map((switchback, i) => (
        <Switchback
          key={switchback.id}
          {...(switchback as SwitchbackProps)}
          reverse={i % 2 === 0}
        />
      ))}
    </div>
  )
}

export default SwitchingSwitchbacks
