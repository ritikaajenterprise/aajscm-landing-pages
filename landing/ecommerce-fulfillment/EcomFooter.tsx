import { AAJ_LOGO } from "./assets";

/** Slim LP footer — logo, one-line tagline, copyright. */
const EcomFooter = () => (
  <footer className="border-t border-border bg-surface py-4">
    <div className="container grid grid-cols-1 items-center gap-3 text-center sm:grid-cols-[auto_1fr] sm:text-left md:grid-cols-[auto_1fr_auto]">
      <div className="flex items-center justify-center gap-3 sm:justify-start">
        <img
          src={AAJ_LOGO}
          alt="AAJ Supply Chain Management"
          className="h-9 w-auto shrink-0 mix-blend-multiply"
        />
      </div>
      <p className="min-w-0 text-xs text-muted-foreground md:text-sm">
        Supply chain, warehousing &amp; fulfillment across India.
      </p>
      <p className="min-w-0 text-xs text-muted-foreground md:text-sm">
        © {new Date().getFullYear()} AAJ Supply Chain Management. All Rights Reserved.
      </p>
    </div>
  </footer>
);

export default EcomFooter;
