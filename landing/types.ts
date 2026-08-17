/**
 * Shared types for landing page configs.
 *
 * Each LP exports a `LandingConfig` object which `LandingPage`
 * consumes to render the standard LP shell. All section-specific
 * arrays are optional — a section only renders if its data is set.
 */
export interface LandingService {
  title: string;
  description: string;
  icon?: string;
}

export interface LandingFaq {
  q: string;
  a: string;
}

export interface LandingBenefit {
  title: string;
  description: string;
}

export interface LandingHeroStat {
  /** Big numeric value, e.g. "99.75%". */
  value: string;
  /** Label that follows the value, e.g. "Inventory Accuracy". */
  label: string;
}


export interface LandingFeatureCard {
  title: string;
  description: string;
  /** Lucide icon name (kebab-case mapped in component). Optional. */
  icon?: string;
}

export interface LandingSolution {
  title: string;
  description: string;
  /** Chips shown under "Ideal For". */
  idealFor: string[];
  icon?: string;
  /** Optional square image (imported URL) to show in the card. */
  image?: string;
}

export interface LandingPillar {
  label: string;       // "INFRASTRUCTURE"
  title: string;       // "Modern Facilities"
  description: string;
  icon?: string;
}

export interface LandingWarehouse {
  name: string;          // "Delhi"
  capacity: string;      // "35,000+ Sq. Ft."
  bestFor: string[];     // ["B2C", "D2C", "Marketplace Fulfillment"]
  highlights: string[];  // ["24×7 Operations", ...]
  coverage: string[];    // ["North India", "Delhi NCR", ...]
  /** Optional facility address shown in the network section. */
  address?: string;
  /** Optional facility narrative shown below address. */
  description?: string;
  /** Optional facility image override (defaults to slug-city.jpg). */
  image?: string;
  /** Optional team/security/racking custom values. */
  team?: string;
  security?: string;
  racking?: string;
}

export interface LandingTestimonial {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  rating?: number;
}


export interface LandingBusinessModel {
  title: string;
  description: string;
  icon?: string;
}

/**
 * Sections a mid-page CTA band can be anchored to. The band renders
 * directly below the named section. Add a key here and a matching
 * `{ctaBand("…")}` line in `LandingPage` to open a new slot.
 */
export type LandingCtaSlot = "tech" | "warehouses";

export interface LandingCtaBand {
  heading: string;
  /** Appended to the heading in brand yellow. */
  highlight?: string;
  subheading?: string;
  /** Button text. */
  label: string;
}

export interface LandingConfig {
  slug: string;
  metaTitle: string;
  metaDescription: string;

  /** Hero */
  heroEyebrow?: string;
  heroHeadline: string;
  /** Words/phrases inside heroHeadline that should be rendered in brand red. */
  heroHighlightWords?: string[];
  heroSubheadline: string;
  /** Short text USP overlaid on the hero (e.g. "99.75% Inventory Accuracy"). */
  heroHighlightBadge?: string;
  heroBullets?: string[];
  heroStats?: LandingHeroStat[];
  heroFeatures?: string[];
  /** Small icon+title+subtitle cards directly below the subheadline. */
  heroIconStats?: { icon: string; title: string; subtitle: string }[];
  /** Large stats strip card (icon + value + 2 lines of label). */
  heroBigStats?: { icon: string; value: string; labelTop: string; labelBottom?: string }[];
  /** 5-item feature strip rendered as a card below the hero. */
  heroBottomFeatures?: { icon: string; title: string; subtitle: string }[];
  /** Form card heading + sub. */
  heroFormHeading?: string;
  heroFormSubheading?: string;
  /** Trust row above the form (icon + label). */
  heroFormTrust?: { icon: string; label: string }[];
  trustStrip?: string;
  /** Words/phrases inside trustStrip that should be rendered in brand red and bold. */
  trustStripHighlights?: string[];


  /** Optional client logo strip URLs (relative or absolute). */
  clientLogos?: string[];

  /** Section 2 — Competitive Advantage feature grid. */
  competitiveAdvantageHeading?: string;
  competitiveAdvantageSubheading?: string;
  competitiveAdvantages?: LandingFeatureCard[];

  /** Section 3 — Solutions (with idealFor chips). When present this
   * overrides the simple `services` grid below. */
  solutionsHeading?: string;
  solutionsSubheading?: string;
  solutions?: LandingSolution[];

  /** Industries We Serve — bento cards or dark image cards with icon + label + tagline. */
  industriesHeading?: string;
  industriesSubheading?: string;
  industries?: { name: string; tagline: string; icon: string; image?: string }[];

  /** Legacy/simple services grid (still used by older LPs). */
  servicesHeading?: string;
  servicesSubheading?: string;
  services?: LandingService[];

  /** Section 4 — Supply chain benefits. */
  supplyChainHeading?: string;
  supplyChainSubheading?: string;
  supplyChain?: LandingFeatureCard[];

  /** Section 5 — Integrated tech ecosystem (dark band). */
  techHeading?: string;
  techSubheading?: string;
  tech?: LandingFeatureCard[];

  /** Mid-page CTA bands, keyed by the section each one follows.
   * A band renders only when its slot is present. */
  ctaBands?: Partial<Record<LandingCtaSlot, LandingCtaBand>>;

  /** Section 6 — Four pillars bento. */
  pillarsHeading?: string;
  pillarsSubheading?: string;
  pillars?: LandingPillar[];

  /** Section 7 — Pan-India warehouse network (interactive). */
  warehousesHeading?: string;
  warehousesSubheading?: string;
  warehouses?: LandingWarehouse[];

  /** Section 8 — Testimonials carousel. */
  testimonialsHeading?: string;
  testimonials?: LandingTestimonial[];

  /** Section 9 — Business models. */
  businessModelsHeading?: string;
  businessModelsSubheading?: string;
  businessModels?: LandingBusinessModel[];

  /** Generic benefits grid (legacy LPs). */
  benefitsHeading?: string;
  benefits?: LandingBenefit[];

  /** Section 10 — FAQ. */
  faqHeading?: string;
  faqs?: LandingFaq[];

  /** Final CTA band. */
  finalCtaHeading: string;
  finalCtaSubheading?: string;
  finalCtaMicroTrust?: string;

  /** Override the default HubSpot form GUID for this LP. */
  hubspotFormId?: string;
}
