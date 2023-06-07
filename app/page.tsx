import { Metadata } from "next"
import StaticHero from "@components/Hero/StaticHero"
import Page from "src/templates/page"

export const metadata: Metadata = {
  title: {
    default: "Justin Wallace Development",
    template: "%s | Justin Wallace Development",
  },
}

const NextPage = async () => {
  return (
    <>
      <StaticHero />
      <Page slug="home" />
    </>
  )
}

export default NextPage
