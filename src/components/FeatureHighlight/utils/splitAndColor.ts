import { FeatureCardProps } from "@components/FeatureHighlight/FeatureCard"

type Colored<T> = T & Pick<FeatureCardProps, "color">

const addColorFromIndex = <T>(obj: T, index: number): Colored<T> => {
  const colors = ["purple", "green", "lightPurple", "lightGreen"] as const
  const colorIndex = index % colors.length
  const color = colors[colorIndex]
  return { ...obj, color }
}

export const splitAndColorArray = <T>(arr: T[]): Colored<T>[][] => {
  const result: Colored<T>[][] = [[], []]
  const half = arr.length / 2
  const splitIndex = Math.floor(half)

  arr.forEach((obj: T, index: number) => {
    const newObj = addColorFromIndex(obj, index)

    if (index < splitIndex) {
      result[0].push(newObj)
    } else {
      result[1].push(newObj)
    }
  })

  return result
}
