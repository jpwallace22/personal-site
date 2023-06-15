import { ComponentPropsWithoutRef, FC } from "react"
import { cva, VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"

interface DotsProps extends ComponentPropsWithoutRef<"div">, VariantProps<typeof dot> {}

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

const PaginationDot: FC<DotsProps> = ({ active, ...props }) => {
  return <div className={twMerge(dot({ active }))} {...props} />
}

export default PaginationDot
