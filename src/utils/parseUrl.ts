import Link from "next/link"

const DOMAIN = "justinwallace.dev"

type ParseUrl = (href?: string) => {
  as: React.ElementType<any> | string
  isInternal?: boolean
  tabIndex?: number
  href?: string
  rel?: string
  target?: string
}

const parseUrl: ParseUrl = (href) => {
  if (!href) {
    return {
      as: "div",
      tabIndex: -1,
      cursor: "auto",
      isInternal: false,
    } as const
  }

  if (href[0] === "/") {
    href = `https://www.${DOMAIN}${href}`
  }

  const url = new URL(href)
  const isInternalLink = url.hostname === `www.${DOMAIN}` || url.hostname === DOMAIN

  return {
    as: isInternalLink ? Link : "a",
    href: isInternalLink ? url.href.split(url.host)[1] : href,
    rel: isInternalLink ? "" : "noreferrer noopener",
    target: isInternalLink ? "" : "_blank",
  } as const
}

export default parseUrl
