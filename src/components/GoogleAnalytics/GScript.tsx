"use client"

import Script from "next/script"
import useGooglePageViews from "@components/GoogleAnalytics/utils/useGooglePageViews"

const GScript = ({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID?: string }) => {
  if (!GA_MEASUREMENT_ID) {
    console.warn(
      "Google Analytics ID not found. Please set NEXT_PUBLIC_GA_MEASUREMENT_ID in `.env`"
    )
  }

  useGooglePageViews(GA_MEASUREMENT_ID)

  return (
    GA_MEASUREMENT_ID && (
      <>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('consent', 'default', {
                    'analytics_storage': 'denied'
                });
                
                gtag('config', '${GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                });
                `,
          }}
        />
      </>
    )
  )
}

export default GScript
