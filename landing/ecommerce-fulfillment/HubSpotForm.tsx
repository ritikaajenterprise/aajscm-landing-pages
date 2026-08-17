"use client";

import { useEffect, useRef, useState } from "react";
import {
  LP_HUBSPOT_ECOM_FORM_ID,
  LP_HUBSPOT_PORTAL_ID,
  LP_HUBSPOT_REGION,
} from "../config";

const SCRIPT_SRC = `https://js-${LP_HUBSPOT_REGION}.hsforms.net/forms/embed/v2.js`;

/**
 * Embeds the ecommerce enquiry form. Client-only: the page requests the
 * HubSpot embed script up front, so this usually just waits for `hbspt`
 * to appear, but it will inject the script itself as a fallback.
 */
const HubSpotForm = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const create = () => {
      if (cancelled || !window.hbspt || !containerRef.current) return;
      containerRef.current.innerHTML = "";
      window.hbspt.forms.create({
        portalId: LP_HUBSPOT_PORTAL_ID,
        formId: LP_HUBSPOT_ECOM_FORM_ID,
        region: LP_HUBSPOT_REGION,
        target: "#hubspot-form-target",
        onFormSubmit: () => {
          // Lets the GTM container fire the Google Ads conversion tag,
          // same event name the warehousing LP pushes.
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: "lp_form_submit",
            lp_slug: "ecommerce-fulfillment",
          });
        },
      });
      setReady(true);
    };

    // The script is requested in the document head, so it is often already there.
    if (window.hbspt) {
      create();
      return () => {
        cancelled = true;
      };
    }

    let script = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`);
    if (!script) {
      script = document.createElement("script");
      script.src = SCRIPT_SRC;
      script.async = true;
      document.head.appendChild(script);
    }
    script.addEventListener("load", create);

    // The head script may finish before this effect attaches its listener.
    const timer = setInterval(() => {
      if (cancelled) return;
      if (window.hbspt) {
        create();
        clearInterval(timer);
      }
    }, 40);

    return () => {
      cancelled = true;
      clearInterval(timer);
      script?.removeEventListener("load", create);
    };
  }, []);

  return (
    <div className="mt-6">
      <div id="hubspot-form-target" ref={containerRef} className="hs-form-wrapper" />
      {!ready ? (
        <div className="grid min-h-[280px] place-items-center rounded-xl border border-dashed border-border bg-surface px-6 py-10 text-center">
          <p className="text-sm text-muted-foreground">Loading form…</p>
        </div>
      ) : null}
    </div>
  );
};

export default HubSpotForm;
