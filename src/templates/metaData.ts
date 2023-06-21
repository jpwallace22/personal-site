import { Metadata } from "next"

interface SEO {
  __typename?: "SeoField"
  description?: Maybe<string>
  title?: Maybe<string>
  image?: Maybe<
    {
      __typename?: "FileField"
    } & ImageFragment
  >
}

const metaData = (slug?: Maybe<string>, seo?: Maybe<SEO>): Metadata => {
  const description =
    seo?.description ||
    "This is the personal site and portfolio of Justin Wallace. Here I showcase some works and the progress of my career. I also write about dev-related experiences."
  const title = seo?.title || "Justin Wallace | Software Engineer"
  const images = [seo?.image?.url || "https://www.datocms-assets.com/85391/1670693320-jwdev.webp"]
  const url = `https://www.justinwallace.dev/${slug || ""}`

  return {
    title,
    description,
    openGraph: {
      images,
      description,
      title,
      url,
    },
  }
}

export default metaData
