import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface PageProp<T = unknown> {
  params: Promise<T & { id: string }>;
}

export enum VariantStatus {
  'Ready',
  'Coming Soon'
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
  originalPrice?: string
  price: string
  caption: string
  image: string
  color?: string
  colorDark?: string
  onClick: (msg: string) => void
}

export interface ItemTypes {
  index?: number
  name: string
  caption: string
  image: string
  status: VariantStatus
  url?: string
}