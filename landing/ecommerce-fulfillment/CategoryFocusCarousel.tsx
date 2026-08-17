"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

export type CategoryItem = {
  img: string;
  label: string;
};

type Props = {
  items: CategoryItem[];
  travelMs?: number;
  holdMs?: number;
};

/**
 * Focus carousel: the centre slot is large, coloured and lifted above the
 * baseline; neighbours are smaller, greyscale and muted.
 */
const CategoryFocusCarousel = ({ items, travelMs = 700, holdMs = 2000 }: Props) => {
  const n = items.length;
  const [idx, setIdx] = useState(0);
  const [noTransition, setNoTransition] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  useEffect(() => {
    if (n < 2) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    timer.current = setInterval(() => setIdx((i) => i + 1), travelMs + holdMs);
    return () => clearInterval(timer.current);
  }, [n, travelMs, holdMs]);

  const handleTransitionEnd = (e: React.TransitionEvent<HTMLUListElement>) => {
    if (e.target !== e.currentTarget || e.propertyName !== "transform") return;
    if (idx < n) return;
    setNoTransition(true);
    setIdx(idx - n);
  };

  useLayoutEffect(() => {
    if (!noTransition) return;
    let raf2 = 0;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => setNoTransition(false));
    });
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, [noTransition]);

  const loop = [...items, ...items, ...items];
  const centre = n + idx;
  const ease = "cubic-bezier(0.33, 0, 0.15, 1)";

  return (
    <div
      className="relative overflow-hidden pt-4 [--slot:180px] sm:[--slot:230px] lg:[--slot:280px]"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%)",
      }}
    >
      <ul
        className="flex list-none items-end"
        onTransitionEnd={handleTransitionEnd}
        style={{
          transform: `translate3d(calc(50% - (var(--slot) * ${centre}) - (var(--slot) / 2)), 0, 0)`,
          transition: noTransition ? "none" : `transform ${travelMs}ms ${ease}`,
          willChange: "transform",
          backfaceVisibility: "hidden",
        }}
      >
        {loop.map((item, p) => {
          const raw = (((p - centre) % n) + n) % n;
          const d = Math.abs(raw > n / 2 ? raw - n : raw);
          const isCentre = d === 0;
          const scale = isCentre ? 1.13 : d === 1 ? 0.62 : 0.55;
          const lift = isCentre ? -28 : 0;
          const opacity = isCentre ? 1 : d === 1 ? 0.75 : 0.5;

          return (
            <li
              key={`${item.label}-${p}`}
              className="flex shrink-0 flex-col items-center justify-end"
              style={{ width: "var(--slot)" }}
              aria-hidden={!isCentre}
            >
              <div
                className="flex h-[190px] w-full items-end justify-center sm:h-[230px] lg:h-[260px]"
                style={{
                  transform: `translate3d(0, ${lift}px, 0) scale(${scale})`,
                  filter: isCentre ? "none" : "grayscale(1)",
                  opacity,
                  transition: `transform ${travelMs}ms ${ease}, filter ${travelMs}ms ease, opacity ${travelMs}ms ease`,
                  willChange: "transform, filter, opacity",
                  backfaceVisibility: "hidden",
                }}
              >
                <img
                  src={item.img}
                  alt={`${item.label} fulfillment by AAJ SCM`}
                  loading="eager"
                  decoding="async"
                  draggable={false}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <span
                className="mt-0.5 block text-center"
                style={{ transition: `color ${travelMs}ms ease, opacity ${travelMs}ms ease` }}
              >
                <span
                  className={
                    isCentre
                      ? "text-base font-bold text-primary sm:text-lg"
                      : "text-xs font-normal text-muted-foreground sm:text-sm"
                  }
                >
                  {item.label}
                </span>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoryFocusCarousel;
