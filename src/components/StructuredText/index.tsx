import { ComponentPropsWithoutRef, FC } from "react"
import { twMerge } from "tailwind-merge"
import structuredTextParser, {
  StructuredData,
} from "@components/StructuredText/utils/structuredTextParser"

interface StructuredTextProps extends ComponentPropsWithoutRef<"div"> {
  data?: StructuredData
}

const StructuredText: FC<StructuredTextProps> = ({ data, className, ...props }) => {
  return (
    <div className={twMerge("flex flex-col gap-6", className)} {...props}>
      {structuredTextParser(data)}
    </div>
  )
}

export default StructuredText
