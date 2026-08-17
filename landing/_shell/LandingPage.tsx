"use client";

import { useEffect } from "react";
import LpHeader from "./LpHeader";
import LpFooter from "./LpFooter";
import LpHero from "./LpHero";
import CtaBand from "./CtaBand";
import LpTrustLogos from "./LpTrustLogos";
import LpCompetitiveAdvantage from "./LpCompetitiveAdvantage";
import LpIndustries from "./LpIndustries";

import LpSolutions from "./LpSolutions";
import LpServices from "./LpServices";
import LpSupplyChain from "./LpSupplyChain";
import LpTechEcosystem from "./LpTechEcosystem";
import LpFourPillars from "./LpFourPillars";
import LpWarehouseNetwork from "./LpWarehouseNetwork";
import LpTestimonials from "./LpTestimonials";
import LpBusinessModels from "./LpBusinessModels";
import LpBenefits from "./LpBenefits";
import LpFaq from "./LpFaq";
import LpFinalCta from "./LpFinalCta";
import type { LandingConfig, LandingCtaSlot } from "../types";

interface Props {
  config: LandingConfig;
}

const LandingPage = ({ config }: Props) => {
  useEffect(() => {
    document.title = config.metaTitle;
    setMeta("description", config.metaDescription);
    setMeta("robots", "noindex,nofollow");
  }, [config.metaTitle, config.metaDescription]);

  /** Renders the CTA band configured for `slot`, if the LP defines one. */
  const ctaBand = (slot: LandingCtaSlot) => {
    const band = config.ctaBands?.[slot];
    if (!band) return null;
    return (
      <CtaBand
        title={band.heading}
        highlight={band.highlight}
        description={band.subheading}
        label={band.label}
      />
    );
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <LpHeader />
      <main className="flex-1">
        <LpHero config={config} />
        <LpTrustLogos caption={config.trustStrip} highlights={config.trustStripHighlights} />
        <LpCompetitiveAdvantage config={config} />

        <LpSolutions config={config} />
        <LpServices config={config} />
        <LpSupplyChain config={config} />
        <LpTechEcosystem config={config} />
        {ctaBand("tech")}
        <LpFourPillars config={config} />
        <LpIndustries config={config} />
        <LpWarehouseNetwork config={config} />
        {ctaBand("warehouses")}
        <LpTestimonials config={config} />
        <LpBusinessModels config={config} />
        <LpBenefits config={config} />
        <LpFaq config={config} />
        <LpFinalCta config={config} />
      </main>
      <LpFooter />
    </div>
  );
};

function setMeta(name: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export default LandingPage;
