import Button, { ButtonProps } from "@molecules/Button"
import { StructuredData } from "@components/StructuredText/utils/structuredTextParser"

type MakeInline<T, Typename> = T & {
  __typename: Typename
  id: string
  [prop: string]: unknown
}

export type InlineRecords = MakeInline<ButtonProps, "ButtonRecord">

const buttonWrapper = (arr: InlineRecords[]) => {
  const defaultReturn = {
    wrapButtons: false as const,
    firstButton: undefined,
    secondButton: undefined,
    skipId: undefined,
  }

  if (!arr) {
    return defaultReturn
  }

  for (let i = 0; i < arr.length; i++) {
    const firstButton = arr[i]
    const secondButton = arr[i + 1]
    if (
      firstButton &&
      secondButton &&
      firstButton.__typename === "ButtonRecord" &&
      secondButton.__typename === "ButtonRecord"
    ) {
      return {
        wrapButtons: true as const,
        firstButton,
        secondButton,
        skipId: secondButton.id,
      }
    }
  }

  return defaultReturn
}

const inlineRecords = (data: StructuredData, record: InlineRecords) => {
  const { wrapButtons, firstButton, secondButton, skipId } = buttonWrapper(
    data?.links as InlineRecords[]
  )
  switch (record.__typename) {
    case "ButtonRecord":
      if (skipId === record.id) {
        return null
      }
      if (wrapButtons) {
        return (
          <div className="flex flex-col gap-6 md:flex-row">
            <Button {...firstButton} />
            <Button {...secondButton} />
          </div>
        )
      }

      return <Button {...record} />
    default:
      return null
  }
}

export default inlineRecords
