import { FC } from "react"

import { twMerge } from "tailwind-merge"

import hexOrTailwindColor from "@utils/hexOrTailwindColor"

import type { IconIds } from "@molecules/Icon/iconIds"

interface IconProps {
  id: IconIds
  size?: number | string
  className?: string
  fill?: string
  stroke?: string
}

export const Icon: FC<IconProps> = ({ id, size, className, fill, stroke }) => (
  <svg width={size || 24} height={size || 24} className={twMerge("inline", className)}>
    <use
      href={`/sprite.svg#${id}`}
      fill={hexOrTailwindColor(fill) || "currentColor"}
      stroke={hexOrTailwindColor(stroke)}
    />
  </svg>
)

export default Icon
