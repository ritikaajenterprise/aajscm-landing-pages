const logo = "/lp/aaj-logo.png";
import { scrollToId } from "./scroll";
import { Button } from "@/components/ui/button";

interface Props {
  /**
   * Base path to link back to when this header isn't rendered on the LP
   * itself (e.g. the thank-you page has no #services/#contact-form
   * sections of its own). Defaults to "" for same-page anchor scrolling.
   */
  homeHref?: string;
}

/**
 * Minimal LP header. Only Logo · Services · Contact Us, per the
 * Google Ads LP spec — no site nav, no mega menus.
 */
const LpHeader = ({ homeHref = "" }: Props) => {
  const isExternal = homeHref !== "";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between md:h-20">
        <a
          href={`${homeHref}#top`}
          onClick={isExternal ? undefined : (e) => scrollToId("top", e)}
          className="flex items-center gap-2"
          aria-label="AAJ Supply Chain Management"
        >
          <img src={logo} alt="AAJ Supply Chain Management" className="h-10 w-auto md:h-12" />
        </a>

        <nav className="flex items-center gap-2 md:gap-4">
          <a
            href={`${homeHref}#services`}
            onClick={isExternal ? undefined : (e) => scrollToId("services", e)}
            className="hidden text-sm font-medium text-foreground/80 transition-colors hover:text-foreground sm:inline-block sm:px-3 sm:py-2"
          >
            Services
          </a>
          <Button
            asChild
            variant="destructive"
            size="sm"
            className="md:h-10 md:px-5 md:text-sm"
          >
            <a
              href={`${homeHref}#contact-form`}
              onClick={isExternal ? undefined : (e) => scrollToId("contact-form", e)}
            >
              Contact Us
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default LpHeader;
