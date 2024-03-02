"use client"

import { FC } from "react"
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
      className="mb-16"
      speed={50}
    >
      <div className="mr-16 flex gap-16">
        {companies?.map((company) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={company?.name}
            src={company.logo?.url || ""}
            alt=""
            width={200}
            height={50}
            className="h-12 w-auto max-w-xs brightness-50 grayscale dark:invert"
          />
        ))}
      </div>
    </Marquee>
  )
}

export default LogoBar
