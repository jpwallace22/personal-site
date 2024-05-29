"use client"

import { motion } from "framer-motion"
import { twMerge } from "tailwind-merge"
import type { ComponentPropsWithoutRef, FC } from "react"

interface SlideInProps extends ComponentPropsWithoutRef<"div"> {
  from?: "left" | "right"
}

export const SlideIn: FC<SlideInProps> = ({ children, from = "left", className }) => (
  <motion.div
    whileInView={{ x: 0, opacity: 1 }}
    initial={{ x: from === "left" ? -100 : 100, opacity: 0 }}
    transition={{ x: { type: "spring", duration: 1.5, bounce: 0.3 }, opacity: { duration: 1 } }}
    viewport={{ once: true }}
    className={twMerge("relative left-0 right-0", className)}
  >
    {children}
  </motion.div>
)
