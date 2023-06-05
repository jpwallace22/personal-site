import { StpTestQuery } from "@codegen/sdk"
import Section from "@molecules/Section"
import StructuredText from "@molecules/StructuredText"
import makeServerQuery from "src/graphql/makeServerQuery"

const Page = async () => {
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
