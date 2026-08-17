import type { Metadata } from "next";
import Script from "next/script";
import EcommercePage from "@/landing/ecommerce-fulfillment/EcommercePage";
import { LP_GTM_ID, LP_HUBSPOT_REGION, LP_PUBLIC_HOST } from "@/landing/config";

const PATH = "/ecommerce-fulfillment";
const CANONICAL = LP_PUBLIC_HOST ? `${LP_PUBLIC_HOST}${PATH}` : PATH;

export const metadata: Metadata = {
  title: "Ecommerce Fulfillment Services That Give You Operational Advantage",
  description:
    "Technology-driven ecommerce fulfillment with standardized warehouse operations, inventory accuracy, marketplace compliance, & scalable fulfillment across India.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title:
      "Ecommerce Fulfillment Services That Give Your Brand an Operational Advantage",
    description:
      "AAJ Supply Chain Management combines technology-driven fulfillment, standardized warehouse operations and marketplace expertise to help ecommerce brands fulfill orders faster, maintain inventory accuracy and scale with confidence.",
    type: "website",
    url: CANONICAL,
    siteName: "AAJ Supply Chain Management",
  },
  twitter: { card: "summary_large_image" },
};

/**
 * Ecommerce fulfillment landing page, migrated from the Lovable
 * "Ecommerce Landing Page" build. GTM is only injected when
 * NEXT_PUBLIC_LP_GTM_ID is set, matching the other LP routes.
 */
export default function EcommerceFulfillmentPage() {
  return (
    <>
      {/* Warm up the HubSpot hosts before the hero form mounts. */}
      <link rel="preconnect" href={`https://js-${LP_HUBSPOT_REGION}.hsforms.net`} crossOrigin="" />
      <link
        rel="preconnect"
        href={`https://forms-${LP_HUBSPOT_REGION}.hsforms.com`}
        crossOrigin=""
      />
      <link rel="preconnect" href={`https://api-${LP_HUBSPOT_REGION}.hsforms.com`} crossOrigin="" />

      <Script
        id="hubspot-embed"
        src={`https://js-${LP_HUBSPOT_REGION}.hsforms.net/forms/embed/v2.js`}
        strategy="afterInteractive"
      />

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

      <EcommercePage />
    </>
  );
}
