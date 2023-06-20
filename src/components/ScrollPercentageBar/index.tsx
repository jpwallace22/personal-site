"use client"

import { useState } from "react"
import { motion, useScroll } from "framer-motion"

const ScrollPercentageBar = () => {
  const [hidden, setHidden] = useState(true)
  const { scrollYProgress } = useScroll()

  // hiding bar until user scrolls 3% since using sticky (can't use transform on fixed)
  scrollYProgress.on("change", (latest) => {
    if (latest > 0.03) {
      setHidden(false)
    } else {
      setHidden(true)
    }
  })

  return (
    !hidden && (
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="sticky top-0 z-10 h-2 rounded-xl bg-primary-600"
      />
    )
  )
}

export default ScrollPercentageBar
