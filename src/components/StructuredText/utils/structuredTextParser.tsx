import { StructuredText, StructuredTextGraphQlResponse } from "react-datocms"
import { code, strong } from "@components/StructuredText/utils/customMarks"
import {
  blockQuote,
  codeBlock,
  heading,
  link,
  list,
  listItem,
  paragraph,
} from "@components/StructuredText/utils/customNodes"
import inlineBlocks from "@components/StructuredText/utils/inlineBlocks"
import inlineRecords, { InlineRecords } from "@components/StructuredText/utils/inlineRecords"

export type StructuredData = StructuredTextGraphQlResponse | Record<string, unknown> | null

// TODO write tests

const structuredTextParser = (data?: StructuredData) => {
  if (data?.value) {
    return (
      <StructuredText
        data={data as Omit<StructuredTextGraphQlResponse, "links">}
        customNodeRules={[blockQuote, codeBlock, heading, link, list, listItem, paragraph]}
        customMarkRules={[strong, code]}
        renderInlineRecord={({ record }) => inlineRecords(data, record as InlineRecords)}
        renderBlock={({ record }) => inlineBlocks(record)}
      />
    )
  }
}

export default structuredTextParser
