import type { LandingConfig } from "../types";
import { Building2, Users, Cpu, Workflow, ShieldCheck } from "lucide-react";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  infrastructure: Building2,
  people: Users,
  technology: Cpu,
  processes: Workflow,
};

interface Props {
  config: LandingConfig;
}

/**
 * Architectural grid layout — four pillar cards arranged in a clean 2x2
 * grid with a subtle central "Operational Readiness" badge on desktop.
 */
const LpFourPillars = ({ config }: Props) => {
  const pillars = config.pillars;
  if (!pillars || pillars.length === 0) return null;

  return (
    <section className="border-b border-border bg-secondary py-14 md:py-20">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <span className="mb-3 block text-xs font-bold uppercase tracking-[0.25em] text-primary">
            The Foundation
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-ink md:text-3xl lg:text-4xl">
            {config.pillarsHeading}
          </h2>
        </div>

        <div className="relative mx-auto max-w-5xl">
          {/* Center badge — visible only on large screens where the grid has a crossing point */}
          <div className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 flex-col items-center lg:flex">
            <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full border border-border bg-card p-4 text-center shadow-elevated ring-8 ring-secondary">
              <div className="mb-2 inline-flex rounded-full bg-primary p-2 text-primary-foreground">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <span className="text-[10px] font-bold uppercase leading-tight tracking-tighter text-muted-foreground">
                Operational
                <br />
                Readiness
              </span>
            </div>
          </div>

          {/* 2x2 grid with 1px hairline dividers */}
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-sm md:grid-cols-2">
            {pillars.map((p) => {
              const Icon = (p.icon && ICONS[p.icon]) || ShieldCheck;
              return (
                <div
                  key={p.label}
                  className="group bg-card p-8 transition-colors hover:bg-muted/50 lg:p-12"
                >
                  <div className="flex h-full flex-col">
                    <div className="mb-6 inline-flex items-center justify-center self-start rounded-lg bg-primary-soft p-3 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-8 w-8" />
                    </div>
                    <span className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
                      {p.label}
                    </span>
                    <h3 className="mb-4 text-xl font-bold text-ink">
                      {p.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {config.pillarsSubheading && (
          <div className="mx-auto mt-10 max-w-4xl text-center md:mt-12">
            <p className="text-sm font-medium text-muted-foreground">
              {config.pillarsSubheading}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default LpFourPillars;
