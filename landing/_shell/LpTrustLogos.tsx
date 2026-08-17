import type { ReactNode } from "react";
const logoBoldfit = "/lp/clients/Boldfit.png";
const logoPortronics = "/lp/clients/Portronics.png";
const logoFrido = "/lp/clients/Frido.png";
const logoTynor = "/lp/clients/Tynor.png";
const logoVissco = "/lp/clients/Vissco.png";
const logoFarmley = "/lp/clients/Farmley.png";
const logoKnitroot = "/lp/clients/Knitroot.png";
const logoChupps = "/lp/clients/Chupps.png";
const logoHarper = "/lp/clients/HarperCollins.webp";
const logoCambridge = "/lp/clients/Cambridge.png";
const logoPearson = "/lp/clients/Pearson.png";
const logoPW = "/lp/clients/PhysicsWallah.png";
const logoBloomsbury = "/lp/clients/Bloomsbury.png";
const logoOswaal = "/lp/clients/OswaalBooks.webp";
const logoMuddy = "/lp/clients/MuddyWater.png";
const logoEvoGirl = "/lp/clients/EvoGirl.png";

interface Props {
  caption?: string;
  highlights?: string[];
}

const LOGOS = [
  { src: logoBoldfit, alt: "Boldfit" },
  { src: logoPortronics, alt: "Portronics" },
  { src: logoFrido, alt: "Frido" },
  { src: logoTynor, alt: "Tynor" },
  { src: logoVissco, alt: "Vissco" },
  { src: logoFarmley, alt: "Farmley" },
  { src: logoKnitroot, alt: "Knitroot" },
  { src: logoChupps, alt: "Chupps" },
  { src: logoHarper, alt: "HarperCollins" },
  { src: logoCambridge, alt: "Cambridge" },
  { src: logoPearson, alt: "Pearson" },
  { src: logoPW, alt: "PhysicsWallah" },
  { src: logoBloomsbury, alt: "Bloomsbury" },
  { src: logoOswaal, alt: "Oswaal Books" },
  { src: logoMuddy, alt: "Muddy Water" },
  { src: logoEvoGirl, alt: "EvoGirl" },
];

function HighlightedCaption({
  text,
  highlights = [],
}: {
  text: string;
  highlights?: string[];
}): ReactNode {
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
          <span key={i} className="font-bold text-primary">
            {p}
          </span>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </>
  );
}

const LpTrustLogos = ({ caption, highlights }: Props) => {
  return (
    <section className="border-b border-border bg-background pb-10 pt-16 md:pb-12 md:pt-20">
      <div className="container">
        {caption && (
          <p className="mb-6 text-center text-sm font-medium text-muted-foreground md:text-base">
            <HighlightedCaption text={caption} highlights={highlights} />
          </p>
        )}
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
          <div className="flex w-max animate-marquee items-center gap-12">
            {[0, 1].map((dup) => (
              <div
                key={dup}
                className="flex shrink-0 items-center gap-12 pr-12"
                aria-hidden={dup === 1}
              >
                {LOGOS.map((l, i) => (
                  <img
                    key={`${dup}-${i}`}
                    src={l.src}
                    alt={l.alt}
                    loading="lazy"
                    className="h-10 w-auto max-w-[140px] object-contain opacity-90 transition hover:opacity-100 md:h-12"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LpTrustLogos;
