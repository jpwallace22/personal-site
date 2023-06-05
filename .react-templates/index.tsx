import { FC } from "react"
import { cva, VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"

const $name = cva([], {
  variants: {},
})

export type $NameProps = VariantProps<typeof $name>

const $Name: FC<$NameProps> = () => {
  return <div className={twMerge($name())}>$name</div>
}

export default $Name
