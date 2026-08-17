import * as AccordionPrimitive from "@radix-ui/react-accordion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { scrollToId } from "./scroll";
import type { LandingConfig } from "../types";

interface Props {
  config: LandingConfig;
}

const LpFaq = ({ config }: Props) => {
  if (!config.faqs || config.faqs.length === 0) return null;
  return (
    <section className="relative overflow-hidden border-b border-border bg-background py-14 md:py-20">
      {/* Soft pink radial glow on the left, matching reference */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-0 hidden h-[520px] w-[520px] rounded-full bg-primary/20 blur-3xl md:block"
      />
      <div className="container relative">
        <div className="grid gap-10 md:grid-cols-2 md:gap-14 lg:gap-20">
          {/* Left: heading + CTA */}
          <div className="flex flex-col justify-start">
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
              {config.faqHeading || "Frequently Asked Questions"}
            </h2>
            <p className="mt-4 max-w-md text-base text-muted-foreground md:text-lg">
              Find answers to common questions about our 3PL, warehousing and
              fulfillment services.
            </p>
            <div className="mt-8">
              <Button asChild variant="destructive" size="lg">
                <a
                  href="#contact-form"
                  onClick={(e) => scrollToId("contact-form", e)}
                >
                  Get Quote Now
                </a>
              </Button>
            </div>
          </div>

          {/* Right: accordion list */}
          <Accordion
            type="single"
            collapsible
            className="flex w-full flex-col gap-3"
          >
            {config.faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="overflow-hidden rounded-xl border-none bg-primary/5 transition-colors data-[state=open]:bg-primary/10"
              >
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="group flex flex-1 items-center justify-between gap-4 px-5 py-4 text-left text-base font-medium text-foreground transition-all hover:text-primary md:text-lg [&[data-state=open]>svg]:rotate-45">
                    <span>{f.q}</span>
                    <Plus className="h-5 w-5 shrink-0 text-primary transition-transform duration-200" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="px-5 pb-4 pt-0 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default LpFaq;
