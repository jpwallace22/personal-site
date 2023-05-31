import "src/styles/global.css"
import { Metadata } from "next"
import { Darker_Grotesque, IBM_Plex_Sans } from "next/font/google"
import GlobalNav from "@components/GlobalNav"

const darkerGrotesque = Darker_Grotesque({
  weight: ["700", "900"],
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

export const metadata: Metadata = {
  title: "Justin Wallace Development",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${darkerGrotesque.variable} ${ibmPlex.variable} dark`}>
      <body>
        {/* @ts-expect-error Async Server Component (fix in TS 5.1) */}
        <GlobalNav />
        {children}
      </body>
    </html>
  )
}
