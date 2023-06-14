import { FC } from "react"
import { cva } from "class-variance-authority"
import { twMerge } from "tailwind-merge"
import Button, { ButtonProps } from "@molecules/Button"
import Icon from "@molecules/Icon"

interface PButtonProps extends ButtonProps {
  side?: "left" | "right"
}

const button = cva(
  ["bg-transparent dark:bg-transparent text-common-black dark:text-common-white"],
  {
    variants: {
      side: {
        left: ["rotate-180"],
        right: [],
      },
      disabled: {
        true: ["invisible"],
      },
    },
  }
)

const PaginationButton: FC<PButtonProps> = ({ className, side, disabled, ...props }) => {
  return (
    <Button
      variant="contained"
      size="sm"
      className={twMerge(button({ className, disabled }))}
      {...props}
    >
      <Icon id="chevron-right" className={twMerge(button({ side }))} size={18} />
    </Button>
  )
}

export default PaginationButton
