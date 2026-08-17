import type { LandingConfig } from "../types";
import { Button } from "@/components/ui/button";
import { scrollToId } from "./scroll";
import { ArrowRight, Check } from "lucide-react";

interface Props {
  config: LandingConfig;
}

/**
 * Solutions cards.
 * Fixed block size: the card never grows or shrinks.
 * Idle: wider image + larger title, text hidden.
 * Hover: image shrinks to a square thumbnail, title shrinks,
 * description + "Ideal For" chips slide in from the right.
 */
const LpSolutions = ({ config }: Props) => {
  const solutions = config.solutions;
  if (!solutions || solutions.length === 0) return null;

  return (
    <section
      id="services"
      className="relative border-b border-border bg-gradient-to-b from-background via-secondary/30 to-background py-14 md:py-20"
    >
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-4xl">
            {config.solutionsHeading}
          </h2>
          {config.solutionsSubheading && (
            <p className="mt-3 text-base text-muted-foreground">
              {config.solutionsSubheading}
            </p>
          )}
        </div>

        <div className="mx-auto mt-10 max-w-6xl space-y-5">
          {solutions.map((s) => (
            <article
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-4 transition-all duration-500 hover:border-primary/40 hover:shadow-lg md:h-44 md:p-5"
            >
              {/* Desktop layout: fixed-height row */}
              <div className="hidden md:flex md:items-center md:gap-5">
                {/* Image: landscape idle → square on hover */}
                <div className="shrink-0 overflow-hidden rounded-xl transition-all duration-500 ease-out h-32 w-56 group-hover:h-24 group-hover:w-24">
                  {s.image ? (
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="h-full w-full bg-primary/10" />
                  )}
                </div>

                {/* Text column: title + sliding details */}
                <div className="flex min-w-0 flex-1 flex-col justify-center">
                  <h3 className="text-lg font-bold tracking-tight text-foreground transition-all duration-500 group-hover:text-xs group-hover:lg:text-sm">
                    {s.title}
                  </h3>

                  {/* Sliding details */}
                  <div className="flex flex-col gap-2 opacity-0 translate-x-6 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                    <p className="text-xs leading-snug text-muted-foreground line-clamp-3">
                      {s.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
                        <Check className="h-3 w-3" /> Ideal For
                      </span>
                      {s.idealFor.map((chip) => (
                        <span
                          key={chip}
                          className="rounded-md border border-primary/20 bg-primary/5 px-1.5 py-0.5 text-[10px] font-medium text-foreground/80"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile layout: stacked, always expanded */}
              <div className="flex flex-col gap-4 md:hidden">
                {s.image && (
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="h-44 w-full object-cover"
                    />
                  </div>
                )}
                <h3 className="text-xl font-bold text-foreground">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
                <div>
                  <div className="mb-2 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-primary">
                    <Check className="h-3 w-3" /> Ideal For
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {s.idealFor.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-md border border-primary/20 bg-primary/5 px-2 py-1 text-[11px] font-medium text-foreground/80"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button asChild variant="destructive" size="lg">
            <a href="#contact-form" onClick={(e) => scrollToId("contact-form", e)}>
              Request a Callback <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LpSolutions;

