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
      <div className="mr-8 flex gap-8 lg:mr-16 lg:gap-16">
        {companies?.map(
          (company) =>
            company?.logo?.url && (
              // eslint-disable-next-line @next/next/no-img-element -- next/image lazy loading loads poorly in marquee
              <img
                key={company?.name}
                src={company.logo.url}
                alt={company.name || ""}
                width={200}
                height={50}
                className="h-8 w-auto max-w-[200px] brightness-50 grayscale dark:invert lg:h-12 lg:max-w-xs"
              />
            )
        )}
      </div>
    </Marquee>
  )
}

export default LogoBar
