"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeader from "./SectionHeader";

type Stat = {
  numeric: number;
  prefix?: string;
  suffix?: string;
  unit?: string;
  label: string;
  decimals?: number;
};

const stats: Stat[] = [
  { numeric: 99, suffix: "%", label: "ORDER ACCURACY" },
  { numeric: 5, suffix: " lac", label: "SKUS IN INVENTORY" },
  { numeric: 20000, suffix: "+", label: "PIN CODES SERVED" },
  { numeric: 12, suffix: "+", label: "FULFILLMENT CENTERS" },
  { numeric: 24, suffix: "x7", label: "OPERATIONAL WAREHOUSES" },
  { numeric: 200, suffix: "+", label: "BRANDS MANAGED" },
  { numeric: 1, suffix: " Mn+", unit: "sq ft", label: "WAREHOUSE NETWORK" },
  { numeric: 60, prefix: "<", label: "MIN QUICK COMMERCE DISPATCH" },
];

const formatNumber = (n: number, decimals = 0) =>
  decimals > 0 ? n.toFixed(decimals) : Math.round(n).toLocaleString("en-IN");

const CountUp = ({
  to,
  decimals = 0,
  duration = 1600,
}: {
  to: number;
  decimals?: number;
  duration?: number;
}) => {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              setVal(to * eased);
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to, duration]);

  return <span ref={ref}>{formatNumber(val, decimals)}</span>;
};

/** Section 9 (stats) — Proven at Scale. Trusted by Growing Ecommerce Brands. */
const ScaleStats = () => (
  <section
    id="proven-at-scale"
    className="relative overflow-hidden border-b border-border bg-background py-10 lg:py-12"
  >
    <div className="container relative">
      <SectionHeader
        align="center"
        title={
          <span className="text-[26px] md:text-3xl lg:text-[34px]">
            Proven at Scale. Trusted by{" "}
            <span className="text-primary">Growing Ecommerce Brands.</span>
          </span>
        }
      />

      <div className="relative mt-6">
        <div className="relative mx-auto mt-2 w-full max-w-6xl">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 grid grid-cols-2 md:grid-cols-4"
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 90% at center, black 35%, transparent 95%)",
              maskImage: "radial-gradient(ellipse 80% 90% at center, black 35%, transparent 95%)",
            }}
          >
            {stats.map((s) => (
              <div
                key={`line-${s.label}`}
                className="border-b border-r border-border [&:nth-child(2n)]:border-r-0 [&:nth-last-child(-n+2)]:border-b-0 md:[&:nth-child(2n)]:border-r md:[&:nth-child(4n)]:border-r-0 md:[&:nth-last-child(-n+2)]:border-b md:[&:nth-last-child(-n+4)]:border-b-0"
              />
            ))}
          </div>

          <ul className="relative grid grid-cols-2 md:grid-cols-4">
            {stats.map((s) => (
              <li
                key={s.label}
                className="group px-3 py-6 text-center transition-all duration-500 hover:-translate-y-1 md:px-4"
              >
                <div className="font-display text-2xl font-bold text-primary md:text-3xl">
                  {s.prefix}
                  <CountUp to={s.numeric} decimals={s.decimals ?? 0} />
                  {s.suffix}
                  {s.unit && (
                    <span className="ml-1 text-base font-semibold text-primary/80">{s.unit}</span>
                  )}
                </div>
                <div className="mt-2 text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                  {s.label}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default ScaleStats;
