"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { clientLogo } from "./assets";

export type Testimonial = {
  q: string;
  a: string;
  d?: string;
  c: string;
  logo?: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    q: "AAJ SCM has been a dependable fulfillment partner for our brand. Their team manages inventory accurately and keeps dispatches on schedule, which has helped us grow without operational stress.",
    a: "Kivofa Team",
    c: "Kivofa",
    logo: clientLogo("Kivofa.png"),
  },
  {
    q: "Launching across Amazon, Meesho, and Flipkart was a big step, but AAJ SCM's integrated ecommerce management system made our multi-channel operations seamless. Their reliable fulfillment has helped us scale confidently while their proactive support has been invaluable.",
    a: "Dash Exports Team",
    c: "Dash Exports",
    logo: clientLogo("Dash_Exports.png"),
  },
  {
    q: "Partnering with AAJ has been an exceptional experience. I no longer need to worry about inventory management or timely dispatches. Their team consistently maintains our marketplace SLAs, allowing us to focus on growing our business.",
    a: "Talking Sox Team",
    c: "Talking Sox",
    logo: clientLogo("TalkingSox.webp"),
  },
  {
    q: "Partnering with AAJ has been a game-changer for our ecommerce operations. Their team seamlessly onboarded and integrated our brand across Amazon, Flipkart, Myntra, and Shopify, making our fulfillment operations efficient and scalable.",
    a: "Reasonable Brand Team",
    c: "Reasonable Brand",
    logo: clientLogo("Reasonable_Brand.png"),
  },
  {
    q: "AAJ SCM's warehousing and fulfillment support has made our operations smooth and efficient. From accurate inventory handling to timely dispatches, their team has helped us focus on growing our brand while they manage the backend with consistency.",
    a: "Sandbox Team",
    c: "The Sandbox Clothing Co.",
    logo: clientLogo("Sandbox.webp"),
  },
  {
    q: "Beyond warehousing, AAJ provides strategic and reliable execution that allows us to scale with confidence. Their responsiveness and operational expertise have made them an indispensable extension of our team.",
    a: "Sensa Lab Wellness Team",
    c: "Sensa Lab Wellness (Tantrix)",
    logo: clientLogo("Sensa_Lab_Wellness.png"),
  },
];

const TestimonialCard = ({ t, onOpen }: { t: Testimonial; onOpen: () => void }) => (
  <article className="relative flex h-full flex-col rounded-2xl border border-border bg-card p-4 shadow-sm sm:rounded-3xl sm:p-5">
    {t.logo ? (
      <div className="mb-2 flex h-12 w-[150px] items-center rounded-lg bg-background px-2 sm:h-14 sm:w-[170px]">
        <img
          src={t.logo}
          alt={`${t.c} logo`}
          loading="lazy"
          decoding="async"
          width={170}
          height={56}
          className="max-h-10 max-w-full object-contain sm:max-h-12"
        />
      </div>
    ) : (
      <div className="mb-2 flex h-12 w-[170px] items-center text-xs font-semibold uppercase tracking-wide text-ink sm:h-14">
        {t.c}
      </div>
    )}
    <p className="line-clamp-3 text-xs leading-relaxed text-ink sm:text-[13px]">{t.q}</p>
    <button
      type="button"
      onClick={onOpen}
      className="mt-1 self-start text-[11px] font-semibold text-primary hover:underline sm:text-xs"
    >
      Read more
    </button>
    <div className="mt-auto border-t border-border pt-2 sm:pt-3">
      <div className="text-xs font-semibold text-muted-foreground sm:text-sm">
        {t.a.toUpperCase()}
        {t.d ? (
          <span className="text-[10px] font-medium text-muted-foreground sm:text-xs"> ({t.d})</span>
        ) : null}
      </div>
    </div>
  </article>
);

/**
 * Full-quote modal. The Lovable source used a Radix Dialog here; this build
 * keeps the same look with a plain overlay so the LP doesn't pull in an
 * extra Radix package for one read-more popup.
 */
const TestimonialModal = ({ t, onClose }: { t: Testimonial; onClose: () => void }) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Testimonial from ${t.c}`}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl rounded-2xl border border-border bg-card"
        style={{
          boxShadow:
            "0 10px 30px -10px hsl(var(--primary) / 0.2), 0 0 40px hsl(var(--primary) / 0.15)",
        }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-background text-ink shadow-md transition hover:bg-primary hover:text-primary-foreground"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="max-h-[80vh] overflow-y-auto p-6 sm:p-8">
          {t.logo ? (
            <div className="mb-5 flex h-20 w-[260px] items-center rounded-lg bg-background px-3 sm:h-24 sm:w-[300px]">
              <img
                src={t.logo}
                alt={`${t.c} logo`}
                className="max-h-14 max-w-full object-contain sm:max-h-16"
              />
            </div>
          ) : null}
          <p className="whitespace-pre-line text-sm leading-relaxed text-ink sm:text-[15px]">
            {t.q}
          </p>
          <div className="mt-5 border-t border-border pt-4">
            <div className="text-sm font-semibold text-ink">{t.a.toUpperCase()}</div>
            <div className="text-[11px] font-medium text-muted-foreground">
              {t.c.toUpperCase()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/** Section 9 — Results Brands See After Switching to AAJ Supply Chain Management */
const TestimonialsSection = () => {
  const [active, setActive] = useState<Testimonial | null>(null);
  const track = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="border-b border-border bg-secondary/40 py-14 md:py-20">
      <div className="container">
        <SectionHeader
          align="center"
          className="mx-auto"
          title={
            <>
              Results Brands See After Switching to{" "}
              <span className="text-primary">AAJ Supply Chain Management</span>
            </>
          }
          description="Trusted by ecommerce brands across multiple categories, AAJ helps businesses build more reliable and scalable fulfillment operations."
        />

        <div className="group relative mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          <div
            className="animate-marquee flex w-max gap-5 group-hover:[animation-play-state:paused] sm:gap-6"
            style={{ animationDuration: `${Math.max(60, TESTIMONIALS.length * 12)}s` }}
          >
            {track.map((t, i) => (
              <div key={`${t.a}-${i}`} className="w-[300px] shrink-0 sm:w-[340px]">
                <TestimonialCard t={t} onOpen={() => setActive(t)} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {active ? <TestimonialModal t={active} onClose={() => setActive(null)} /> : null}
    </section>
  );
};

export default TestimonialsSection;
