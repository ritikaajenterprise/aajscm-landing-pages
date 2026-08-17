import type { LandingConfig } from "../types";
import {
  Eye, Rocket, Smile, MapPinned, ShieldCheck, TrendingUp, Sparkles,
} from "lucide-react";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  eye: Eye,
  rocket: Rocket,
  smile: Smile,
  map: MapPinned,
  shield: ShieldCheck,
  trend: TrendingUp,
};

interface Props {
  config: LandingConfig;
}

/**
 * Split layout: a sticky narrative panel on the left with a primary
 * accent block, and an alternating-row benefit list on the right where
 * each row sits on a connector rail. Avoids generic 3-up card grids.
 */
const LpSupplyChain = ({ config }: Props) => {
  const items = config.supplyChain;
  if (!items || items.length === 0) return null;

  return (
    <section className="relative border-b border-border bg-background py-16 md:py-24">
      <div className="container grid gap-12 lg:grid-cols-[0.85fr_1.4fr] lg:gap-16">
        {/* Sticky narrative panel */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-8 md:p-10">
            <div
              className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-primary/10 blur-3xl"
              aria-hidden
            />
            <div className="relative">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-md">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-[34px] lg:leading-[1.15]">
                {config.supplyChainHeading || "How AAJ SCM Strengthens Your Supply Chain"}
              </h2>
              {config.supplyChainSubheading && (
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {config.supplyChainSubheading}
                </p>
              )}
              <div className="mt-6 flex items-center gap-2">
                <span className="h-1 w-10 rounded-full bg-primary" />
                <span className="h-1 w-2 rounded-full bg-primary/40" />
                <span className="h-1 w-2 rounded-full bg-primary/20" />
              </div>
            </div>
          </div>
        </div>

        {/* Benefit list with connector rail */}
        <div className="relative">
          <div
            className="absolute bottom-2 left-6 top-2 hidden w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent md:block"
            aria-hidden
          />
          <ul className="space-y-5">
            {items.map((item, i) => {
              const Icon = (item.icon && ICONS[item.icon]) || Sparkles;
              return (
                <li
                  key={item.title}
                  className="relative md:pl-20"
                >
                  <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-background text-primary shadow-sm md:inline-flex">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="rounded-2xl border border-border bg-card p-6 transition hover:border-primary/40 hover:shadow-md md:p-7">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary md:hidden">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-baseline justify-between gap-3">
                          <h3 className="text-lg font-semibold text-foreground">
                            {item.title}
                          </h3>
                          <span className="hidden font-mono text-xs text-muted-foreground/50 md:inline">
                            0{i + 1}
                          </span>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LpSupplyChain;
