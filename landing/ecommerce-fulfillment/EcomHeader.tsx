"use client";

import { Button } from "@/components/ui/button";
import { scrollToId } from "../_shell/scroll";
import { AAJ_LOGO } from "./assets";

/**
 * Minimal LP header — logo + a single "Contact Us" CTA that scrolls to
 * the hero form. The logo scrolls back to the top rather than linking to
 * "/" (as the Lovable source did), since "/" serves a different LP here.
 */
const EcomHeader = () => (
  <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
    <div className="container flex h-20 items-center justify-between">
      <a
        href="#top"
        onClick={(e) => scrollToId("top", e)}
        className="flex items-center gap-2"
        aria-label="AAJ Supply Chain Management"
      >
        <img src={AAJ_LOGO} alt="AAJ Supply Chain Management" className="h-12 w-auto" />
      </a>

      <Button variant="destructive" onClick={() => scrollToId("contact-form")}>
        Contact Us
      </Button>
    </div>
  </header>
);

export default EcomHeader;
