import { FC } from "react"
import LogoBar from "@components/TrustBar/LogoBar"
import { getTrustedCompanies } from "src/content"

interface TrustBarProps {}

const Root: FC<TrustBarProps> = async () => {
  const allCompanies = getTrustedCompanies()

  return (
    <div className="grid gap-4">
      <h4 className="eyebrow text-center text-xl">A couple companies running my code</h4>
      <LogoBar companies={allCompanies} />
    </div>
  )
}

export default Root
