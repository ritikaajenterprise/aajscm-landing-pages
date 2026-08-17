import { useState } from "react";
import type { LandingConfig } from "../types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, StarHalf } from "lucide-react";

interface Props {
  config: LandingConfig;
}

const TRUNCATE_LEN = 180;

const RatingStars = ({ rating = 5 }: { rating?: number }) => {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  const stars = [];
  for (let i = 0; i < full; i++) {
    stars.push(
      <Star
        key={`f-${i}`}
        className="h-4 w-4 fill-yellow-400 text-yellow-400"
      />,
    );
  }
  if (half) {
    stars.push(
      <StarHalf
        key="half"
        className="h-4 w-4 fill-yellow-400 text-yellow-400"
      />,
    );
  }
  return <div className="flex items-center gap-0.5">{stars}</div>;
};

const TestimonialCard = ({
  quote,
  author,
  role,
  company,
  rating,
}: {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  rating?: number;
}) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = quote.length > TRUNCATE_LEN;
  const displayed =
    !isLong || expanded ? quote : quote.slice(0, TRUNCATE_LEN).trimEnd() + "...";

  const initials = author
    .split(" ")
    .map((s) => s[0])
    .slice(0, 2)
    .join("");

  return (
    <figure className="flex h-full flex-col overflow-hidden rounded-2xl bg-[#f8ecec]">
      <div className="flex-1 p-6 md:p-7">
        <RatingStars rating={rating ?? 5} />
        <blockquote className="mt-4 text-sm leading-relaxed text-foreground/85 md:text-[15px]">
          {displayed}
          {isLong && (
            <>
              {" "}
              <button
                type="button"
                onClick={() => setExpanded((v) => !v)}
                className="font-medium text-primary hover:underline"
              >
                {expanded ? "Show Less" : "Read More"}
              </button>
            </>
          )}
        </blockquote>
      </div>
      <div className="border-t border-primary/10 px-6 py-4 md:px-7">
        <figcaption className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-background text-sm font-semibold text-primary shadow-sm">
            {initials}
          </div>
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold text-foreground">
              {author}
            </div>
            {(role || company) && (
              <div className="truncate text-xs text-muted-foreground">
                {role}
                {role && company && " at "}
                {company && (
                  <span className="font-semibold text-foreground">
                    {company}
                  </span>
                )}
              </div>
            )}
          </div>
        </figcaption>
      </div>
    </figure>
  );
};

const LpTestimonials = ({ config }: Props) => {
  const items = config.testimonials;
  if (!items || items.length === 0) return null;

  return (
    <section className="border-b border-border bg-[#0b0b0b] py-14 md:py-20">
      <div className="container">
        <Carousel opts={{ loop: true, align: "start" }}>
          <div className="mb-8 flex items-center justify-between gap-4 md:mb-10">
            <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl lg:text-4xl">
              {config.testimonialsHeading || "Client Testimonials"}
            </h2>
            <div className="flex items-center gap-3">
              <CarouselPrevious className="static translate-x-0 translate-y-0 h-10 w-10 border-white/70 bg-transparent text-white hover:bg-white hover:text-black" />
              <CarouselNext className="static translate-x-0 translate-y-0 h-10 w-10 border-none bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground" />
            </div>
          </div>

          <CarouselContent className="-ml-4">
            {items.map((t, i) => (
              <CarouselItem
                key={i}
                className="pl-4 basis-[85%] sm:basis-[60%] md:basis-[55%] lg:basis-[40%]"
              >
                <TestimonialCard {...t} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default LpTestimonials;
