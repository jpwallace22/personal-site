import "../styles/tailwind.css"
import { Darker_Grotesque, IBM_Plex_Sans } from "@next/font/google"
import { AppProps } from "next/app"

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

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --darker-grotesque: ${darkerGrotesque.style.fontFamily};
            --ibm-plex: ${ibmPlex.style.fontFamily};
          }
        `}
      </style>
      {/* @ts-expect-error Next TS bug */}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
