import { Dispatch, FC, SetStateAction } from "react"
import Image from "next/image"
import { twMerge } from "tailwind-merge"
import Icon from "@molecules/Icon"
import Link from "@molecules/Link"
import Socials from "@molecules/Socials"
import Switch from "@molecules/Switch"
import useDarkMode from "@utils/hooks/useDarkMode"

export interface NavMenuProps {
  logo?: Maybe<ImageFragment>
  links?: GlobalNavFragment["links"]
  setOpen: Dispatch<SetStateAction<boolean>>
}

const styles = {
  wrapper: ["py-8", "w-full h-screen-dvh", "flex items-center flex-col justify-around"],
  list: ["w-full", "flex", "flex-col"],
  switch: ["flex items-center gap-2", "text-purple-900 dark:text-gray-200"],
  navLink: [
    "w-full",
    "py-5",
    "text-center text-4xl sm:text-5xl font-bold",
    "text-purple-900 hover:text-gray-200 dark:text-common-white",
    "hover:bg-primary-500 dark:hover:bg-purple-700",
  ],
}

const NavMenu: FC<NavMenuProps> = ({ logo, links, setOpen }) => {
  const [isDark, toggleDarkMode] = useDarkMode()
  const iconSize = 32

  return (
    <div className={twMerge(styles.wrapper)}>
      {logo && (
        <Link href="/" onClick={() => setOpen(false)} className="mb-5">
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
          <li key={link.id} className="flex w-full items-center" onClick={() => setOpen(false)}>
            <Link className={twMerge(styles.navLink)} href={link.url || ""}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <Socials size="md" />
    </div>
  )
}

export default NavMenu
