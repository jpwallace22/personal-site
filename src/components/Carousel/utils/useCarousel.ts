import { MutableRefObject, RefObject, useState } from "react"
import { useIntersection } from "@utils/hooks/useIntersectionObserver"

const useCarousel = <Box extends HTMLElement, Card extends HTMLElement>(
  scrollBox: MutableRefObject<Maybe<Box>>,
  refs: RefObject<Card>[]
) => {
  const [activeIndex, setActiveIndex] = useState(0)
  useIntersection(refs, { init: { threshold: 0.8 }, onIntersection: (i) => setActiveIndex(i) })

  const isLastCard = activeIndex === refs.length - 1
  const isFirstCard = activeIndex === 0
  const scrollToIndex = (index: number) => {
    const position = refs[index].current?.offsetLeft
    if (!scrollBox.current?.scrollWidth || position === undefined) {
      return
    }
    scrollBox.current?.scrollTo(position, 0)
  }

  const onDotClick = (index: number) => {
    scrollToIndex(index)
  }

  const onLeftClick = () => {
    if (isFirstCard) {
      return
    }
    scrollToIndex(activeIndex - 1)
  }

  const onRightClick = () => {
    if (isLastCard) {
      return
    }
    scrollToIndex(activeIndex + 1)
  }

  return {
    onDotClick,
    onLeftClick,
    onRightClick,
    isFirstCard,
    isLastCard,
    activeIndex,
    setActiveIndex,
  }
}

export default useCarousel
