import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface PageProp<T = unknown> {
  params: Promise<T & { id: string }>;
}
export enum ItemType {
  Variants,
  Partnerships
}

export interface ItemVariants {
  name: string
  description: string
  image: string
  color?: string
  colorDark?: string
  type?: ItemType
}