"use client";

import LpHeader from "./LpHeader";
import LpFaq from "./LpFaq";
import LpFooter from "./LpFooter";
import type { LandingConfig } from "../types";

interface Props {
  config: LandingConfig;
}

/**
 * Post-submit thank-you page. HubSpot redirects here after a form
 * submission (see LP_THANK_YOU_PATH). Reuses the warehousing page's
 * header, FAQ and footer so the LP shell stays consistent.
 */
const ThankYouPage = ({ config }: Props) => {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <LpHeader homeHref="/" />
      <main className="flex-1">
        <section className="border-b border-border bg-background py-20 md:py-28">
          <div className="container text-center">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              <span className="text-primary">Thank You</span>{" "}
              <span className="text-foreground">for Contacting Us!</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground md:text-lg">
              Our team of experts will get in touch with you within 1 working day.
            </p>
          </div>
        </section>
        <LpFaq config={config} />
      </main>
      <LpFooter />
    </div>
  );
};

export default ThankYouPage;
