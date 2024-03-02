import { FC } from "react"
import { GetTrustedCompaniesQuery } from "@codegen/sdk"
import LogoBar from "@components/TrustBar/LogoBar"
import makeServerQuery from "@utils/makeServerQuery"

interface TrustBarProps {}

const Root: FC<TrustBarProps> = async () => {
  const { allCompanies } = await makeServerQuery<GetTrustedCompaniesQuery>(GetTrustedCompaniesQuery)

  return (
    <div className="grid gap-4">
      <h4 className="eyebrow text-center text-xl">A couple companies running my code</h4>
      <LogoBar companies={allCompanies} />
    </div>
  )
}

export default Root
