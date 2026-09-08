import { getPageSlugs } from "src/content"
import Page from "src/template/Page"

type Params = {
  params: {
    slug?: string
  }
}

export const generateStaticParams = async () => {
  return getPageSlugs().map(({ slug }) => ({ slug }))
}

const NextPage = async ({ params: { slug } }: Params) => {
  return <Page slug={slug} />
}

export default NextPage
