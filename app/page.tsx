import { Metadata } from "next"
import Footer from "@components/Footer"
import StaticHero from "@components/Hero/StaticHero"
import Page from "src/templates/page"
import renderMetadata from "src/templates/renderMetadata"

export const metadata: Metadata = renderMetadata()

const NextPage = async () => {
  return (
    <>
      <StaticHero />
      <Page slug="home" />
      <Footer full />
    </>
  )
}

export default NextPage
