import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface PageProp<T = unknown> {
  params: Promise<T & { id: string }>;
}