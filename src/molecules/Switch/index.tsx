"use client"

import { FC, ReactNode } from "react"
import * as Radix from "@radix-ui/react-switch"
import { cva, VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"

interface SwitchProps extends VariantProps<typeof switchBase>, Radix.SwitchProps {
  label?: ReactNode
}

const defaultVariants = {
  variant: "primary",
  size: "md",
} as const

const switchBase = cva(
  [
    "duration-200 ease-in-out",
    "relative inline-flex flex-shrink-0 cursor-pointer rounded-full",
    "transition-colors",
  ],
  {
    variants: {
      variant: {
        primary: [
          "data-[state=checked]:bg-purple-600 data-[state=checked]:dark:bg-primary-500",
          "data-[state=unchecked]:bg-gray-200 data-[state=unchecked]:dark:bg-gray-700",
          "border-2 border-transparent",
        ],
      },
      size: {
        md: ["h-[24px]", "w-[44px]"],
        lg: ["h-[28px]", "w-[52px]"],
      },
    },
    defaultVariants,
  }
)

const switchThumb = cva(
  [
    "data-[state=unchecked]:translate-x-0",
    "duration-200 ease-in-out transition",
    "pointer-events-none inline-block transform rounded-full ring-0",
  ],
  {
    variants: {
      variant: {
        primary: ["bg-common-white shadow-lg"],
      },
      size: {
        md: ["h-[20px] w-[20px]", "data-[state=checked]:translate-x-5"],
        lg: ["h-[24px] w-[24px]", "data-[state=checked]:translate-x-6"],
      },
    },
    defaultVariants,
  }
)

const switchLabel = cva(["mr-3"], {
  variants: {
    variant: {
      primary: ["font-bold"],
    },
    size: {
      md: ["text-base"],
      lg: ["text-lg"],
    },
  },
  defaultVariants,
})

const Switch: FC<SwitchProps> = ({ variant, size, id, label, className, ...props }) => (
  <div className="flex items-center">
    {label && (
      <label className={switchLabel({ variant, size })} htmlFor={id}>
        {label}
      </label>
    )}
    <Radix.Root className={twMerge(switchBase({ variant, size, className }))} id={id} {...props}>
      <Radix.Thumb className={switchThumb({ variant, size })} />
    </Radix.Root>
  </div>
)

export default Switch
