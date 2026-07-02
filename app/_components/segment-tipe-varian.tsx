"use client"

import { Parallax } from "react-scroll-parallax";
import { MoveReveal } from "./component-move-reveal-item";
import { ItemTypes, VariantStatus } from "@/types";
import ItemTypesCard from "./card-item-types";

const itemTypes: ItemTypes[] = [
    {
        name: "Varian Manis",
        caption: "Lihat selengkapnya",
        image: "variant-sweet.png",
        status: VariantStatus.Ready,
        url: './variant-sweet'
    },
    {
        name: "Varian Asin",
        caption: "Segera datang",
        image: "variant-savory.png",
        status: VariantStatus["Coming Soon"]
    }
]


export default function TipeVarian() {
    return <div className="w-full my-16">
        <Parallax speed={-2}>
            <div className="flex justify-center font-bold text-3xl lg:text-5xl my-8">
                <MoveReveal direction="up" className="delay-100">Varian</MoveReveal>
            </div>
        </Parallax>

        <div className="grid py-8 gap-4 px-8">
            {itemTypes.map((item, index) => (
                <MoveReveal direction="up" style={{
                    transitionDelay: `${index * 0}ms`,
                }} key={index}>
                    <ItemTypesCard {...item} index={index} />
                </MoveReveal>
            ))}
        </div>

    </div>
}