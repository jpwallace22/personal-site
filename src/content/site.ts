import type { Company, Image, Link } from "src/content/schema"

/**
 * Canonical origin. Every absolute URL the site emits — canonicals, OG tags,
 * the sitemap, the feed — is built from this, so a deploy preview never leaks
 * its own hostname into metadata.
 */
export const SITE_URL = "https://www.justinwallace.dev"

/** Used for og:site_name and the title template. */
export const SITE_NAME = "Justin Wallace"

export const AUTHOR_NAME = "Justin Wallace"

/** Absolute URL for a route path, which must start with a slash (or be empty). */
export const siteUrl = (path = "") => `${SITE_URL}${path}`

/**
 * Justin's profiles elsewhere. Rendered by the social icon rows and emitted as
 * `sameAs` in the Person structured data, so both stay in step.
 */
export const socialProfiles = [
  { social: "github", link: "https://www.github.com/jpwallace22" },
  { social: "linkedIn", link: "https://www.linkedin.com/in/thejustinwallace" },
  { social: "instagram", link: "https://www.instagram.com/van.surf.climb" },
  { social: "threads", link: "https://www.threads.net/@thejustinwallace" },
] as const

/** The logo used in the nav and footer. */
export const favicon: Image = {
  url: "https://www.datocms-assets.com/85391/1668972867-thissite-1.svg",
  alt: "Personal logo of Justin Wallace",
  width: 55,
  height: 46,
}

export const navLinks: Link[] = [
  {
    label: "about",
    url: siteUrl("/about"),
  },
  {
    label: "projects",
    url: siteUrl("/projects"),
  },
  {
    label: "blog",
    url: siteUrl("/blog"),
  },
  {
    label: "contact",
    url: siteUrl("/#page-footer"),
  },
]

/** Shown in the home page trust bar. */
export const companies: Company[] = [
  {
    name: "NVIDIA",
    logo: {
      url: "https://www.datocms-assets.com/85391/1727393069-nvidia-logo-horz-edited.png",
      alt: "",
      width: 1094,
      height: 206,
    },
    website: "https://www.nvidia.com",
    trusted: true,
  },
  {
    name: "Trustmachines",
    logo: {
      url: "https://www.datocms-assets.com/85391/1709401067-trustmachinesdark_wuwbsi.avif",
      alt: "",
      width: 1920,
      height: 339,
    },
    website: "https://trustmachines.co/",
    trusted: true,
  },
  {
    name: "Justworks",
    logo: {
      url: "https://www.datocms-assets.com/85391/1709400829-justworks-onlight-logo.svg",
      alt: "",
      width: 350,
      height: 65,
    },
    website: "https://www.justworks.com/",
    trusted: true,
  },
  {
    name: "Mutiny",
    logo: {
      url: "https://www.datocms-assets.com/85391/1709400689-mutiny-onlight-logo.svg",
      alt: "",
      width: 160,
      height: 52,
    },
    website: "https://www.mutinyhq.com/",
    trusted: true,
  },
  {
    name: "Freshworks",
    logo: {
      url: "https://www.datocms-assets.com/85391/1709400735-freshworks-logo-ondark.svg",
      alt: "",
      width: 321,
      height: 65,
    },
    website: "https://www.freshworks.com/",
    trusted: true,
  },
  {
    name: "Solana",
    logo: {
      url: "https://www.datocms-assets.com/85391/1709400792-solana_logo_svg.webp",
      alt: "",
      width: 1366,
      height: 221,
    },
    website: "https://solana.com/",
    trusted: true,
  },
  {
    name: "Snowflake",
    logo: {
      url: "https://www.datocms-assets.com/85391/1709400650-snowflake-onlight-logo.svg",
      alt: "",
      width: 142,
      height: 34,
    },
    website: "https://www.snowflake.com/en/",
    trusted: true,
  },
  {
    name: "PHS",
    logo: {
      url: "https://www.datocms-assets.com/85391/1709400565-presbyterian-logo-red.svg",
      alt: "",
      width: 225,
      height: 25,
    },
    website: "https://www.phs.org/",
    trusted: true,
  },
  {
    name: "Calendly",
    logo: {
      url: "https://www.datocms-assets.com/85391/1709400525-calandly.svg",
      alt: "",
      width: 1580,
      height: 381,
    },
    website: "https://www.calendly.com",
    trusted: true,
  },
  {
    name: "Webstacks",
    logo: {
      url: "https://www.datocms-assets.com/85391/1709400500-stacks.svg",
      alt: "",
      width: 149,
      height: 20,
    },
    website: "https://www.webstacks.com",
    trusted: true,
  },
  {
    name: "OctoAI",
    logo: {
      url: "https://www.datocms-assets.com/85391/1709399321-1704222289-octoai_logo_light.svg",
      alt: "",
      width: 1295,
      height: 336,
    },
    website: "https://www.octo.ai",
    trusted: true,
  },
]
