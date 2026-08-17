import type { Metadata } from "next";
import Script from "next/script";
import LandingPage from "@/landing/_shell/LandingPage";
import { config } from "@/landing/warehousing/page";
import { LP_GTM_ID } from "@/landing/config";

export const metadata: Metadata = {
  title: config.metaTitle,
  description: config.metaDescription,
  robots: { index: false, follow: false },
};

/**
 * Root route renders the Warehousing landing page (also available
 * at /warehousing). GTM is only injected when NEXT_PUBLIC_LP_GTM_ID
 * is set, matching the source build's templated GTM behavior.
 */
export default function Home() {
  return (
    <>
      {LP_GTM_ID && (
        <>
          <Script id="gtm" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${LP_GTM_ID}');`}
          </Script>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${LP_GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        </>
      )}
      <LandingPage config={config} />
    </>
  );
}
