"use client"

import { ComponentPropsWithoutRef, FC } from "react"
import { twMerge } from "tailwind-merge"
import { StructuredData } from "@components/StructuredText/utils/structuredTextParser"
import StructuredTextParser from "@components/StructuredText/utils/structuredTextParser"

interface StructuredTextProps extends ComponentPropsWithoutRef<"div"> {
  data?: StructuredData
}

const StructuredText: FC<StructuredTextProps> = ({ data, className, ...props }) => {
  return (
    <div className={twMerge("flex flex-col gap-6", className)} {...props}>
      <StructuredTextParser data={data} />
    </div>
  )
}

export default StructuredText
