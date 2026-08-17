import type { LandingConfig } from "../types";
import {
  Barcode, Building2, Truck, Layers, Users, Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  barcode: Barcode,
  warehouse: Building2,
  truck: Truck,
  layers: Layers,
  users: Users,
};

interface Props {
  config: LandingConfig;
}

/**
 * Bento layout (5 tiles) — mirrors reference image-21:
 *   col1: top + bottom
 *   col2: single tall tile spanning both rows
 *   col3: top + bottom
 */
const PLACEMENT = [
  "md:col-start-1 md:row-start-1",
  "md:col-start-1 md:row-start-2",
  "md:col-start-2 md:row-start-1 md:row-span-2",
  "md:col-start-3 md:row-start-1",
  "md:col-start-3 md:row-start-2",
];

const LpBusinessModels = ({ config }: Props) => {
  const items = config.businessModels;
  if (!items || items.length === 0) return null;

  return (
    <section className="border-b border-border bg-secondary/20 py-14 md:py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-4xl">
            {config.businessModelsHeading}
          </h2>
          {config.businessModelsSubheading && (
            <p className="mt-3 text-base text-muted-foreground">
              {config.businessModelsSubheading}
            </p>
          )}
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2 md:auto-rows-fr">
          {items.slice(0, 5).map((m, i) => {
            const Icon = (m.icon && ICONS[m.icon]) || Sparkles;
            const isFeature = i === 2;
            return (
              <article
                key={m.title}
                className={cn(
                  "group relative flex flex-col justify-between overflow-hidden rounded-2xl border p-6 transition-all duration-300 md:p-7",
                  PLACEMENT[i],
                  isFeature
                    ? "border-primary bg-primary text-primary-foreground shadow-lg hover:shadow-xl"
                    : "border-border bg-card hover:border-primary/40 hover:shadow-md"
                )}
              >
                <div
                  className={cn(
                    "inline-flex h-12 w-12 items-center justify-center rounded-xl",
                    isFeature
                      ? "bg-primary-foreground/15 text-primary-foreground ring-1 ring-primary-foreground/25"
                      : "bg-primary/10 text-primary"
                  )}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <div className={cn("mt-6", isFeature && "md:mt-auto")}>
                  <h3
                    className={cn(
                      "font-bold leading-snug",
                      isFeature ? "text-xl md:text-2xl" : "text-lg md:text-xl"
                    )}
                  >
                    {m.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-2 text-sm leading-relaxed md:text-base",
                      isFeature ? "text-primary-foreground/85" : "text-muted-foreground"
                    )}
                  >
                    {m.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LpBusinessModels;
