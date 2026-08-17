/**
 * Static asset paths for the /ecommerce-fulfillment LP.
 *
 * The Lovable source imported these as `*.asset.json` pointers resolved by
 * its dev-server proxy; here the bytes live under `public/lp/ecommerce-fulfillment/`.
 */
const BASE = "/lp/ecommerce-fulfillment";

export const HERO_BG = `${BASE}/hero.png`;
export const FAQ_IMAGE = `${BASE}/faq.webp`;
export const AAJ_LOGO = "/lp/aaj-logo.png";

/** Ecommerce client logos for the "Trusted by" roll strip. */
export const clientLogo = (file: string) => `${BASE}/clients/${file}`;
/** Marketplace logos for the Marketplace Sellers card. */
export const marketplaceLogo = (file: string) => `${BASE}/marketplaces/${file}`;
/** Product-category cutouts for the focus carousel. */
export const categoryImage = (file: string) => `${BASE}/categories/${file}`;
/** City photos for the pan-India presence grid. */
export const cityImage = (file: string) => `${BASE}/cities/${file}`;
