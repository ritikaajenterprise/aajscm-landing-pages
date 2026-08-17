"use client";

import { useRef, useState } from "react";
import { clientLogo } from "./assets";

const logos: { src: string; alt: string }[] = [
  { src: clientLogo("Kidara.png"), alt: "Kidara" },
  { src: clientLogo("Lividora.png"), alt: "Lividora" },
  { src: clientLogo("Miko.png"), alt: "Miko" },
  { src: clientLogo("Portronics.png"), alt: "Portronics" },
  { src: clientLogo("Pyko.png"), alt: "Pyko" },
  { src: clientLogo("Rama.png"), alt: "Rama" },
  { src: clientLogo("Twinkl.png"), alt: "Twinkl" },
  { src: clientLogo("Twittles.png"), alt: "Twittles" },
  { src: clientLogo("Dipsy.png"), alt: "Dipsy" },
  { src: clientLogo("Haleon.png"), alt: "Haleon" },
];

const SLOTS = 6;

/** Section 2 — Trusted by Leading Ecommerce Brands Across India (roll cycle) */
const BrandLogos = () => {
  const [indices, setIndices] = useState<number[]>(() =>
    Array.from({ length: SLOTS }, (_, i) => i % logos.length),
  );
  const nextRef = useRef<number>(SLOTS);

  const handleIter = (slotIdx: number) => {
    setIndices((prev) => {
      const next = [...prev];
      next[slotIdx] = nextRef.current % logos.length;
      nextRef.current += 1;
      return next;
    });
  };

  return (
    <section className="relative overflow-hidden border-b border-border bg-background py-10 md:py-14">
      <div className="container relative">
        <p className="mb-6 text-center text-sm font-medium text-muted-foreground">
          Trusted by Leading <span className="font-semibold text-foreground">Ecommerce Brands</span>{" "}
          Across India
        </p>
        <div className="grid grid-cols-3 gap-x-6 gap-y-8 md:grid-cols-6 md:gap-8">
          {Array.from({ length: SLOTS }).map((_, slotIdx) => {
            const logoIdx = indices[slotIdx] ?? 0;
            const logo = logos[logoIdx] ?? logos[0]!;
            return (
              <div
                key={slotIdx}
                className="relative h-12 overflow-hidden px-1 sm:h-20 sm:px-2 md:h-[82px]"
              >
                <div
                  className="animate-logo-roll absolute inset-0 grid place-items-center"
                  style={{ animationDelay: `${slotIdx * 0.1}s` }}
                  onAnimationIteration={() => handleIter(slotIdx)}
                >
                  <img
                    key={logoIdx}
                    src={logo.src}
                    alt={logo.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;
