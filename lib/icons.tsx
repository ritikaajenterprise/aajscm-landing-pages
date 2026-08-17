import { forwardRef, type SVGAttributes } from "react";

import arrow_left_d from "@iconify-icons/tabler/arrow-left";
import arrow_right_d from "@iconify-icons/tabler/arrow-right";
import chevron_down_d from "@iconify-icons/tabler/chevron-down";

/**
 * Trimmed port of the Lovable build's lucide→Tabler icon shim
 * (src/lib/icons.tsx). Only the icons needed by the migrated
 * warehousing LP (ui/accordion + ui/carousel) are included.
 */
interface IconifyIcon {
  body: string;
  width?: number;
  height?: number;
}

export type IconProps = Omit<SVGAttributes<SVGSVGElement>, "color"> & {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  absoluteStrokeWidth?: boolean;
};

export type LucideIcon = React.ForwardRefExoticComponent<
  IconProps & React.RefAttributes<SVGSVGElement>
>;

const makeIcon = (data: IconifyIcon): LucideIcon => {
  const Component = forwardRef<SVGSVGElement, IconProps>(
    ({ size = 24, color, strokeWidth: _sw, absoluteStrokeWidth: _asw, className, style, width, height, ...rest }, ref) => {
      const w = data.width ?? 24;
      const h = data.height ?? 24;
      const dim = width ?? height ?? size;
      return (
        <svg
          ref={ref}
          xmlns="http://www.w3.org/2000/svg"
          width={dim}
          height={dim}
          viewBox={`0 0 ${w} ${h}`}
          className={className}
          style={color ? { color, ...style } : style}
          {...rest}
          dangerouslySetInnerHTML={{ __html: data.body }}
        />
      );
    }
  );
  Component.displayName = "Icon";
  return Component as LucideIcon;
};

export const ArrowLeft = makeIcon(arrow_left_d);
export const ArrowRight = makeIcon(arrow_right_d);
export const ChevronDown = makeIcon(chevron_down_d);
