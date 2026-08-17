import type { LandingConfig } from "../types";
import type { LandingFeatureCard } from "../types";
import {
  Building2, Truck, Cpu, ClipboardCheck, Scaling, Users,
  Cog, ShieldCheck, MapPin, Plug, Sparkles,
} from "lucide-react";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  warehouse: Building2,
  truck: Truck,
  cpu: Cpu,
  clipboard: ClipboardCheck,
  scale: Scaling,
  users: Users,
  cog: Cog,
  shield: ShieldCheck,
  map: MapPin,
  plug: Plug,
};

interface Props {
  config: LandingConfig;
}

/**
 * Soft, editorial two-up card blocks for the competitive advantage section.
 * Cards are grouped in rows of two with a hairline divider and a shared
 * tinted surface to match the warm, brand-led reference style.
 */
const LpCompetitiveAdvantage = ({ config }: Props) => {
  const items = config.competitiveAdvantages;
  if (!items || items.length === 0) return null;

  // Build rows of two cards.
  const rows: LandingFeatureCard[][] = [];
  for (let i = 0; i < items.length; i += 2) {
    rows.push(items.slice(i, i + 2));
  }

  return (
    <section className="border-b border-border bg-background py-14 md:py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-[40px]">
            {config.competitiveAdvantageHeading}
          </h2>
          {config.competitiveAdvantageSubheading && (
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              {config.competitiveAdvantageSubheading}
            </p>
          )}
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-primary/10 bg-primary/5">
          <div className="divide-y divide-primary/10">
            {rows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="grid grid-cols-1 divide-y divide-primary/10 md:grid-cols-2 md:divide-y-0 md:divide-x"
              >
                {row.map((item) => {
                  const Icon = (item.icon && ICONS[item.icon]) || Sparkles;
                  return (
                    <article
                      key={item.title}
                      className="group flex flex-col items-center px-6 py-8 text-center transition-colors hover:bg-primary/[0.03] md:px-8 md:py-10 lg:px-12 lg:py-12"
                    >
                      <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-base font-semibold leading-snug text-primary md:text-lg">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-sm text-sm leading-relaxed text-foreground/80">
                        {item.description}
                      </p>
                    </article>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LpCompetitiveAdvantage;
