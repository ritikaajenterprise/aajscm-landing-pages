const logo = "/lp/aaj-logo.png";

/**
 * Minimal LP footer — logo, short tagline, copyright.
 * No sitemap, no internal nav (CTAs already covered in the body).
 */
const LpFooter = () => {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="container flex flex-col items-center gap-4 py-8 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex items-center gap-3">
          <img src={logo} alt="AAJ Supply Chain Management" className="h-9 w-auto" />
          <span className="text-xs text-muted-foreground">
            Enterprise supply chain, warehousing &amp; fulfillment across India.
          </span>
        </div>
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} AAJ Supply Chain Management. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default LpFooter;
