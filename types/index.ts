import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface PageProp<T = unknown> {
  params: Promise<T & { id: string }>;
}

export interface ItemVariants {
  name: string
  description: string
  image: string
  color?: string
  colorDark?: string
}

export interface ItemPackages {
  name: string
  description: string
  price: string
  caption: string
  image: string
  color?: string
  colorDark?: string
}