import { Children, ReactElement } from "react"
import {
  isBlockquote,
  isCode,
  isHeading,
  isLink,
  isList,
  isListItem,
  isParagraph,
  Record as NodeType,
} from "datocms-structured-text-utils"
import dynamic from "next/dynamic"
import {
  RenderInlineRecordContext,
  renderMarkRule,
  renderNodeRule,
  StructuredText,
  StructuredTextGraphQlResponse,
} from "react-datocms"
import Button, { ButtonProps } from "@molecules/Button"

const Icon = dynamic(() => import("@molecules/Icon"))
const Image = dynamic(() => import("next/image"))
const CodeBlock = dynamic(() => import("@molecules/CodeBlock"))
const Link = dynamic(() => import("@molecules/Link"))

type MakeInline<T, TN> = T & {
  __typename: TN
  id: string
  [prop: string]: unknown
}

type InlineRecords = MakeInline<ButtonProps, "ButtonRecord">
export type StructuredData = StructuredTextGraphQlResponse | Record<string, unknown> | null

// TODO write tests

const structuredTextParser = (data?: StructuredData) => {
  const { wrapButtons, firstButton, secondButton, skipId } = buttonWrapper(data?.links as InlineRecords[])

  if (data?.value) {
    return (
      <StructuredText
        data={data as Omit<StructuredTextGraphQlResponse, "links">}
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
              <ul key={key} className="ml-3">
                {Children.map(children, (child) => {
                  return (
                    <li className="flex items-center gap-4">
                      <Icon
                        id="check"
                        size={16}
                        className="mt-3 flex-shrink-0 self-start text-purple-400 dark:text-primary-500"
                      />
                      {child}
                    </li>
                  )
                })}
              </ul>
            ) : (
              <ol key={key} className="ml-8 list-decimal">
                {Children.map(children, (child) => {
                  return <li className="pl-4">{child}</li>
                })}
              </ol>
            )
          ),
          renderNodeRule(isListItem, ({ node: _, children, key }) => (
            <div key={key} className="mb-3">
              {children}
            </div>
          )),
          renderNodeRule(isLink, ({ node, children, key }) => (
            <Link key={key} href={node.url} variant="inline">
              {children}
            </Link>
          )),
          renderNodeRule(isCode, ({ node, children: _, key }) => <CodeBlock key={key} node={node} />),
          renderNodeRule(isBlockquote, ({ node: _, children, key }) => <div key={key}>{children}</div>),
          renderNodeRule(isParagraph, ({ children, key }) => {
            // prevents linked items from being wrapped in a <p> tag
            const nodeData = children && (children[0] as ReactElement)
            const isText = nodeData?.props.children && typeof nodeData.props.children[0] === "string"

            return isText ? <p key={key}>{children}</p> : <div key={key}>{children}</div>
          }),
        ]}
        customMarkRules={[
          renderMarkRule("strong", ({ children, key }) => <strong key={key}>{children}</strong>),
          renderMarkRule("code", ({ children, key }) => (
            <span
              key={key}
              className="border-gradient-primary mx-1 whitespace-nowrap rounded-md bg-gray-100 px-2 py-1 font-mono text-base text-common-black dark:bg-purple-800 dark:text-common-white"
            >
              {children}
            </span>
          )),
        ]}
        renderInlineRecord={({ record }: RenderInlineRecordContext<InlineRecords>) => {
          switch (record.__typename) {
            case "ButtonRecord":
              if (skipId === record.id) {
                return null
              }
              if (wrapButtons) {
                return (
                  <div className="flex flex-col gap-6 sm:flex-row">
                    <Button {...firstButton} />
                    <Button {...secondButton} />
                  </div>
                )
              }

              return <Button {...record} />
            default:
              return null
          }
        }}
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

const buttonWrapper = (arr: InlineRecords[]) => {
  const defaultReturn = {
    wrapButtons: false as const,
    firstButton: undefined,
    secondButton: undefined,
    skipId: undefined,
  }

  if (!arr) {
    return defaultReturn
  }

  for (let i = 0; i < arr.length; i++) {
    const firstButton = arr[i]
    const secondButton = arr[i + 1]
    if (
      firstButton &&
      secondButton &&
      firstButton.__typename === "ButtonRecord" &&
      secondButton.__typename === "ButtonRecord"
    ) {
      return {
        wrapButtons: true as const,
        firstButton,
        secondButton,
        skipId: secondButton.id,
      }
    }
  }

  return defaultReturn
}

export default structuredTextParser
