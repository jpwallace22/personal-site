"use client"

import { HTMLMotionProps, motion } from "framer-motion"
import type { FC } from "react"

interface SlideInProps extends HTMLMotionProps<"div"> {
  from?: "left" | "right"
}

export const SlideIn: FC<SlideInProps> = ({ children, from = "left" }) => (
  <motion.div
    whileInView={{ x: 0, opacity: 1 }}
    initial={{ x: from === "left" ? -100 : 100, opacity: 0 }}
    transition={{ x: { type: "spring", duration: 1.5, bounce: 0.3 }, opacity: { duration: 1 } }}
    viewport={{ once: true }}
    className="relative left-0 right-0"
  >
    {children}
  </motion.div>
)