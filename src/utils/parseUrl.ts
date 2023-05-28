import NextLink from "next/link"

const DOMAIN = "justinwallace.dev"

type ParseUrl = (href?: string) => {
  as: React.ElementType<any> | string
  isInternal?: boolean
  tabIndex?: number
  href?: string
  rel?: string
  target?: string
}

const baseState = {
  as: "div",
  tabIndex: -1,
  isInternal: false,
} as const

const parseUrl: ParseUrl = (href) => {
  if (!href) {
    return baseState
  }

  if (href[0] === "/") {
    return {
      href,
      as: NextLink,
    }
  }

  try {
    const url = new URL(href)
    const isInternalLink = url.hostname === `www.${DOMAIN}` || url.hostname === DOMAIN
    return {
      as: isInternalLink ? NextLink : "a",
      href: isInternalLink ? url.href.split(url.host)[1] : href,
      rel: isInternalLink ? undefined : "noreferrer noopener",
      target: isInternalLink ? undefined : "_blank",
    } as const
  } catch (e) {
    console.warn(`${href} is an invalid URL`)
    return baseState
  }
}

export default parseUrl
