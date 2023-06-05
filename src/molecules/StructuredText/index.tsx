import { FC, HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"
import structuredTextParser, { StructuredData } from "@utils/structuredTextParser"

interface StructuredTextProps extends HTMLAttributes<HTMLDivElement> {
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
