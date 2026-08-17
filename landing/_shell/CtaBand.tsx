"use client";

import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { scrollToId } from "./scroll";

export interface CtaBandProps {
  title: ReactNode;
  highlight?: ReactNode;
  description?: ReactNode;
  label: string;
  className?: string;
}

/**
 * Full-width dark CTA band used between sections and as the final CTA.
 * Shared by the ecommerce LP (which uses it three times) and the
 * config-driven shell, which renders one after the tech section when
 * `midCtaHeading` is set.
 */
const CtaBand = ({ title, highlight, description, label, className }: CtaBandProps) => (
  <section className={cn("bg-surface py-8 lg:py-10", className)}>
    <div className="container">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-foreground p-5 text-background shadow-elevated sm:p-6 md:p-8 lg:p-10">
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="bg-grid absolute inset-0 opacity-[0.06]" />

        <div className="relative grid gap-6 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <h2 className="font-display text-lg font-semibold leading-snug tracking-normal text-background [overflow-wrap:anywhere] [text-wrap:balance] sm:text-2xl sm:tracking-tight md:text-3xl lg:text-4xl">
              {title}
              {highlight ? (
                <>
                  {" "}
                  <span className="text-[#FFD966]">{highlight}</span>
                </>
              ) : null}
            </h2>
            {description ? (
              <p className="mt-4 max-w-2xl text-sm text-background/75 md:text-base">
                {description}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col gap-3 lg:col-span-4 lg:items-end">
            <Button
              size="lg"
              variant="destructive"
              className="group w-full lg:w-auto"
              onClick={() => scrollToId("contact-form")}
            >
              {label}
              <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CtaBand;
