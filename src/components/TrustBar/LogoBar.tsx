"use client"

import { FC } from "react"
import Image from "next/image"
import Marquee from "react-fast-marquee"
import useDarkMode from "@utils/hooks/useDarkMode"

interface LogoBarProps {
  companies?: GetTrustedCompaniesQuery["allCompanies"]
}

const LogoBar: FC<LogoBarProps> = ({ companies }) => {
  const [isDark] = useDarkMode()
  return (
    <Marquee
      gradient
      gradientColor={isDark ? "var(--purple-950)" : ""}
      className="mb-16 opacity-70"
      speed={30}
    >
      <div className="mr-16 flex gap-16">
        {companies?.slice(0, 6).map((company) => (
          <Image
            key={company.name}
            src={company.logo?.url || ""}
            alt=""
            width={200}
            height={50}
            className="h-12 w-auto brightness-0 dark:grayscale dark:invert"
          />
        ))}
      </div>
    </Marquee>
  )
}

export default LogoBar
