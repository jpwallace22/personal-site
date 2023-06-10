import { FC } from "react"
import { twMerge } from "tailwind-merge"
import { IconIds, iconValues } from "@molecules/Icon/iconIds"
import hexOrTailwindColor from "@utils/hexOrTailwindColor"

interface IconProps extends React.SVGAttributes<SVGElement> {
  id: IconIds
  size?: number | string
  className?: string
  fill?: string
  stroke?: string
}

export const Icon: FC<IconProps> = ({ id, size, className, fill, stroke, ...props }) =>
  iconValues.has(id) ? (
    <svg
      width={size || 24}
      height={size || 24}
      className={twMerge("inline", className)}
      role="img"
      aria-label={id}
      {...props}
    >
      <use
        href={`/sprite.svg#${id}`}
        fill={hexOrTailwindColor(fill) || "currentColor"}
        stroke={hexOrTailwindColor(stroke)}
      />
    </svg>
  ) : null

export default Icon
