import type { LandingConfig } from "../types";
import { scrollToId } from "./scroll";
import { Button } from "@/components/ui/button";

interface Props {
  config: LandingConfig;
}

/**
 * Services grid. CTA at the bottom scrolls back to the hero form.
 */
const LpServices = ({ config }: Props) => {
  if (!config.services || config.services.length === 0) return null;
  return (
    <section id="services" className="border-b border-border py-14 md:py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-4xl">
            {config.servicesHeading || "What We Offer"}
          </h2>
          {config.servicesSubheading && (
            <p className="mt-3 text-base text-muted-foreground">
              {config.servicesSubheading}
            </p>
          )}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {config.services.map((s) => (
            <article
              key={s.title}
              className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button
            asChild
            variant="destructive"
            size="lg"
          >
            <a href="#contact-form" onClick={(e) => scrollToId("contact-form", e)}>
              Request a Callback
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LpServices;
