import { Metadata } from "next"
import FeatureHighlight from "@components/FeatureHighlight"
import Footer from "@components/Footer"
import { aboutBody, aboutHeading, featureCards } from "src/content/about"
import renderMetadata from "src/template/renderMetadata"

export const metadata: Metadata = renderMetadata("about")

const About = () => (
  <>
    <FeatureHighlight heading={aboutHeading} body={aboutBody} cards={featureCards} />
    <Footer />
  </>
)

export default About
