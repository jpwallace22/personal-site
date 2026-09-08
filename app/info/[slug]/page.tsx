import { getInfoSlugs } from "src/content"
import Info from "src/template/Info"

type Params = {
  params: {
    slug?: string
  }
}

export const generateStaticParams = async () => {
  return getInfoSlugs().map(({ slug }) => ({ slug }))
}

const InfoPage = ({ params: { slug } }: Params) => {
  return <Info slug={slug} />
}

export default InfoPage
