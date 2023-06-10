"use client"

import { HTMLMotionProps, motion } from "framer-motion"
import type { FC } from "react"

interface FadeInProps extends HTMLMotionProps<"div"> {
  delay?: number
}

export const FadeIn: FC<FadeInProps> = ({ children, delay }) => (
  <motion.div
    whileInView={{ opacity: 1, translateY: 0 }}
    initial={{ opacity: 0.1, translateY: 150 }}
    transition={{ duration: 0.7, delay }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
)
