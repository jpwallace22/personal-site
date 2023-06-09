import Footer from "@components/Footer"
import StaticHero from "@components/Hero/StaticHero"
import Page from "src/template/Page"

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
