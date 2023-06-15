import { StructuredData } from "@components/StructuredText/utils/structuredTextParser"

type Props = {
  data?: StructuredData
}

export type StructuredTextProps<V extends VariantFunc = never> = ComponentProps<
  Props,
  HTMLDivElement,
  V
>
