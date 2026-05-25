"use client"

import { Parallax } from "react-scroll-parallax";
import { MoveUpReveal } from "./component-move-up-reveal-item";
import ItemVariantCard from "./card-item-variants";

interface ItemVariants {
    name: string
    description: string
    image: string
    color?: string
    colorDark?: string
}
const itemVarian: ItemVariants[] = [
    {
        name: 'Original',
        description: 'Roti lembut dengan rasa klasik yang sederhana namun tetap nikmat di setiap gigitan.',
        image: './variants/original.webp',
    },
    {
        name: 'Blueberry',
        description: 'Perpaduan roti hangat dengan isian blueberry manis segar yang sedikit asam menyegarkan.',
        image: './variants/blueberry.webp',
        color: 'rgb(11,11,38)',
        colorDark: 'rgb(160,157,193)'
    },
    {
        name: 'Strawberry',
        description: 'Rasa strawberry manis dan harum, memberikan sensasi segar yang disukai semua kalangan.',
        image: './variants/strawberry.webp',
        color: 'rgb(193,71,60)',
        colorDark: 'rgb(232,177,171)'
    },
    {
        name: 'Matcha',
        description: 'Aroma khas matcha yang lembut dengan sentuhan pahit manis yang elegan dan menenangkan.',
        image: './variants/matcha.webp',
        color: 'rgb(113,117,33)',
        colorDark: 'rgb(245,245,205)',
    },
    {
        name: 'Cremebrulee',
        description: 'Rasa creamy dengan sentuhan karamel yang manis, menghadirkan sensasi dessert premium.',
        image: './variants/cremebrulee.webp',
        color: 'rgb(138,48,35)',
        colorDark: 'rgb(250,236,193)'
    },
    {
        name: 'Chocolate',
        description: 'Lelehan cokelat manis yang kaya rasa, cocok untuk pecinta cokelat sejati.',
        image: './variants/chocolate.webp',
        color: 'rgb(161,71,31)',
        colorDark: 'rgb(223,178,143)'
    },
    {
        name: 'Chococheese',
        description: 'Perpaduan cokelat manis dan keju gurih yang menciptakan rasa unik dan seimbang.',
        image: './variants/chococheese.webp',
        color: 'rgb(200,151,68)',
        colorDark: 'rgb(247,237,215)'
    },
    {
        name: 'Chocobanana',
        description: 'Kombinasi cokelat lembut dengan pisang manis yang menghasilkan rasa klasik favorit.',
        image: './variants/chocobanana.webp',
        color: 'rgb(205,156,80)',
        colorDark: 'rgb(252,240,215)'
    },
]


export default function Varian() {
    return <div className="w-full my-16">
        <Parallax speed={-2}>
            <div className="flex justify-center font-bold text-3xl lg:text-5xl my-8">
                <MoveUpReveal className="delay-100">Varian</MoveUpReveal>
            </div>
        </Parallax>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-8 gap-4 px-8">
            {itemVarian.map((item, index) => (
                <MoveUpReveal style={{
                    transitionDelay: `${index * 50}ms`,
                }} key={index}>
                    <ItemVariantCard {...item} />
                </MoveUpReveal>
            ))}
        </div>
    </div>
}