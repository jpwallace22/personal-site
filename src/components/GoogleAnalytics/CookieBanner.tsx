"use client"

import { cva } from "class-variance-authority"
import Button from "@molecules/Button"
import Link from "@molecules/Link"
import useCookieBanner, { CookieConsent } from "@components/GoogleAnalytics/utils/useCookieBanner"

const wrapper = cva([
  "shadow-standard",
  "p-4",
  "z-50",
  "fixed",
  "left-1/2 -translate-x-1/2 bottom-0 sm:bottom-4",
  "flex items-center justify-between",
  "w-full max-w-xl",
  "bg-gray-100 dark:bg-purple-900",
  "sm:border rounded-lg border-gray-400 dark:border-purple-700",
])

// TODO create separate announcement banner component

const CookieBanner = () => {
  const [cookieConsent, setCookieConsent] = useCookieBanner()

  return (
    cookieConsent === CookieConsent.UNSET && (
      <div className={wrapper()}>
        <p className="text-base font-bold sm:text-lg">
          This site uses{" "}
          <Link href="/info/cookies" variant="inline">
            cookies
          </Link>
        </p>
        <div className="flex items-center gap-8">
          <Button
            variant="contained"
            size="sm"
            label="Accept"
            onClick={() => setCookieConsent(CookieConsent.GRANTED)}
          />
          <Button
            variant="text"
            size="sm"
            label="Decline"
            onClick={() => setCookieConsent(CookieConsent.DENIED)}
          />
        </div>
      </div>
    )
  )
}

export default CookieBanner
