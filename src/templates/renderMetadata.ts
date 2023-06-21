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

const renderMetadata = (slug?: Maybe<string>, seo?: Maybe<SEO>): Metadata => {
  const description =
    seo?.description ||
    "The personal site and portfolio of Justin Wallace the Software Engineer. Here I showcase some projects and the progress of my career. I also write about dev-related experiences."
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

export default renderMetadata
