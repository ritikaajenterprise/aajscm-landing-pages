import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToId } from "./scroll";
import type { LandingConfig } from "../types";

interface Props {
  config: LandingConfig;
}

const LpFinalCta = ({ config }: Props) => {
  const trustItems = config.finalCtaMicroTrust
    ? config.finalCtaMicroTrust.split("·").map((s) => s.trim()).filter(Boolean)
    : [];

  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-r from-primary/10 via-primary/[0.03] to-primary/10 py-14 md:py-16">
      <div className="container relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-12">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-primary md:text-4xl lg:text-[44px]">
            {config.finalCtaHeading}
          </h2>
          {config.finalCtaSubheading && (
            <p className="mt-5 text-base text-foreground/80 md:text-lg">
              {config.finalCtaSubheading}
            </p>
          )}
          {trustItems.length > 0 && (
            <ul className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-3">
              {trustItems.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-semibold text-foreground md:text-base">
                  <Check className="h-5 w-5 shrink-0 text-primary" strokeWidth={3} />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="shrink-0">
          <Button asChild size="lg" className="px-8 text-base shadow-md">
            <a href="#contact-form" onClick={(e) => scrollToId("contact-form", e)}>
              Talk to Our Team
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LpFinalCta;
