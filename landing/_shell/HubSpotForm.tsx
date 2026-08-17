import { useEffect, useRef } from "react";
import {
  LP_HUBSPOT_FORM_ID,
  LP_HUBSPOT_PORTAL_ID,
  LP_HUBSPOT_REGION,
  LP_THANK_YOU_PATH,
} from "../config";

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (opts: Record<string, unknown>) => unknown;
      };
    };
    dataLayer?: Array<Record<string, unknown>>;
  }
}

interface Props {
  /** LP slug — pushed to dataLayer with the form submit event. */
  slug: string;
  /** Override per-page form GUID. Falls back to env default. */
  formId?: string;
  /** Override per-page portal. Falls back to env default. */
  portalId?: string;
}

const HUBSPOT_SCRIPT_SRC =
  LP_HUBSPOT_REGION && LP_HUBSPOT_REGION !== "na1"
    ? `//js-${LP_HUBSPOT_REGION}.hsforms.net/forms/embed/v2.js`
    : "//js.hsforms.net/forms/embed/v2.js";

/**
 * Loads HubSpot's embed script (once per page) and mounts a form
 * inside the `#hubspot-form` div. Pushes a `lp_form_submit` event
 * to GTM's dataLayer on submit so the Google Ads conversion tag
 * can fire from GTM.
 */
const HubSpotForm = ({ slug, formId, portalId }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const portal = portalId || LP_HUBSPOT_PORTAL_ID;
  const form = formId || LP_HUBSPOT_FORM_ID;

  useEffect(() => {
    if (!portal || !form) return;

    const create = () => {
      if (!window.hbspt || !containerRef.current) return;
      containerRef.current.innerHTML = "";
      window.hbspt.forms.create({
        region: LP_HUBSPOT_REGION,
        portalId: portal,
        formId: form,
        target: `#${containerRef.current.id}`,
        // HubSpot built-in redirect to the Thank-You LP after submit.
        // Configure the same value in the HubSpot form settings; this
        // is a safety net.
        redirectUrl: LP_THANK_YOU_PATH,
        onFormSubmit: () => {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: "lp_form_submit",
            lp_slug: slug,
          });
        },
      });
    };

    if (window.hbspt) {
      create();
      return;
    }

    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${HUBSPOT_SCRIPT_SRC}"]`,
    );
    if (existing) {
      existing.addEventListener("load", create, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = HUBSPOT_SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    script.addEventListener("load", create, { once: true });
    document.body.appendChild(script);
  }, [portal, form, slug]);

  if (!portal || !form) {
    return (
      <div className="rounded-lg border border-dashed border-border bg-muted/40 p-6 text-sm text-muted-foreground">
        <strong className="block text-foreground">HubSpot form not configured</strong>
        Set <code className="font-mono">NEXT_PUBLIC_LP_HUBSPOT_PORTAL_ID</code> and{" "}
        <code className="font-mono">NEXT_PUBLIC_LP_HUBSPOT_FORM_ID</code> in your{" "}
        <code className="font-mono">.env</code>, then restart the dev server.
      </div>
    );
  }

  return (
    <div
      id={`hubspot-form-${slug}`}
      ref={(el) => {
        if (el) containerRef.current = el;
      }}
      className="min-h-[420px]"
    />
  );
};

export default HubSpotForm;
