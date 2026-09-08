import "src/styles/global.css"
import { Metadata } from "next"
import { Darker_Grotesque, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google"
import { BackgroundGrid } from "@molecules/BackgroundGrid"
import GlobalNav from "@components/GlobalNav"
import GoogleAnalytics from "@components/GoogleAnalytics"
import JsonLd from "@components/JsonLd"
import { graph, personSchema, websiteSchema } from "@components/JsonLd/schemas"
import { SITE_NAME, SITE_URL, siteUrl } from "src/content/site"
import renderMetadata from "src/template/renderMetadata"

const darkerGrotesque = Darker_Grotesque({
  weight: ["700", "900", "600"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--darker-grotesque",
})

const ibmPlex = IBM_Plex_Sans({
  weight: ["200", "300", "400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--ibm-plex",
})

const plexMono = IBM_Plex_Mono({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--plex-mono",
})

export const metadata: Metadata = {
  // The canonical origin, not the deploy's own hostname: a preview URL in here
  // would resolve every canonical and OG tag to the preview.
  metadataBase: new URL(SITE_URL),
  ...renderMetadata(),
  title: {
    default: `${SITE_NAME} | Software Engineer`,
    template: `%s | ${SITE_NAME}`,
  },
  alternates: {
    canonical: SITE_URL,
    types: {
      "application/rss+xml": siteUrl("/feed.xml"),
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${darkerGrotesque.variable} ${ibmPlex.variable} ${plexMono.variable} dark`}
    >
      <body>
        <JsonLd schema={graph(personSchema(), websiteSchema())} />
        <GlobalNav />
        <BackgroundGrid />
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  )
}
