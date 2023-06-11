import { SwitchbackProps } from "@components/Switchback"

const circleStyleFromCMS = (cmsInput: SwitchbackProps["designAccent"]) => {
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

  if (!cmsInput || !Object.keys(circleMap).includes(cmsInput)) {
    console.warn(`Incorrect input for circle style. 
        Expected: 'lg | md | dots'
        Received: ${cmsInput}`)

    return circleMap.dots
  }

  return circleMap[cmsInput]
}

export default circleStyleFromCMS
