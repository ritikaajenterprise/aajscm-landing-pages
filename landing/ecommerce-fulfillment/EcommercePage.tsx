import { Check, Gauge, CheckCircle2, Workflow } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import EcomHeader from "./EcomHeader";
import EcomFooter from "./EcomFooter";
import HubSpotForm from "./HubSpotForm";
import BrandLogos from "./BrandLogos";
import CtaBand from "../_shell/CtaBand";
import TestimonialsSection from "./TestimonialsSection";
import ScaleStats from "./ScaleStats";
import LocationsSection from "./LocationsSection";
import FaqSection from "./FaqSection";
import TechnologySection from "./TechnologySection";
import CategoriesSection from "./CategoriesSection";
import {
  BeyondStorageSection,
  BetterOperationsSection,
  BusinessModelsSection,
  ChallengesSection,
  PeakDemandSection,
} from "./Sections";
import { HERO_BG } from "./assets";

const HERO_STATS = [
  { value: "99.75%", label: "Inventory Accuracy", icon: Gauge },
  { value: "100%", label: "Marketplace Compliance", icon: CheckCircle2 },
  { value: "60+", label: "Ecommerce Integrations", icon: Workflow },
];

const FORM_USPS = [
  "OMS & Marketplace Integration",
  "No Long-Term Lock-In",
  "Pay-Per-Use Model",
];

/**
 * Ecommerce fulfillment landing page, ported from the Lovable
 * "Ecommerce Landing Page" build (its `/` route). Section order and
 * copy follow that build one-to-one.
 */
const EcommercePage = () => (
  <div id="top" className="lp-ecom bg-background">
    <EcomHeader />

    {/* HERO */}
    <section className="relative isolate overflow-hidden border-b border-border">
      <div
        className="absolute inset-y-0 left-0 -z-20 hidden w-[65%] lg:block lg:w-[60%]"
        style={{
          maskImage: "linear-gradient(to right, black 0%, black 42%, transparent 82%)",
          WebkitMaskImage: "linear-gradient(to right, black 0%, black 42%, transparent 82%)",
        }}
      >
        <img
          src={HERO_BG}
          alt=""
          aria-hidden
          className="h-full w-full object-cover object-left-bottom"
        />
      </div>
      <div
        className="absolute inset-0 -z-10 hidden lg:block"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, hsl(var(--background) / 0.25) 42%, hsl(var(--background) / 0.75) 72%, hsl(var(--background)) 100%)",
        }}
        aria-hidden
      />
      {/* White wash behind the form, faded on both sides so it merges with the image */}
      <div
        className="absolute inset-y-0 right-0 -z-10 hidden w-[62%] lg:block"
        style={{
          background:
            "linear-gradient(to right, hsl(var(--background) / 0) 0%, hsl(var(--background) / 0.75) 22%, hsl(var(--background) / 0.95) 50%, hsl(var(--background) / 0.75) 82%, hsl(var(--background) / 0) 100%)",
        }}
        aria-hidden
      />
      <div className="container relative mx-auto px-5 pb-6 pt-6 sm:px-6 md:pb-6 md:pt-8">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-start lg:gap-8">
          {/* LEFT — Hero copy */}
          <div className="text-center lg:col-span-6 lg:text-left">
            <h1 className="font-display text-2xl font-semibold leading-[1.18] sm:text-3xl md:text-4xl lg:text-[40px] lg:leading-[1.12]">
              Ecommerce Fulfillment Services That Give Your Brand an{" "}
              <span className="text-primary">Operational Advantage</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base lg:mx-0">
              AAJ Supply Chain Management combines technology-driven fulfillment, standardized
              warehouse operations and marketplace expertise. Together, they help ecommerce brands
              fulfill orders faster, maintain inventory accuracy and stay ready for every stage of
              growth.
            </p>

            <div className="mt-4 flex flex-col items-center gap-2 text-xs sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-3 lg:justify-start">
              {HERO_STATS.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="flex items-center gap-1.5">
                    <Icon className="h-4 w-4 text-primary" strokeWidth={1.75} aria-hidden />
                    <span className="font-semibold text-foreground">
                      {stat.value} {stat.label}
                    </span>
                    {idx < HERO_STATS.length - 1 && (
                      <span className="ml-1.5 hidden text-muted-foreground/30 sm:inline">|</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT — Form */}
          <div className="lg:col-span-6">
            <div className="relative">
              <Card
                id="contact-form"
                className="relative overflow-hidden border-2 border-primary bg-background shadow-2xl shadow-primary/20"
              >
                <CardContent className="p-5 md:p-6">
                  <h2 className="mb-4 font-display text-xl font-semibold text-ink md:text-2xl">
                    Find the Right Ecommerce Warehousing Strategy for Your Business
                  </h2>
                  <HubSpotForm />
                  <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 border-t border-border pt-3 text-xs font-semibold text-foreground">
                    {FORM_USPS.map((usp) => (
                      <li key={usp} className="flex items-center gap-1.5">
                        <Check className="h-3.5 w-3.5 text-primary" strokeWidth={3} />
                        {usp}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* SECTION 2 — Trusted by leading ecommerce brands */}
    <BrandLogos />

    {/* SECTION 3 */}
    <BeyondStorageSection />

    {/* SECTION 4 */}
    <ChallengesSection />
    <CtaBand
      title="The Right Ecommerce Fulfillment Company Solves Problems Before They"
      highlight="Slow Your Business Growth."
      label="Talk to Our Team"
    />

    {/* SECTION 5 */}
    <TechnologySection />

    {/* SECTION 6 */}
    <BusinessModelsSection />

    {/* SECTION 7 */}
    <PeakDemandSection />
    <CtaBand
      title="Talk to AAJ's 3PL Ecommerce Team Before your"
      highlight="Next Seasonal Campaign."
      label="Plan Your Peak Sale Operations"
    />

    {/* SECTION 8 */}
    <BetterOperationsSection />

    {/* SECTION 9 */}
    <TestimonialsSection />
    <ScaleStats />

    {/* SECTION 10 */}
    <CategoriesSection />

    {/* SECTION 11 — Pan-India presence */}
    <LocationsSection />

    {/* FAQ */}
    <FaqSection />

    {/* FINAL CTA */}
    <CtaBand
      title="Your Next Stage of Growth Starts with Better Ecommerce Fulfillment."
      highlight="Let's Build It Together."
      label="Get a Fulfillment Plan"
    />

    <EcomFooter />
  </div>
);

export default EcommercePage;
