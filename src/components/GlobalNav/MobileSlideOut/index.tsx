"use client"

import { FC } from "react"
import { cva, VariantProps } from "class-variance-authority"
import { AnimatePresence, motion } from "framer-motion"
import { twMerge } from "tailwind-merge"
import Burger from "@components/GlobalNav/Burger"
import useOpenState from "@utils/hooks/useOpenState"

const hamburger = cva([
  "-ml-4 w-fit py-3 pl-6 pr-4 rounded-r-lg",
  "text-common-white  bg-primary-500 dark:bg-purple-800/50 backdrop-blur-md",
  "sm:-ml-6 sm:pl-7",
  "cursor-pointer",
])

const slide = cva([
  "absolute top-0 h-screen w-[85vw] will-change-transform",
  "bg-primary-500 dark:bg-purple-800/50",
  "backdrop-blur-md",
])

type HamburgerProps = VariantProps<typeof slide>

const Hamburger: FC<HamburgerProps> = () => {
  const { ref, open, setOpen } = useOpenState<HTMLDivElement>(false)

  return (
    <div ref={ref}>
      <motion.div
        initial={{ translateX: 0 }}
        animate={{ translateX: open ? "70vw" : undefined }}
        transition={{ duration: 0.3 }}
        className={twMerge(hamburger())}
        onClick={() => setOpen((prev) => !prev)}
      >
        <Burger open={open} />
      </motion.div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ translateX: "-85vw" }}
            animate={{ translateX: "-18vw" }}
            exit={{ translateX: "-85vw" }}
            transition={{ duration: 0.3 }}
            className={twMerge(slide())}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default Hamburger
