import type { LandingConfig } from "../types";
import {
  Layers, Plug, Globe, Sliders, Database, Sparkles,
} from "lucide-react";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  layers: Layers,
  plug: Plug,
  globe: Globe,
  sliders: Sliders,
  database: Database,
};

interface Props {
  config: LandingConfig;
}

const LpTechEcosystem = ({ config }: Props) => {
  const items = config.tech;
  if (!items || items.length === 0) return null;

  return (
    <section className="relative border-b border-border bg-secondary/30 py-14 md:py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Technology
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-4xl">
            {config.techHeading ||
              "AAJ's Integrated Technology Ecosystem That Keeps Every Order Moving"}
          </h2>
          {config.techSubheading && (
            <p className="mt-3 text-base text-muted-foreground">{config.techSubheading}</p>
          )}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = (item.icon && ICONS[item.icon]) || Sparkles;
            return (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40 hover:shadow-md"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


export default LpTechEcosystem;
