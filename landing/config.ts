/**
 * Build-time landing-page configuration.
 *
 * Values come from `.env` (prefixed `NEXT_PUBLIC_LP_*`) so we can swap GTM
 * containers, HubSpot portal / form IDs, and the canonical host without
 * touching code.
 */
export const LP_HUBSPOT_PORTAL_ID =
  process.env.NEXT_PUBLIC_LP_HUBSPOT_PORTAL_ID ?? "5950148";

export const LP_HUBSPOT_FORM_ID =
  process.env.NEXT_PUBLIC_LP_HUBSPOT_FORM_ID ??
  "e311f7c5-7586-4c9d-ac46-0501db97b331";

export const LP_HUBSPOT_REGION =
  process.env.NEXT_PUBLIC_LP_HUBSPOT_REGION ?? "na2";

/** Form GUID for the /ecommerce-fulfillment LP (its own HubSpot form). */
export const LP_HUBSPOT_ECOM_FORM_ID =
  process.env.NEXT_PUBLIC_LP_HUBSPOT_ECOM_FORM_ID ??
  "ac2de442-c565-4873-93cd-74ba0e9ae184";

export const LP_GTM_ID = process.env.NEXT_PUBLIC_LP_GTM_ID ?? "";

/**
 * Public canonical host for the landing pages once live on Hostinger.
 * Leave blank during local dev; canonical/og:url will fall back to
 * relative paths.
 */
export const LP_PUBLIC_HOST = process.env.NEXT_PUBLIC_LP_PUBLIC_HOST ?? "";

/** Path used for the HubSpot thank-you redirect. */
export const LP_THANK_YOU_PATH = "/thank-you";
