import SectionHeader from "./SectionHeader";
import { cityImage } from "./assets";

const LOCATIONS: { name: string; img: string }[] = [
  { name: "Bhiwandi", img: cityImage("bhiwandi-city.jpg") },
  { name: "Bangalore", img: cityImage("bangalore-city.jpg") },
  { name: "Delhi", img: cityImage("delhi-city.jpg") },
  { name: "Hyderabad", img: cityImage("hyderabad-city.jpg") },
  { name: "Sonipat", img: cityImage("sonipat-city.jpg") },
  { name: "Rohtak", img: cityImage("rohtak-city.jpg") },
  { name: "Kolkata", img: cityImage("kolkata-city.jpg") },
  { name: "Kundli", img: cityImage("kundli-city.jpg") },
  { name: "Ghaziabad", img: cityImage("ghaziabad-city.jpg") },
  { name: "Chennai", img: cityImage("chennai-city.jpg") },
  { name: "Noida", img: cityImage("noida-city.jpg") },
  { name: "Gurgaon", img: cityImage("gurgaon-city.jpg") },
];

/** Pan-India presence — city grid (no links, no CTA). */
const LocationsSection = () => (
  <section className="relative overflow-hidden border-b border-border bg-background py-12 md:py-16">
    <div className="container">
      <SectionHeader
        align="center"
        className="mx-auto"
        title={
          <>
            We&apos;re Present Across India. Chances Are{" "}
            <span className="text-primary">We&apos;re Already Near You</span>
          </>
        }
      />

      <div className="relative mx-auto mt-10 max-w-5xl">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6"
          style={{
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 85% at center, black 30%, transparent 92%)",
            maskImage: "radial-gradient(ellipse 70% 85% at center, black 30%, transparent 92%)",
          }}
        >
          {LOCATIONS.map((loc) => (
            <div key={loc.name} className="border-b border-r border-border/80" />
          ))}
        </div>
        <ul className="relative grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
          {LOCATIONS.map((loc) => (
            <li key={loc.name} className="flex justify-center py-8">
              <div className="group flex flex-col items-center gap-3 text-center">
                <span className="relative block h-20 w-20 overflow-hidden rounded-full ring-1 ring-border transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-110 group-hover:ring-2 group-hover:ring-primary/60 sm:h-24 sm:w-24">
                  <img
                    src={loc.img}
                    alt={`${loc.name} warehouse`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className="pointer-events-none absolute inset-0 rounded-full transition-colors duration-500 group-hover:bg-primary/10" />
                </span>
                <span className="font-display text-sm font-semibold text-ink transition-colors duration-300 group-hover:text-primary">
                  {loc.name}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default LocationsSection;
