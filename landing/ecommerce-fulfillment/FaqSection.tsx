"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_IMAGE } from "./assets";

const FAQS: { question: string; answer: string }[] = [
  {
    question: "Do you have a minimum order volume or inventory requirement?",
    answer:
      "No fixed minimums. We support both emerging ecommerce brands and high-volume businesses with flexible fulfillment solutions.",
  },
  {
    question: "Can you integrate with my ecommerce website and marketplaces?",
    answer:
      "Yes. We can integrate with ecommerce websites, marketplaces, ERP systems and other business platforms during onboarding.",
  },
  {
    question: "Can you handle both small and high-volume ecommerce orders?",
    answer:
      "Yes. Our fulfillment operations are designed to support changing order volumes and seasonal demand spikes.",
  },
  {
    question: "Do you provide custom packaging and value-added services?",
    answer:
      "Yes. We offer packaging, labeling, kitting, quality checks and other value-added fulfillment services based on your requirements.",
  },
  {
    question: "How do you manage ecommerce returns?",
    answer:
      "We handle returns receiving, inspection, inventory updates and reintegration of eligible products as per your return process.",
  },
  {
    question: "How much does your ecommerce fulfillment service cost?",
    answer:
      "Pricing depends on storage, order volume, SKU count, fulfillment activities, packaging and value-added services. Contact us for a customized quote.",
  },
  {
    question: "How quickly can I start my ecommerce fulfillment operations?",
    answer:
      "Timelines depend on inventory, integrations and operational requirements. Our team manages setup, testing and go-live for a smooth transition.",
  },
];

/** Frequently Asked Questions — two-column layout with supporting image. */
const FaqSection = () => (
  <section
    aria-label="Frequently Asked Questions"
    className="border-b border-border bg-secondary/40 py-14 md:py-20"
  >
    <div className="container">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-12">
        <div className="flex h-full flex-col lg:col-span-5">
          <h2 className="font-display text-3xl font-semibold leading-[1.15] md:text-4xl lg:text-[44px]">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Quick answers to the questions ecommerce brands ask before outsourcing warehousing,
            fulfillment, returns and marketplace operations to AAJ SCM.
          </p>
          <div className="relative mt-8 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-background shadow-elevated lg:aspect-auto lg:min-h-0 lg:flex-1 lg:basis-0">
            <img
              src={FAQ_IMAGE}
              alt="AAJ SCM ecommerce fulfillment FAQ"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="lg:col-span-7">
          <div
            className="overflow-hidden rounded-2xl border border-border bg-card"
            style={{
              boxShadow:
                "0 8px 32px -8px hsl(var(--primary) / 0.18), 0 1px 2px 0 hsl(var(--primary) / 0.06)",
            }}
          >
            <Accordion
              type="single"
              collapsible
              defaultValue="faq-0"
              className="divide-y divide-border"
            >
              {FAQS.map((item, i) => (
                <AccordionItem key={item.question} value={`faq-${i}`} className="border-0 px-6">
                  <AccordionTrigger className="py-5 text-left font-display text-base font-semibold text-ink hover:no-underline md:text-lg">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FaqSection;
