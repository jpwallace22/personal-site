import { ComponentPropsWithoutRef, FC } from "react"
import { twMerge } from "tailwind-merge"
import Circle from "@molecules/Circle"
import Switchback, { SwitchbackProps } from "@components/Switchback"

export interface SwitchingSwitchbacksProps
  extends Clean<ScrollingSwitchbackFragment>,
    ComponentPropsWithoutRef<"div"> {}

const SwitchingSwitchbacks: FC<SwitchingSwitchbacksProps> = ({
  switchbacks,
  className,
  ...props
}) => {
  return (
    <div className={twMerge("relative", className)} {...props}>
      <Circle className="absolute -left-2/3 -top-20" size="lg" contrast="low" />
      <Circle className="absolute -left-1/3 bottom-0" size="md" contrast="high" />
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
