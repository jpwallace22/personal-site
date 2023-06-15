import { ComponentPropsWithoutRef, FC } from "react"
import Image from "next/image"
import { twMerge } from "tailwind-merge"
import Link from "@molecules/Link"

interface AuthorProps extends PersonFragment, Omit<ComponentPropsWithoutRef<"div">, "role"> {}

const Author: FC<AuthorProps> = ({
  firstName,
  lastName,
  thumbnail,
  company,
  role,
  website,
  className,
}) => {
  const name = `${firstName} ${lastName}`.trim() // remove space if no first name
  const image = thumbnail || company?.logo
  const altText = thumbnail?.alt || name

  return (
    <Link
      rel="author"
      href={website || ""}
      className="transition-all duration-300 hover:brightness-110"
    >
      <div className={twMerge("flex flex-row items-center gap-4", className)}>
        {image && (
          <Image src={image.url} alt={altText} width={80} height={80} className="rounded-full" />
        )}
        <div className="flex flex-col text-purple-900 dark:text-common-white">
          {name && <span className="font-bold">{name}</span>}
          {role && (
            <span className="text-lg">
              {role}
              {company?.name && ` • ${company.name}`}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}

export default Author
