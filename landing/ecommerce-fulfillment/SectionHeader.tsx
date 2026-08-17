import type { ReactNode } from "react";

type Props = {
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

/** Shared heading block for the ecommerce LP sections. */
const SectionHeader = ({ title, description, align = "left", className = "" }: Props) => (
  <div
    className={`${align === "center" ? "mx-auto text-center" : ""} ${
      className.includes("max-w") ? "" : "max-w-3xl"
    } ${className}`}
  >
    <h2 className="font-display text-3xl font-semibold leading-[1.25] md:text-4xl md:leading-[1.2] lg:text-[44px]">
      {title}
    </h2>
    {description && (
      <p className="mt-5 whitespace-pre-line text-base leading-relaxed text-muted-foreground md:text-lg">
        {description}
      </p>
    )}
  </div>
);

export default SectionHeader;
