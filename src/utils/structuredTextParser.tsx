import { isBlockquote, isHeading, isLink, isList, isParagraph, Record as NodeType } from "datocms-structured-text-utils"
import Image from "next/image"
import { renderMarkRule, renderNodeRule, StructuredText, StructuredTextGraphQlResponse } from "react-datocms"
import Link from "@molecules/Link"

export type StructuredData = StructuredTextGraphQlResponse | Record<string, unknown> | null

// TODO create codeblock
// TODO write tests

const structuredTextParser = (data?: StructuredData) => {
  if (data?.value) {
    return (
      <StructuredText
        data={data as StructuredTextGraphQlResponse}
        customNodeRules={[
          renderNodeRule(isHeading, ({ node, children, key }) => {
            const Component = `h${node.level}` as const
            return (
              <Component key={key} className="mt-8">
                {children}
              </Component>
            )
          }),
          renderNodeRule(isList, ({ node, children, key }) =>
            node.style === "bulleted" ? (
              <ul key={key} className="ml-7 list-disc">
                {children}
              </ul>
            ) : (
              <ol key={key} className="ml-8 list-decimal">
                {children}
              </ol>
            )
          ),
          renderNodeRule(isLink, ({ node, children, key }) => (
            <Link key={key} href={node.url} variant="inline">
              {children}
            </Link>
          )),
          renderNodeRule(isBlockquote, ({ node: _, children, key }) => <div key={key}>{children}</div>),
          renderNodeRule(isParagraph, ({ children, key }) => <p key={key}>{children}</p>),
        ]}
        customMarkRules={[
          renderMarkRule("strong", ({ children, key }) => <strong key={key}>{children}</strong>),
          renderMarkRule("code", ({ children, key }) => (
            <span
              key={key}
              className="border-gradient-primary mx-1 whitespace-nowrap rounded-md bg-gray-100 px-2 py-1 font-mono text-common-black dark:bg-purple-800 dark:text-common-white"
            >
              {children}
            </span>
          )),
        ]}
        renderBlock={({ record }) => {
          record = record.media as NodeType
          switch (record.__typename) {
            case "FileField":
              return (
                <div>
                  <Image
                    className="mx-auto"
                    src={record.url as string}
                    alt={(record.alt as string) || ""}
                    width={record.width as number}
                    height={record.height as number}
                  />
                  {typeof record?.title === "string" && <div className="text-center text-base">{record?.title}</div>}
                </div>
              )
            default:
              return null
          }
        }}
      />
    )
  }
}

export default structuredTextParser
