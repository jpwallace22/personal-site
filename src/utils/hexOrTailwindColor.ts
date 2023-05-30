import tailwind from "../../tailwind.config"

/**
 * Accesses the tailwind config and returns the hex of input color string
 * or just hex if input is a hex color
 * @param colorString ie: "text-gray-500" | "#123456"
 * @returns {string} hex string ie: "#123456"
 */
const hexOrTailwindColor = (colorString?: string): string | undefined => {
  if (!colorString) {
    return
  }
  if (colorString.startsWith("#")) {
    return colorString
  }

  try {
    const colors = tailwind.theme?.colors as Record<string, Record<string, string>>
    const colorArray = colorString.split("-")
    if (colorArray.length === 2) {
      const [name, hue] = colorArray
      return colors[name][hue]
    }
    const [_, name, hue] = colorArray
    return colors[name][hue]
  } catch (e) {
    console.error(`${colorString} is an incorrect argument for the hexOrTailwindColor function`, e)
    return
  }
}

export default hexOrTailwindColor
