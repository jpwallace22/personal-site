"use client"

import { HTMLMotionProps, motion } from "framer-motion"
import type { FC } from "react"

interface FadeInProps extends HTMLMotionProps<"div"> {
  animated?: boolean
}

export const FadeIn: FC<FadeInProps> = ({ children, animated = true, ...props }) => {
  const slideDistance = animated ? 100 : 0

  return (
    <motion.div
      whileInView={{ opacity: 1, translateY: 0 }}
      initial={{ opacity: 0, translateY: slideDistance }}
      transition={{
        translateY: { type: "spring", duration: 1, bounce: 0.3 },
        opacity: { duration: 0.8 },
      }}
      viewport={{ once: true }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
