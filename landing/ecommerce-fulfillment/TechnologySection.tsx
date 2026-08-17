"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SolarIcon, type SolarIconName } from "@/lib/solar-icons";
import SectionHeader from "./SectionHeader";
import { scrollToId } from "../_shell/scroll";

/* ============ SECTION 5 — TECHNOLOGY ============ */
const TECH: { icon: SolarIconName; title: string; lead: string; sub: string; body: string }[] = [
  {
    icon: "Server2",
    title: "In-house Technology",
    lead: "In-house",
    sub: "Technology",
    body: "Keeps warehouse, inventory, fulfillment and dispatch operations connected through one integrated platform, reducing dependency on multiple disconnected systems and improving operational coordination across every order stage.",
  },
  {
    icon: "Box",
    title: "Unified Inventory",
    lead: "Unified",
    sub: "Inventory",
    body: "Maintains synchronized inventory visibility across marketplaces, brand websites and warehouse operations to help prevent stock mismatches, overselling, delayed updates and inventory allocation conflicts during peak demand.",
  },
  {
    icon: "Scanner2",
    title: "Barcode Validation",
    lead: "Barcode",
    sub: "Validation",
    body: "Verifies inventory movement at every operational stage, reducing manual errors and improving inventory accuracy during receiving, put-away, picking, packing, quality checks and final dispatch verification.",
  },
  {
    icon: "Routing2",
    title: "Intelligent Order Routing",
    lead: "Intelligent",
    sub: "Order Routing",
    body: "Automatically routes orders through predefined operational workflows, helping warehouse teams process orders faster, reduce manual decision-making, improve order prioritization and maintain consistent fulfillment performance.",
  },
  {
    icon: "CpuBolt",
    title: "Warehouse Automation",
    lead: "Warehouse",
    sub: "Automation",
    body: "Automates repetitive operational tasks such as inventory updates, order allocation, dispatch processing and workflow triggers to improve fulfillment consistency, team productivity, process visibility and operational scalability.",
  },
  {
    icon: "LinkCircle",
    title: "Connected Integrations",
    lead: "Connected",
    sub: "Integrations",
    body: "Integrates marketplaces, ecommerce platforms and warehouse operations into one connected workflow, eliminating manual order transfers, reducing processing delays, improving data accuracy and enabling real-time operational visibility.",
  },
];

/* Scrolling capabilities showcase — active large card + right-to-left marquee */
const TechnologyShowcase = () => {
  const [active, setActive] = useState(0);
  const cap = TECH[active]!;
  const loop = [...TECH, ...TECH];

  useEffect(() => {
    const id = setInterval(() => {
      setActive((a) => (a + 1) % TECH.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative mx-auto mt-12 md:pb-24">
      <div className="relative px-0 py-6 md:mt-10 md:py-10 lg:mt-14">
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent_0,#000_6%,#000_94%,transparent_100%)] md:pl-[460px] md:[mask-image:linear-gradient(to_right,transparent_0px,transparent_480px,#000_500px,#000_calc(100%-40px),transparent_100%)] lg:pl-[510px] lg:[mask-image:linear-gradient(to_right,transparent_0px,transparent_530px,#000_550px,#000_calc(100%-40px),transparent_100%)]">
          <div
            className="animate-marquee flex w-max items-stretch gap-4"
            style={{ animationDuration: "60s" }}
          >
            {loop.map((c, i) => (
              <div
                key={i}
                className="flex h-[170px] w-[190px] shrink-0 flex-col items-center justify-center rounded-2xl bg-[#EEE5E9] px-4 py-5 text-center transition-colors"
              >
                <SolarIcon name={c.icon} className="h-12 w-12 text-primary" />
                <p className="mt-3 font-display text-[13px] font-semibold leading-snug text-ink">
                  {c.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating detail card */}
      <div className="mt-4 md:absolute md:left-4 md:top-[37%] md:mt-0 md:w-[420px] md:-translate-y-1/2 lg:w-[460px]">
        <div
          key={cap.title}
          className="relative flex flex-col rounded-2xl border-2 border-primary bg-card p-5 px-6 shadow-[0_20px_60px_-15px_rgba(194,32,40,0.22)] md:min-h-[300px] md:p-6 md:px-8"
        >
          <div className="flex items-center gap-4">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-card">
              <SolarIcon name={cap.icon} className="h-9 w-9" />
            </span>
            <div className="min-w-0">
              <h3 className="font-display text-2xl font-bold leading-tight text-primary">
                {cap.lead}
              </h3>
              <p className="font-display text-base font-semibold leading-tight text-ink">
                {cap.sub}
              </p>
            </div>
          </div>
          <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{cap.body}</p>
          <div className="mt-auto flex justify-center pt-4">
            <Button
              onClick={() => scrollToId("contact-form")}
              className="w-fit rounded-full pl-5 pr-1.5"
            >
              Speak with Our Team
              <span className="ml-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary-foreground text-primary">
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TechnologySection = () => (
  <section className="border-b border-border bg-secondary/40 py-14 md:py-20">
    <div className="container">
      <SectionHeader
        align="center"
        className="mx-auto"
        title={
          <>
            Technology That Works Behind{" "}
            <span className="text-primary">Every Successful Order</span>
          </>
        }
        description="Behind every successful ecommerce order is a technology layer designed to improve visibility, accuracy, automation and operational reliability across the supply chain."
      />

      <TechnologyShowcase />
    </div>
  </section>
);

export default TechnologySection;
