import { Suspense } from "react"
import CookieBanner from "@components/GoogleAnalytics/CookieBanner"
import GScript from "@components/GoogleAnalytics/GScript"

// Set in suspense because of useSearchParams() needed for page views.
// Not suspending causes entire page to render client side
const GoogleAnalytics = () => {
  return (
    <>
      <CookieBanner />
      <Suspense>
        <GScript GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
      </Suspense>
    </>
  )
}

export default GoogleAnalytics
