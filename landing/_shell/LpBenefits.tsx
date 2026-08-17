import type { LandingConfig } from "../types";

interface Props {
  config: LandingConfig;
}

const LpBenefits = ({ config }: Props) => {
  if (!config.benefits || config.benefits.length === 0) return null;
  return (
    <section className="border-b border-border bg-secondary/30 py-14 md:py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-4xl">
            {config.benefitsHeading || "Why AAJ"}
          </h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {config.benefits.map((b, i) => (
            <div key={b.title} className="rounded-xl border border-border bg-background p-6">
              <div className="text-sm font-semibold text-primary">0{i + 1}</div>
              <h3 className="mt-2 text-base font-semibold text-foreground">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LpBenefits;
