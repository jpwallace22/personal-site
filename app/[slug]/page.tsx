import { StpTestQuery } from "@codegen/sdk"
import Section from "@molecules/Section"
import StructuredText from "@components/StructuredText"
import makeServerQuery from "@utils/makeServerQuery"

type Props = {
  params: {
    slug?: string
  }
}

const Page = async ({ params: { slug } }: Props) => {
  const { blogPost: body } = await makeServerQuery<StpTestQuery>(StpTestQuery)

  return (
    <>
      <Section>
        <h1>page</h1>
      </Section>
      <Section>
        <StructuredText data={body?.body} />
      </Section>
    </>
  )
}

export default Page
