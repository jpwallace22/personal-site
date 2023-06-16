"use client"

import { HTMLMotionProps, motion } from "framer-motion"
import type { FC } from "react"

interface FadeInProps extends HTMLMotionProps<"div"> {
  delay?: number
}

export const FadeIn: FC<FadeInProps> = ({ children, ...props }) => (
  <motion.div
    whileInView={{ opacity: 1, translateY: 0 }}
    initial={{ opacity: 0, translateY: 100 }}
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
