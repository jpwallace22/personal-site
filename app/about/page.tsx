import { Metadata } from "next"
import FeatureHighlight from "@components/FeatureHighlight"
import Footer from "@components/Footer"
import { aboutBody, aboutHeading, featureCards } from "src/content/about"
import renderMetadata from "src/template/renderMetadata"

export const metadata: Metadata = renderMetadata({
  path: "/about",
  seo: {
    title: "About",
    description:
      "Software engineer, ex-Navy, former van dweller and rock climber. The short version of how Justin Wallace got from a 13-year military career to building for the web.",
  },
})

const About = () => (
  <>
    <FeatureHighlight headingAs="h1" heading={aboutHeading} body={aboutBody} cards={featureCards} />
    <Footer />
  </>
)

export default About
