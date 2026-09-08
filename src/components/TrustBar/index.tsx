import { FC } from "react"
import LogoBar from "@components/TrustBar/LogoBar"
import { companies } from "src/content/site"

interface TrustBarProps {}

const Root: FC<TrustBarProps> = async () => {
  return (
    <div className="grid gap-4">
      <h4 className="eyebrow text-center text-xl">A couple companies running my code</h4>
      <LogoBar companies={companies} />
    </div>
  )
}

export default Root
