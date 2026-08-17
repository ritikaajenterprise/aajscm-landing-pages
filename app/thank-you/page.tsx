import type { Metadata } from "next";
import ThankYouPage from "@/landing/_shell/ThankYouPage";
import { config } from "@/landing/warehousing/page";

export const metadata: Metadata = {
  title: "Thank You | AAJ Supply Chain Management",
  description:
    "Our team of experts will get in touch with you within 1 working day.",
  robots: { index: false, follow: false },
};

export default function ThankYou() {
  return <ThankYouPage config={config} />;
}
