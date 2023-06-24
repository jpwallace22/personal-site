import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

const useGooglePageViews = (GA_MEASUREMENT_ID?: string) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if ("gtag" in window && GA_MEASUREMENT_ID) {
      const url = pathname + searchParams.toString()
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: url,
      })
    }
  }, [pathname, searchParams, GA_MEASUREMENT_ID])
}

export default useGooglePageViews
