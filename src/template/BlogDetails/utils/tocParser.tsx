import { isHeading } from "datocms-structured-text-utils"
import { Heading } from "datocms-structured-text-utils"
import { renderNodeRule, StructuredText } from "react-datocms"
import Link from "@molecules/Link"
import headingToId from "@components/StructuredText/utils/headingToId"
import { StructuredData } from "@components/StructuredText/utils/structuredTextParser"

export type TocData = StructuredData & {
  value: {
    document: {
      children: Heading[]
    }
  }
}

const tocParser = (data?: TocData, slug?: string | null) => {
  if (data?.value) {
    const onlyHeadings = {
      value: {
        schema: "dast",
        document: {
          type: "root",
          children: data.value.document.children.filter((node: Heading) => node.type === "heading"),
        },
      },
    } as const

    return (
      <StructuredText
        data={onlyHeadings}
        customNodeRules={[
          renderNodeRule(isHeading, ({ node, children, key }) => (
            <Link key={key} href={`/blog/${slug}#${headingToId(node)}`}>
              <div className="hover:border-gradient-primary rounded-lg bg-transparent p-4 hover:bg-gray-50 hover:dark:bg-purple-900">
                <span>{children}</span>
              </div>
            </Link>
          )),
        ]}
      />
    )
  }
}

export default tocParser
