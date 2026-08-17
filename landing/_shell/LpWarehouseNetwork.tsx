import { useState } from "react";
import type { LandingConfig, LandingWarehouse } from "../types";
import { MapPin, Users, ShieldCheck, Layers, Maximize2 } from "lucide-react";

// Static map of city → image asset.
const bhiwandi = "/lp/warehousing/wh/Warehouse_in_Bhiwandi.jpg";
const bangalore = "/lp/warehousing/wh/Warehouse_in_Bangalore.jpg";
const delhi = "/lp/warehousing/wh/Warehouse_in_Delhi.jpg";
const hyderabad = "/lp/warehousing/wh/Warehouse_in_Hyderabad.jpg";
const chennai = "/lp/warehousing/wh/Warehouse_in_Chennai.jpg";
const gurgaon = "/lp/warehousing/wh/Warehouse_in_Gurgaon_3.jpg";
const sonipat = "/lp/warehousing/wh/Warehouse_in_Sonipat.jpg";
const kundli = "/lp/warehousing/wh/Warehouse_in_Kundli.jpg";
const noida = "/lp/warehousing/wh/Warehouse_in_Noida_3.jpg";
const ghaziabad = "/lp/warehousing/wh/Warehouse_in_Ghaziabad.jpg";
const kolkata = "/lp/warehousing/wh/Warehouse_in_Kolkata_2.jpg";

const IMAGE_MAP: Record<string, string> = {
  delhi,
  bhiwandi,
  mumbai: bhiwandi,
  bangalore,
  kolkata,
  hyderabad,
  ghaziabad,
  sonipat,
  kundli,
  chennai,
  gurgaon,
  gurugram: gurgaon,
  noida,
};

function imageFor(name: string): string {
  const key = name.toLowerCase().replace(/\s*\(.+\)\s*/g, "").trim();
  return IMAGE_MAP[key] || delhi;
}

function descriptionFor(w: LandingWarehouse): string {
  if (w.description) return w.description;
  const cov = w.coverage.join(", ");
  return `Strategically located in ${w.name.replace(/\s*\(.+\)\s*/g, "")}, our warehouse ensures quick deliveries to your customers across ${cov}.`;
}

interface Props {
  config: LandingConfig;
}

const LpWarehouseNetwork = ({ config }: Props) => {
  const warehouses = config.warehouses;
  const [active, setActive] = useState(0);
  if (!warehouses || warehouses.length === 0) return null;

  const w = warehouses[active];
  const stats = [
    {
      icon: Users,
      label: "Team",
      value: w.team ?? "Trained Supply Chain Professionals",
    },
    {
      icon: ShieldCheck,
      label: "Security",
      value: w.security ?? "24/7 Security with 90-Day CCTV Storage",
    },
    {
      icon: Layers,
      label: "Racking",
      value: w.racking ?? "Modern Racking with MHEs",
    },
    {
      icon: Maximize2,
      label: "Space",
      value: w.capacity,
    },
  ];

  return (
    <section className="relative overflow-hidden border-b border-border bg-primary/5 py-14 md:py-20">
      <div className="container relative">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-4xl">
            {config.warehousesHeading}
          </h2>
          {config.warehousesSubheading && (
            <p className="mt-3 text-base text-muted-foreground">
              {config.warehousesSubheading}
            </p>
          )}
        </div>

        {/* Pill tabs — single line, horizontal scroll on overflow */}
        <div className="mb-8 -mx-4 overflow-x-auto px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex w-max min-w-full justify-start gap-2.5 md:justify-center md:gap-3">
            {warehouses.map((wh, i) => {
              const isActive = i === active;
              return (
                <button
                  key={wh.name}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition-all md:px-5 md:py-2.5 ${
                    isActive
                      ? "border-primary bg-primary text-primary-foreground shadow-md"
                      : "border-primary/40 bg-background text-foreground hover:border-primary hover:text-primary"
                  }`}
                >
                  {wh.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Detail panel */}
        <div className="mx-auto grid max-w-6xl gap-6 rounded-2xl bg-background/40 p-2 lg:grid-cols-[420px_1fr] lg:gap-8 lg:p-0">
          {/* Image */}
          <div className="relative overflow-hidden rounded-2xl">
            <img
              key={w.name}
              src={imageFor(w.name)}
              alt={`AAJ ${w.name} warehouse`}
              className="h-64 w-full object-cover md:h-80 lg:h-full"
            />
            <div className="absolute left-4 top-4 rounded-md bg-background/95 px-3 py-1.5 shadow">
              <span className="text-sm font-bold tracking-tight text-primary">
                AAJ
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center p-2 lg:p-6">
            <h3 className="text-2xl font-bold text-primary md:text-3xl">
              Warehouse Services in {w.name}
            </h3>
            {w.address && (
              <p className="mt-3 text-sm font-semibold text-foreground md:text-base">
                {w.address}
              </p>
            )}
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              {descriptionFor(w)}
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="flex items-start gap-3 rounded-xl border border-primary/15 bg-background p-3.5"
                >
                  <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                    <s.icon className="h-4.5 w-4.5" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-sm font-bold text-primary">{s.label}</div>
                    <div className="text-xs leading-snug text-foreground/80 md:text-sm">
                      {s.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {w.bestFor.map((b) => (
                <span
                  key={b}
                  className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LpWarehouseNetwork;
