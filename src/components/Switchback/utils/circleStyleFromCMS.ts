const circleStyeFromCMS = (cmsInput: string) => {
  const circleMap = {
    lg: {
      size: "lg",
      contrast: "low",
      dots: false,
    },
    md: {
      size: "md",
      contrast: "high",
      dots: false,
    },
    dots: {
      size: undefined,
      contrast: undefined,
      dots: true,
    },
  } as const

  if (!Object.keys(circleMap).includes(cmsInput)) {
    console.warn(`Incorrect input for circle style. 
        Expected: 'lg | md | dots'
        Received: ${cmsInput}`)

    return circleMap.dots
  }

  return circleMap[cmsInput as keyof typeof circleMap]
}

export default circleStyeFromCMS
