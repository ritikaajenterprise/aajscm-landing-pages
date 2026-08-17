import type { LandingConfig } from "../types";
import {
  ShoppingBag, Store, Shirt, Package, Cpu, HeartPulse, Car, Factory,
  Sparkles as SparklesIcon, Sofa, BookOpen, Dumbbell, Sparkles,
} from "lucide-react";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  ecommerce: ShoppingBag,
  retail: Store,
  fashion: Shirt,
  fmcg: Package,
  electronics: Cpu,
  healthcare: HeartPulse,
  automotive: Car,
  manufacturing: Factory,
  beauty: SparklesIcon,
  furniture: Sofa,
  books: BookOpen,
  sports: Dumbbell,
};

interface Props {
  config: LandingConfig;
}

/**
 * Industries We Serve — dark image cards with icon chip, name and tagline.
 */
const LpIndustries = ({ config }: Props) => {
  const items = config.industries;
  if (!items || items.length === 0) return null;

  return (
    <section className="border-b border-border bg-background py-14 md:py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-[40px]">
            {config.industriesHeading}
          </h2>
          {config.industriesSubheading && (
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              {config.industriesSubheading}
            </p>
          )}
        </div>

        {/* Auto-playing infinite marquee: track holds two copies of the cards
            and animate-marquee shifts it by -50% for a seamless loop. */}
        <div className="mt-12 overflow-hidden">
          <div className="flex w-max gap-4 animate-marquee hover:[animation-play-state:paused]">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                aria-hidden={copy === 1 || undefined}
                className="flex shrink-0 gap-4"
              >
                {items.map((item) => {
                  const Icon = ICONS[item.icon] || Sparkles;
                  return (
                    <article
                      key={item.name}
                      className="group relative w-[240px] shrink-0 overflow-hidden rounded-2xl bg-neutral-900 shadow-md transition-all duration-300 hover:shadow-xl sm:w-[280px] md:w-[322px]"
                    >
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.name}
                          loading="lazy"
                          className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-105"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/95 via-neutral-950/60 to-neutral-950/20" />
                      <div className="relative flex aspect-[4/5] flex-col justify-between p-4 md:p-5">
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 backdrop-blur-sm">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-base font-semibold leading-tight text-white md:text-lg">
                            {item.name}
                          </h3>
                          <p className="mt-1 text-xs leading-snug text-white/70 md:text-sm">
                            {item.tagline}
                          </p>
                        </div>
                      </div>
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

export default LpIndustries;
