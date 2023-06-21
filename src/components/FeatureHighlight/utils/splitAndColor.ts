import { FeatureCardProps } from "@components/FeatureHighlight/FeatureCard"

const addColorFromIndex = (obj: FeatureCardFragment, index: number): FeatureCardProps => {
  const colors = ["purple", "green", "lightPurple", "lightGreen"] as const
  const colorIndex = index % colors.length
  const color = colors[colorIndex]
  return { ...obj, color }
}

export const splitAndColorArray = (arr: FeatureCardFragment[]): FeatureCardProps[][] => {
  const result: FeatureCardProps[][] = [[], []]
  const half = arr.length / 2
  const splitIndex = Math.floor(half)

  arr.forEach((obj: FeatureCardFragment, index: number) => {
    const newObj = addColorFromIndex(obj, index)

    if (index < splitIndex) {
      result[0].push(newObj)
    } else {
      result[1].push(newObj)
    }
  })

  return result
}
