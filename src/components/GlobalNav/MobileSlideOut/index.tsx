"use client"

import { FC } from "react"
import { cva, VariantProps } from "class-variance-authority"
import { AnimatePresence, motion } from "framer-motion"
import { twMerge } from "tailwind-merge"
import Burger from "@components/GlobalNav/Burger"
import useOpenState from "@utils/hooks/useOpenState"

const tab = cva([
  "-ml-4 w-fit py-3 pl-6 pr-4 rounded-r-lg",
  "text-common-white  bg-primary-500 dark:bg-purple-800/50 backdrop-blur-md",
  "sm:-ml-6 sm:pl-7",
  "cursor-pointer",
])

const box = cva([
  "absolute top-0 h-screen w-[85vw] will-change-transform",
  "bg-primary-500 dark:bg-purple-800/50",
  "backdrop-blur-md",
])

type MobileSlideOutProps = VariantProps<typeof box>

const MobileSlideOut: FC<MobileSlideOutProps> = () => {
  const { ref, open, setOpen } = useOpenState<HTMLDivElement>(false)
  const transitionSpeed = 0.3

  return (
    <div ref={ref}>
      <motion.div
        initial={{ translateX: 0 }}
        animate={{ translateX: open ? "70vw" : undefined }}
        transition={{ duration: transitionSpeed }}
        className={twMerge(tab())}
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
            transition={{ duration: transitionSpeed }}
            className={twMerge(box())}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default MobileSlideOut
