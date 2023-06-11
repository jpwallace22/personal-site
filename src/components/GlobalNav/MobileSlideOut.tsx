"use client"

import { AnimatePresence, motion, MotionConfig } from "framer-motion"
import { twMerge } from "tailwind-merge"
import Burger from "@components/GlobalNav/Burger"
import NavMenu from "@components/GlobalNav/NavMenu"
import useOpenState from "@utils/hooks/useOpenState"
import type { ComponentPropsWithoutRef, FC } from "react"

const styles = {
  common: ["will-change-transform", "bg-gray-200/95", "dark:bg-purple-800/95", "-ml-4", "sm:-ml-6"],
  tab: ["w-fit", "py-3", "pl-6", "pr-4", "rounded-r-lg", "text-common-white", "sm:pl-7", "cursor-pointer"],
  box: ["absolute", "top-0", "h-screen-dvh", "w-[71vw]"],
  burger: ["text-primary-900", "dark:text-common-white"],
}

interface MobileSlideOutProps extends ComponentPropsWithoutRef<"div"> {
  logo?: Maybe<ImageFragment>
  links?: GlobalNavFragment["links"]
}

const MobileSlideOut: FC<MobileSlideOutProps> = ({ logo, links, ...props }) => {
  const { ref, open, setOpen } = useOpenState<HTMLDivElement>(false)
  const duration = 0.3
  const delay = 0.1
  const ease = "easeInOut"
  const slideDistance = "70vw"

  const tabVariants = {
    active: {
      translateX: slideDistance,
    },
    inactive: {
      translateX: 0,
      transition: { duration, delay },
    },
  }

  const spring = {
    type: "spring",
    damping: 15,
    stiffness: 100,
  }

  return (
    <div ref={ref} {...props}>
      <MotionConfig transition={{ duration }}>
        <motion.div
          initial={{ translateX: 0 }}
          animate={open ? "active" : "inactive"}
          variants={tabVariants}
          transition={{ ...spring }}
          className={twMerge(styles.common, styles.tab)}
          onClick={() => setOpen((prev) => !prev)}
        >
          <Burger open={open} className={twMerge(styles.burger)} />
        </motion.div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: slideDistance }}
              exit={{
                width: 0,
                transition: { ease, delay },
              }}
              transition={{ ...spring }}
              className={twMerge(styles.common, styles.box)}
            >
              <motion.div
                initial={{ translateY: "-100%", opacity: 0 }}
                animate={{ translateY: 0, rotate: 0, opacity: 1 }}
                exit={{ translateY: "-100%", opacity: 0, transition: { ease } }}
                transition={{ ...spring, delay }}
                className="h-full w-full"
              >
                <NavMenu logo={logo} links={links} setOpen={setOpen} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </MotionConfig>
    </div>
  )
}

export default MobileSlideOut
