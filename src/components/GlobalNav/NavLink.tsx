import { Dispatch, FC, HTMLAttributes, SetStateAction } from "react"
import { twMerge } from "tailwind-merge"
import Link from "@molecules/Link"

interface NavLinkProps extends HTMLAttributes<HTMLLIElement>, Omit<ButtonFragment, "id"> {
  setOpen: Dispatch<SetStateAction<boolean>>
}

const styles = [
  "w-full",
  "py-5",
  "text-center text-4xl sm:text-5xl font-bold",
  "text-purple-900 hover:text-gray-200 dark:text-common-white",
  "hover:bg-primary-500 dark:hover:bg-purple-700",
]

const NavLink: FC<NavLinkProps> = ({ url, label, setOpen, className }) => {
  return (
    <li className="flex w-full items-center" onClick={() => setOpen(false)}>
      <Link className={twMerge(styles, className)} href={url || ""}>
        {label}
      </Link>
    </li>
  )
}
export default NavLink
