"use client"

import { useEffect } from "react"
import useLocalStorage from "@utils/hooks/useLocalStorage"

export enum CookieConsent {
  GRANTED = "granted",
  DENIED = "denied",
  UNSET = "unset",
}

const useCookieBanner = () => {
  const [cookieConsent, setCookieConsent] = useLocalStorage<Maybe<CookieConsent>>(
    "cookie_consent",
    CookieConsent.UNSET
  )

  useEffect(() => {
    if ("gtag" in window) {
      if (cookieConsent && cookieConsent !== CookieConsent.UNSET) {
        window.gtag("consent", "update", {
          analytics_storage: cookieConsent,
        })
      }
    }
  }, [cookieConsent])

  return [cookieConsent, setCookieConsent] as const
}

export default useCookieBanner
