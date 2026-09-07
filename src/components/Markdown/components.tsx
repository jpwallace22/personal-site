import { Children, Fragment, isValidElement, type ReactNode } from "react"
import Image from "next/image"
import Button, { type ButtonProps } from "@molecules/Button"
import CodeBlock from "@molecules/CodeBlock"
import Icon from "@molecules/Icon"
import Link from "@molecules/Link"
import ContentHeading from "@components/Markdown/ContentHeading"
import headingToId from "@components/Markdown/headingToId"

/**
 * Element map for content MDX.
 *
 * These reproduce the markup the DatoCMS structured-text renderer produced, so
 * the rendered pages are unchanged. A few of the shapes are unusual for MDX --
 * list items wrap their content in a div, paragraphs sometimes render as a div
 * -- and those are deliberate; see the notes on each.
 */

/** MDX puts whitespace text nodes between block children; they are not content. */
const blockChildren = (children: ReactNode) =>
  Children.toArray(children).filter((child) => !(typeof child === "string" && !child.trim()))

/**
 * Paragraphs opening with marked-up content rendered as a div rather than a p,
 * so that linked records were never nested inside a paragraph. Keyed off the
 * same condition as before: does the paragraph start with plain text?
 */
const Paragraph = ({ children }: { children?: ReactNode }) => {
  const [first] = Children.toArray(children)
  return typeof first === "string" ? <p>{children}</p> : <div>{children}</div>
}

/** Inline code. Written as <Code> by the converter wherever a mark combination
 *  could not be expressed as markdown backticks. */
const Code = ({ children }: { children?: ReactNode }) => (
  <span className="border-gradient-primary mx-1 whitespace-nowrap rounded-md bg-gray-100 px-2 py-1 font-mono text-base text-common-black dark:bg-purple-800 dark:text-common-white">
    {children}
  </span>
)
Code.inline = true

const BLOCK_TAGS = new Set([
  "div",
  "p",
  "ul",
  "ol",
  "pre",
  "blockquote",
  "figure",
  "table",
  "hr",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
])

/** Block children are this map's components (bar the inline-tagged ones) plus
 *  any literal block tag the converter wrote. */
const isBlockChild = (child: ReactNode) => {
  if (!isValidElement(child)) return false
  if (typeof child.type === "string") return BLOCK_TAGS.has(child.type)
  return !(child.type as { inline?: boolean }).inline
}

/**
 * The former listItem rule: content wrapped in a spacing div, no <li> of its own.
 *
 * DAST list items always held paragraphs. Markdown only produces them for loose
 * lists, so a tight item's leading inline run is wrapped here to match.
 */
const ListItem = ({ children }: { children?: ReactNode }) => {
  const kids = blockChildren(children)
  const firstBlock = kids.findIndex(isBlockChild)

  if (firstBlock === 0) {
    return <div className="mb-3">{kids}</div>
  }

  const inline = firstBlock === -1 ? kids : kids.slice(0, firstBlock)
  const rest = firstBlock === -1 ? [] : kids.slice(firstBlock)

  return (
    <div className="mb-3">
      <Paragraph>{inline}</Paragraph>
      {rest}
    </div>
  )
}

const Quote = ({ attribution, children }: { attribution?: string; children?: ReactNode }) => (
  <div className="border-image-gradient-primary border-l-8 pl-6 ">
    <div className="dark:text-common-white">{children}</div>
    {attribution && <em className="text-sm">-{attribution}</em>}
  </div>
)

const Figure = ({
  src,
  alt,
  width,
  height,
}: {
  src: string
  alt?: string
  /** Strings: MDX attribute expressions do not survive compilation here. */
  width: string
  height: string
}) => (
  <div>
    <Image
      className="mx-auto"
      src={src}
      alt={alt || ""}
      width={Number(width)}
      height={Number(height)}
    />
  </div>
)

/** Two adjacent buttons shared a flex wrapper; the conversion resolved the pairing. */
const BtnGroup = ({ children }: { children?: ReactNode }) => (
  <div className="flex flex-col gap-6 md:flex-row">{children}</div>
)

const Anchor = ({ href, children }: { href?: string; children?: ReactNode }) => (
  <Link href={href} variant="inline">
    {children}
  </Link>
)
Anchor.inline = true

const Btn = ({ disabled, ...props }: Omit<ButtonProps, "disabled"> & { disabled?: string }) => (
  <Button disabled={disabled === "true"} {...props} />
)

const heading = (level: 1 | 2 | 3 | 4 | 5 | 6) => {
  const MdxHeading = ({ children }: { children?: ReactNode }) => (
    <ContentHeading level={level} id={headingToId(children)}>
      {children}
    </ContentHeading>
  )
  MdxHeading.displayName = `MdxHeading${level}`
  return MdxHeading
}

export const components = {
  p: Paragraph,

  h1: heading(1),
  h2: heading(2),
  h3: heading(3),
  h4: heading(4),
  h5: heading(5),
  h6: heading(6),

  ul: ({ children }: { children?: ReactNode }) => (
    <ul className="ml-3">
      {blockChildren(children).map((child, i) => (
        <li key={i} className="flex items-center gap-4">
          <Icon
            id="check"
            size={16}
            className="mt-2.5 flex-shrink-0 self-start text-purple-400 dark:text-primary-500"
          />
          {child}
        </li>
      ))}
    </ul>
  ),

  ol: ({ children }: { children?: ReactNode }) => (
    <ol className="ml-8 list-decimal">
      {blockChildren(children).map((child, i) => (
        <li key={i} className="pl-4">
          {child}
        </li>
      ))}
    </ol>
  ),

  li: ListItem,

  blockquote: ({ children }: { children?: ReactNode }) => <Quote>{children}</Quote>,

  a: Anchor,

  code: Code,

  /** Fenced code: unwrap the inner <code> and hand the raw source to CodeBlock. */
  pre: ({ children }: { children?: ReactNode }) => {
    const [code] = Children.toArray(children)
    const props =
      code && typeof code === "object" && "props" in code
        ? (code.props as { className?: string; children?: ReactNode })
        : {}
    const language = props.className?.replace(/^language-/, "") ?? ""
    return <CodeBlock code={String(props.children ?? "").replace(/\n$/, "")} language={language} />
  },

  /** Content-authored components, referenced from the MDX itself. */
  Btn,
  BtnGroup,
  Code,
  Figure,
  Quote,
  Fragment,
}

export default components
