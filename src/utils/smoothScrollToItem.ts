interface SmoothScrollOptions {
  headerHeight: number
  offset: number
}

/**
 * Adds smooth scrolling to subnavigations.
 *
 * @param id - ID of the element to scroll to.
 * @param headerHeight - Header normal height.
 * @param offset - Offset to add to header.
 */
export const smoothScrollToItem = (
  id: string | undefined,
  options: SmoothScrollOptions = { headerHeight: 88, offset: 0 }
) => {
  const { headerHeight, offset } = options
  const element = document?.querySelector(`#${id}`) as HTMLDivElement
  if (element) {
    const headerOffset = headerHeight + offset
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.scrollY - headerOffset
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  }
}
