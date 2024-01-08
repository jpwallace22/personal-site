import React, { ComponentPropsWithoutRef, FC } from "react"
import { cva, VariantProps } from "class-variance-authority"
import Image from "next/image"
import { twMerge } from "tailwind-merge"
import StructuredText from "@components/StructuredText"

export interface FeatureCardProps
  extends VariantProps<typeof wrapper>,
    Clean<FeatureCardFragment>,
    ComponentPropsWithoutRef<"div"> {
  color: "purple" | "green" | "lightPurple" | "lightGreen"
}

const wrapper = cva(["card", "grid", "gap-2", "gradient-radial-mono"], {
  variants: {
    active: {
      true: ["lg:shadow-standard lg:border-gradient-primary"],
    },
  },
})
const featureStyles = cva(["text-3xl pl-3 border-l-3 pb-2"], {
  variants: {
    color: {
      purple: ["border-purple-500"],
      green: ["border-primary-600"],
      lightPurple: ["border-purple-100"],
      lightGreen: ["border-primary-100"],
    },
  },
})

export const FeatureCard: FC<FeatureCardProps> = ({
  active,
  color,
  body,
  heading,
  image,
  ...props
}) => {
  return (
    <>
      {image && (
        <Image
          src={image.url}
          alt={image.alt || ""}
          width={500}
          height={500}
          className="mx-auto lg:hidden"
          priority
        />
      )}
      <div className={twMerge(wrapper({ active }))} {...props}>
        <h3 className={twMerge(featureStyles({ color }))}>{heading}</h3>
        {body && <StructuredText data={body} />}
      </div>
    </>
  )
}
