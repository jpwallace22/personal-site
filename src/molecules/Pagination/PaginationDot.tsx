import { ComponentPropsWithoutRef, FC } from "react"
import { cva, VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"

interface DotsProps extends ComponentPropsWithoutRef<"div">, VariantProps<typeof dot> {
  index: number
}

const dot = cva(
  ["w-3", "h-3", "bg-gray-500", "cursor-pointer", "rounded-full", "transition-all", "duration-300"],
  {
    variants: {
      active: {
        true: ["w-12", "gradient-primary"],
      },
    },
  }
)

const PaginationDot: FC<DotsProps> = ({ active, index, ...props }) => {
  return (
    <div
      role="button"
      aria-label={`to item ${index + 1}`}
      tabIndex={0}
      className={twMerge(dot({ active }))}
      {...props}
    />
  )
}

export default PaginationDot
