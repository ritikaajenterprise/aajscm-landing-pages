import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SolarIcon, type SolarIconName } from "@/lib/solar-icons";
import SectionHeader from "./SectionHeader";
import { marketplaceLogo } from "./assets";

/* ============ SECTION 3 — BEYOND STORAGE AND SHIPPING ============ */
const ADVANTAGES: { icon: SolarIconName; title: string; body: string }[] = [
  {
    icon: "Buildings3",
    title: "Expand Faster",
    body: "12+ strategically located fulfillment centers for faster delivery and scalable ecommerce growth.",
  },
  {
    icon: "ChartSquare",
    title: "Scale Without Limits",
    body: "Flexible fulfillment operations built for everyday orders and high-demand sale periods.",
  },
  {
    icon: "Global",
    title: "Sell Everywhere",
    body: "One connected inventory pool across marketplaces, websites, retail stores and omnichannel operations.",
  },
  {
    icon: "RefreshCircle",
    title: "Recover Faster",
    body: "Structured reverse logistics processes for faster returns handling and better inventory recovery.",
  },
  {
    icon: "CupStar",
    title: "Stay Competitive",
    body: "Marketplace-ready fulfillment developed for faster dispatches and reliable order execution.",
  },
];

export const BeyondStorageSection = () => (
  <section className="border-b border-border bg-secondary/40 py-14 md:py-20">
    <div className="container">
      <SectionHeader
        align="center"
        className="mx-auto"
        title={
          <>
            What Ecommerce Brands Gain Beyond{" "}
            <span className="text-primary">Warehousing and Shipping</span>
          </>
        }
      />

      <div className="mx-auto mt-10 flex max-w-6xl flex-wrap justify-center gap-5 md:mt-12">
        {ADVANTAGES.map((a) => (
          <div
            key={a.title}
            className="group relative w-full overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated md:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.834rem)]"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/5 transition-all group-hover:scale-125 group-hover:bg-primary/10"
            />
            <div className="relative flex items-center gap-4">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <SolarIcon name={a.icon} className="h-6 w-6" />
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-base font-semibold leading-snug text-ink md:text-lg">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ============ SECTION 4 — OPERATIONAL CHALLENGES ============ */
const CHALLENGES = [
  {
    title: "Managing Multiple Shipping Partners",
    problem: "Managing different courier partners increases coordination and slows dispatch.",
    solution: "One fulfillment partner with integrated shipping operations.",
  },
  {
    title: "Launching New Products",
    problem: "New product launches often disrupt inventory and fulfillment operations.",
    solution: "Structured SKU onboarding and inventory planning before launch.",
  },
  {
    title: "High Return Volumes",
    problem: "Returns reduce inventory availability and increase operational effort.",
    solution: "Faster inspection, grading and inventory reconciliation.",
  },
  {
    title: "Managing Multiple Sales Channels",
    problem: "Website, marketplaces and B2B orders create fragmented operations.",
    solution: "One unified inventory pool across every sales channel.",
  },
  {
    title: "Custom Order Requirements",
    problem: "Kitting, bundling and promotional packaging slow warehouse operations.",
    solution: "Dedicated value-added services before dispatch.",
  },
  {
    title: "Inventory Spread Across Locations",
    problem: "Inventory stored across multiple locations becomes difficult to manage.",
    solution: "Centralized inventory management through one fulfillment partner.",
  },
];

export const ChallengesSection = () => (
  <section className="border-b border-border bg-background py-14 md:py-20">
    <div className="container">
      <SectionHeader
        align="center"
        className="mx-auto"
        title={
          <>
            Solving the Operational Challenges of{" "}
            <span className="text-primary">Ecommerce Brands</span>
          </>
        }
      />

      <div className="mt-10 grid gap-5 md:mt-12 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {CHALLENGES.map((c, i) => (
          <article
            key={c.title}
            className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-5 pl-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated sm:p-6"
          >
            <span
              className="pointer-events-none absolute left-0 top-6 h-10 w-1 rounded-r-full bg-primary transition-all duration-500 ease-out group-hover:top-3 group-hover:h-16"
              aria-hidden
            />
            <div className="flex items-start gap-3">
              <span className="font-display text-2xl font-bold leading-none text-ink/15">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-base font-semibold leading-snug text-ink sm:text-lg">
                {c.title}
              </h3>
            </div>

            <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground sm:text-sm">
              {c.problem}
            </p>

            <div className="mt-4 flex items-center gap-3">
              <span className="h-px flex-1 bg-border" aria-hidden />
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
                AAJ Solution
              </span>
              <span className="h-px flex-1 bg-border" aria-hidden />
            </div>

            <div
              className="mt-4 flex flex-1 items-center gap-3 rounded-xl border border-black/5 p-4"
              style={{ background: "rgba(255,217,102,0.35)" }}
            >
              <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
              <p className="text-[13px] leading-relaxed text-ink sm:text-sm">{c.solution}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

/* ============ SECTION 6 — BUSINESS MODELS ============ */
const MARKETPLACE_LOGOS = [
  { src: marketplaceLogo("Amazon.png"), alt: "Amazon" },
  { src: marketplaceLogo("Flipkart.png"), alt: "Flipkart" },
  { src: marketplaceLogo("Myntra.png"), alt: "Myntra" },
  { src: marketplaceLogo("Nykaa.png"), alt: "Nykaa" },
  { src: marketplaceLogo("Meesho.png"), alt: "Meesho" },
  { src: marketplaceLogo("Ajio.png"), alt: "Ajio" },
  { src: marketplaceLogo("Jiomart.png"), alt: "JioMart" },
];

const MODELS = [
  {
    title: "Marketplace Sellers",
    body: "Meet marketplace SLAs with standardized picking, packing, labeling and dispatch workflows designed for Amazon, Flipkart, Myntra, Nykaa, Meesho, Ajio and other ecommerce platforms. AAJ helps sellers maintain inventory accuracy, faster order processing, reliable dispatch performance and consistent customer experience across multiple marketplaces from one connected fulfillment operation.",
    span: "lg:col-span-6 lg:row-span-2",
    featured: true,
    tone: "bg-primary/[0.06] border-primary/25",
    chip: "bg-primary text-primary-foreground",
  },
  {
    title: "D2C Brands",
    body: "Selling through your website, marketplaces, or both? AAJ centralizes inventory and fulfills orders across every sales channel without managing separate warehouse operations.",
    span: "lg:col-span-4",
    tone: "bg-accent/25 border-accent/50",
    chip: "bg-accent text-accent-foreground",
  },
  {
    title: "Omnichannel Brands",
    body: "Maintain a single inventory pool while fulfilling both online and offline orders without creating inventory silos or duplicate operations.",
    span: "lg:col-span-4",
    tone: "bg-secondary border-border",
    chip: "bg-ink text-background",
  },
  {
    title: "B2B + B2C Brands",
    body: "Manage bulk B2B dispatches and high-volume B2C orders through one fulfillment partner while maintaining separate operational workflows, inventory visibility and dispatch processes for each sales channel.",
    span: "lg:col-span-5",
    tone: "bg-secondary border-border",
    chip: "bg-ink text-background",
  },
  {
    title: "Dropshipping Brands",
    body: "Run a lean ecommerce model without holding inventory. AAJ manages storage, order processing, packing and dispatch while your brand focuses on sales, marketing and customer acquisition.",
    span: "lg:col-span-5",
    tone: "bg-accent/20 border-accent/40",
    chip: "bg-accent text-accent-foreground",
  },
];

const MarketplaceLogoStrip = () => (
  <div className="relative mt-6 overflow-hidden md:mb-6 md:mt-auto md:pt-4">
    <div className="animate-logo-marquee flex w-max items-center gap-6 md:gap-10">
      {[0, 1].map((group) => (
        <div
          key={group}
          className="flex shrink-0 items-center gap-6 md:gap-10"
          aria-hidden={group === 1}
        >
          {MARKETPLACE_LOGOS.map((logo) => (
            <img
              key={`${group}-${logo.alt}`}
              src={logo.src}
              alt={group === 0 ? logo.alt : ""}
              loading="lazy"
              decoding="async"
              className="h-14 w-auto shrink-0 object-contain md:h-20"
            />
          ))}
        </div>
      ))}
    </div>
  </div>
);

export const BusinessModelsSection = () => (
  <section className="border-b border-border bg-background py-10 md:py-12">
    <div className="container px-5 sm:px-6 md:px-10 lg:px-16">
      <SectionHeader
        align="center"
        className="mx-auto max-w-none"
        title={
          <>
            <span className="block">Supporting Every Ecommerce Business Model</span>
            <span className="block text-primary">with the Right Fulfillment Strategy</span>
          </>
        }
      />

      <div className="mt-6 grid auto-rows-auto gap-3 md:mt-8 md:auto-rows-fr md:grid-cols-2 lg:grid-cols-10">
        {MODELS.map((m) => (
          <article
            key={m.title}
            className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated ${m.span} ${m.tone}`}
          >
            <h3
              className={`font-display font-semibold text-ink ${
                m.featured ? "text-base md:text-lg" : "text-[15px] md:text-base"
              }`}
            >
              {m.title}
            </h3>
            <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground md:text-sm">
              {m.body}
            </p>
            {m.featured ? <MarketplaceLogoStrip /> : null}
          </article>
        ))}
      </div>
    </div>
  </section>
);

/* ============ SECTION 7 — PEAK DEMAND ============ */
const PEAK_ROWS = [
  ["Order volumes increase", "Scaling manpower and warehouse operations"],
  ["Inventory moves faster", "Planning inventory inward before demand peaks"],
  ["Courier demand rises", "Aligning dispatch schedules and pickup capacity"],
  ["Returns increase", "Preparing dedicated returns workflows"],
  ["Warehouse pressure grows", "Adding operational shifts and fulfillment capacity"],
  ["Every order matters", "Monitoring warehouse performance throughout sale"],
];

export const PeakDemandSection = () => (
  <section className="border-b border-border bg-secondary/40 py-14 md:py-20">
    <div className="container">
      <SectionHeader
        align="center"
        className="mx-auto"
        title={
          <>
            Peak Demand Requires More Than{" "}
            <span className="text-primary">Warehouse Capacity</span>
          </>
        }
        description="Peak sales affect more than daily order volumes. They increase pressure on inventory, warehouse operations, dispatch and returns. AAJ prepares every stage of the fulfillment process before demand begins to rise."
      />

      <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-border bg-card shadow-card md:mt-12">
        <div className="grid grid-cols-2 bg-foreground text-background">
          <div className="px-3 py-3 text-center text-[11px] font-bold uppercase tracking-[0.14em] md:px-7 md:py-4 md:text-left md:text-sm">
            During Peak Sales
          </div>
          <div className="px-3 py-3 text-center text-[11px] font-bold uppercase tracking-[0.14em] md:px-7 md:py-4 md:text-sm">
            AAJ Prepares By
          </div>
        </div>
        {PEAK_ROWS.map(([left, right], i) => (
          <div
            key={left}
            className={`group grid grid-cols-2 border-t border-border transition-colors hover:bg-primary/[0.04] ${
              i % 2 === 1 ? "bg-surface" : ""
            }`}
          >
            <div className="flex flex-col items-center gap-2 px-3 py-4 text-center text-[13px] text-ink sm:flex-row sm:items-start sm:text-left md:px-7 md:py-5 md:text-sm">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
              {left}
            </div>
            <div className="flex flex-col items-center gap-2 px-3 py-4 text-center text-[13px] text-muted-foreground sm:flex-row sm:items-start sm:text-left md:px-7 md:py-5 md:text-sm">
              <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {right}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ============ SECTION 8 — BETTER OPERATIONS ============ */
const OPERATIONS: { icon: SolarIconName; title: string; body: string }[] = [
  {
    icon: "ChecklistMinimalistic",
    title: "Standardized\nOperations",
    body: "Every warehouse follows standardized receiving, picking, packing, QC and dispatch processes to maintain consistency across locations.",
  },
  {
    icon: "UserCheckRounded",
    title: "Dedicated\nAccount Management",
    body: "A single point of contact who understands your operations, coordinates changes and keeps fulfillment aligned with your business.",
  },
  {
    icon: "GraphUp",
    title: "Operational\nReporting",
    body: "Regular reports that help brands understand inventory movement, order trends and warehouse performance.",
  },
  {
    icon: "Rocket2",
    title: "Continuous\nProcess Improvement",
    body: "Regular operational reviews to identify bottlenecks and improve fulfillment performance over time.",
  },
];

export const BetterOperationsSection = () => (
  <section className="border-b border-border bg-background py-14 md:py-20">
    <div className="container">
      <SectionHeader
        align="center"
        className="mx-auto text-center"
        title={
          <>
            Beyond Fulfillment, AAJ Supply Chain Management Helps Brands{" "}
            <span className="text-primary">Build Better Operations</span>
          </>
        }
      />

      <div className="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {OPERATIONS.map((it) => (
          <div
            key={it.title}
            className="group relative flex min-h-[400px] flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 pb-12 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_0_28px_rgba(255,217,102,0.55)]"
          >
            <div
              className="relative mx-auto mb-6 flex h-28 w-full items-center justify-center"
              style={{ perspective: "800px" }}
            >
              <span
                aria-hidden
                className="absolute h-20 w-20 rounded-2xl border-2 border-dashed border-primary/40"
                style={{ transform: "rotateX(55deg) rotateZ(-45deg) translate(14px, -14px)" }}
              />
              <span
                aria-hidden
                className="absolute h-20 w-20 rounded-2xl bg-primary/15"
                style={{ transform: "rotateX(55deg) rotateZ(-45deg)" }}
              />
              <SolarIcon
                name={it.icon}
                className="relative h-14 w-14 text-primary drop-shadow-[0_8px_18px_hsl(var(--primary)/0.35)] transition-transform duration-500 group-hover:-translate-y-1"
                style={{ transform: "rotateX(55deg) rotateZ(-45deg)" }}
              />
            </div>
            <h3 className="whitespace-pre-line text-center font-display text-base font-semibold text-ink md:text-lg">
              {it.title}
            </h3>
            <span aria-hidden className="mx-auto mt-3 block h-[3px] w-12 rounded-full bg-primary" />
            <p className="mt-4 text-justify text-xs leading-relaxed text-muted-foreground md:text-sm">
              {it.body}
            </p>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-7 bottom-3 h-8 opacity-70"
              style={{
                backgroundImage: "radial-gradient(hsl(var(--primary) / 0.35) 1px, transparent 1px)",
                backgroundSize: "8px 8px",
                maskImage:
                  "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);
