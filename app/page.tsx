import Footer from "@components/Footer"
import StaticHero from "@components/Hero/StaticHero"
import TrustBar from "@components/TrustBar"
import Page from "src/template/Page"

const NextPage = async () => {
  return (
    <>
      <StaticHero />
      <TrustBar />
      <Page slug="home" />
      <Footer full />
    </>
  )
}

export default NextPage
