import { ComponentPropsWithoutRef, FC, useCallback } from "react"
import { cva } from "class-variance-authority"
import { twMerge } from "tailwind-merge"
import PaginationButton from "@molecules/Pagination/PaginationButton"
import PaginationDot from "@molecules/Pagination/PaginationDot"

interface PaginationProps extends ComponentPropsWithoutRef<"div"> {
  activeDot?: number
  count: number
  onDotClick: (dot: number) => void
  onLeftClick: () => void
  onRightClick: () => void
}

const dotWrapper = cva(["flex", "gap-3", "hidden md:flex"])
const wrapper = cva(["flex", "justify-center", "items-center", "gap-8"])

const Pagination: FC<PaginationProps> = ({
  count,
  className,
  activeDot,
  onRightClick,
  onLeftClick,
  onDotClick,
  ...props
}) => {
  const firstActive = activeDot === 0
  const lastActive = activeDot === count - 1
  const handleRightArrowClick = useCallback(() => onRightClick(), [onRightClick])
  const handleLeftArrowClick = useCallback(() => onLeftClick(), [onLeftClick])
  const handleActiveDot = useCallback((dotIndex: number) => onDotClick(dotIndex), [onDotClick])

  return (
    <div className={twMerge(wrapper({ className }))}>
      <PaginationButton
        side="left"
        onClick={handleLeftArrowClick}
        disabled={firstActive}
        aria-hidden={firstActive}
        aria-label="Left arrow"
      />
      <div className={twMerge(dotWrapper())} {...props}>
        {Array.from({ length: count }, (_, i) => (
          <PaginationDot
            key={i}
            index={i}
            active={activeDot === i}
            onClick={() => handleActiveDot(i)}
            onKeyDown={({ key }) => key === "Enter" && handleActiveDot(i)}
          />
        ))}
      </div>
      <PaginationButton
        onClick={handleRightArrowClick}
        disabled={lastActive}
        aria-hidden={lastActive}
        aria-label="Right arrow"
      />
    </div>
  )
}

export default Pagination
