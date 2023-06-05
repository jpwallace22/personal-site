"use client"

import { Dispatch, FC, HTMLAttributes, SetStateAction } from "react"
import Image from "next/image"
import { twMerge } from "tailwind-merge"
import Icon from "@molecules/Icon"
import Link from "@molecules/Link"
import Socials from "@molecules/Socials"
import Switch from "@molecules/Switch"
import useDarkMode from "@utils/hooks/useDarkMode"

export interface NavMenuProps extends HTMLAttributes<HTMLDivElement> {
  logo?: Maybe<ImageFragment>
  links?: GlobalNavFragment["links"]
  setOpen?: Dispatch<SetStateAction<boolean>>
}

const styles = {
  wrapper: [
    "py-8 lg:py-5",
    "w-full h-screen-dvh lg:h-fit",
    "flex items-center flex-col justify-around lg:flex-row-reverse lg:justify-start lg:gap-8",
  ],
  list: ["w-full lg:w-fit", "lg:px-8", "flex", "flex-col lg:flex-row lg:justify-end lg:gap-6"],
  switch: ["flex items-center gap-2", "text-purple-900 dark:text-gray-200"],
  navLink: [
    "w-full lg:w-fit",
    "py-5 lg:py-0",
    "text-center text-4xl sm:text-5xl font-bold lg:text-2xl lg:font-thin",
    "text-purple-900 hover:text-gray-200 dark:text-common-white lg:hover:dark:text-primary-500 lg:hover:text-purple-600",
    "hover:bg-primary-500 dark:hover:bg-purple-700 lg:hover:bg-transparent lg:hover:dark:bg-transparent",
    "lg:underline-animation",
  ],
}

const NavMenu: FC<NavMenuProps> = ({ logo, links, setOpen, className }) => {
  const [isDark, toggleDarkMode] = useDarkMode()
  const iconSize = 32
  const handleClick = () => {
    if (setOpen) {
      setOpen(false)
    }
  }

  return (
    <div className={twMerge(styles.wrapper, className)}>
      {logo && (
        <Link href="/" onClick={handleClick} className="mb-5">
          <Image src={logo?.url} width={200} height={200} alt={logo.alt || ""} />
        </Link>
      )}
      <div className={twMerge(styles.switch)}>
        <Icon id="moon" size={iconSize} />
        <Switch size="lg" id="dark-mode" checked={!isDark} onCheckedChange={toggleDarkMode} />
        <Icon id="sun" size={iconSize} />
      </div>
      <ul className={twMerge(styles.list)}>
        {links?.map((link) => (
          <li key={link.id} className="flex w-full items-center" onClick={handleClick}>
            <Link className={twMerge(styles.navLink)} href={link.url || ""}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <Socials size="md" className="lg:hidden" />
    </div>
  )
}

export default NavMenu
