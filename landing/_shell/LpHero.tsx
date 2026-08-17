import HubSpotForm from "./HubSpotForm";
import type { LandingConfig } from "../types";
import {
  Target,
  ShieldCheck,
  Eye,
  TrendingUp,
  Home,
  Package,
  MapPin,
  Cpu,
  Layers,
  Users,
  Lock,
  Zap,
} from "lucide-react";

interface Props {
  config: LandingConfig;
}

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  target: Target,
  shield: ShieldCheck,
  eye: Eye,
  trend: TrendingUp,
  home: Home,
  box: Package,
  map: MapPin,
  cpu: Cpu,
  layers: Layers,
  users: Users,
  lock: Lock,
  zap: Zap,
};

function Icon({ name, className }: { name?: string; className?: string }) {
  const C = (name && ICONS[name]) || Target;
  return <C className={className} />;
}

function HighlightedHeadline({
  text,
  highlights = [],
}: {
  text: string;
  highlights?: string[];
}) {
  if (!highlights.length) return <>{text}</>;
  const sorted = [...highlights].sort((a, b) => b.length - a.length);
  const re = new RegExp(
    `(${sorted.map((s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
    "gi"
  );
  const parts = text.split(re);
  return (
    <>
      {parts.map((p, i) =>
        sorted.some((h) => h.toLowerCase() === p.toLowerCase()) ? (
          <span key={i} className="text-primary">
            {p}
          </span>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </>
  );
}

const LpHero = ({ config }: Props) => {
  const iconStats = config.heroIconStats ?? [];
  const bigStats = config.heroBigStats ?? [];
  const bottom = config.heroBottomFeatures ?? [];

  return (
    <>
    <section
      id="top"
      className="relative isolate flex min-h-[calc(100vh-var(--lp-header-h,64px))] flex-col justify-center border-b border-border bg-background"
    >
      <div className="container grid items-center gap-8 py-8 md:gap-10 md:py-10 lg:grid-cols-2 lg:gap-10">
        {/* LEFT */}
        <div className="flex flex-col justify-center">
          {config.heroEyebrow && (
            <div className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-background/80 px-3.5 py-1.5 text-xs font-semibold text-primary shadow-sm backdrop-blur md:text-sm">
              <span className="grid h-4 w-4 place-items-center rounded bg-primary/10">
                <Package className="h-2.5 w-2.5" />
              </span>
              {config.heroEyebrow}
            </div>
          )}

          <h1 className="text-[1.75rem] font-extrabold leading-[1.1] tracking-tight text-foreground md:text-4xl lg:text-[2.5rem] xl:text-[2.75rem]">
            <HighlightedHeadline
              text={config.heroHeadline}
              highlights={config.heroHighlightWords}
            />
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground md:mt-4 md:text-base">
            {config.heroSubheadline}
          </p>

          {iconStats.length > 0 && (
            <div className="mt-5 grid gap-2.5 sm:grid-cols-3">
              {iconStats.map((s) => (
                <div
                  key={s.title}
                  className="flex items-center gap-2.5 rounded-lg bg-background/70 p-2.5 backdrop-blur"
                >
                  <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                    <Icon name={s.icon} className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold leading-tight text-foreground md:text-sm">
                      {s.title}
                    </div>
                    <div className="text-[11px] leading-tight text-muted-foreground">
                      {s.subtitle}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {bigStats.length > 0 && (
            <div className="mt-4 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-border bg-border shadow-sm">
              {bigStats.map((s) => (
                <div
                  key={s.value}
                  className="flex items-center gap-2.5 bg-background px-3 py-3 md:px-4"
                >
                  <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-lg font-extrabold leading-none text-foreground md:text-xl">
                      {s.value}
                    </div>
                    <div className="mt-1 text-[10px] font-medium leading-tight text-muted-foreground md:text-[11px]">
                      {s.labelTop}
                      {s.labelBottom && (
                        <>
                          <br />
                          {s.labelBottom}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT — Form card */}
        <div className="relative lg:self-center">
          <div
            id="contact-form"
            className="relative overflow-hidden rounded-2xl border border-border bg-background p-5 shadow-2xl md:p-6"
          >
            <div className="absolute inset-x-6 top-0 h-1 rounded-b-full bg-gradient-to-r from-primary via-accent to-primary" />

            <h2 className="mb-4 text-center text-base font-bold leading-snug text-foreground md:text-lg">
              Fill out the Form and Accelerate your Brand's Journey to Success!
            </h2>

            <div className="lp-hubspot-form">
              <HubSpotForm slug={config.slug} formId={config.hubspotFormId} />
            </div>

            <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
              <Lock className="h-3.5 w-3.5 text-primary" />
              Your information is safe with us. We hate spam too.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Bottom feature strip — separate section, NO background image */}
    {bottom.length > 0 && (
      <section className="border-b border-border bg-background py-8 md:py-10">
        <div className="container">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-lg sm:grid-cols-2 lg:grid-cols-5">
            {bottom.map((f) => (
              <div
                key={f.title}
                className="flex items-start gap-3 bg-background p-4"
              >
                <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon name={f.icon} className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-bold leading-tight text-foreground">
                    {f.title}
                  </div>
                  <div className="mt-1 text-xs leading-snug text-muted-foreground">
                    {f.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )}
    </>
  );
};

export default LpHero;

