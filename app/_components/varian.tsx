"use client"

import { Card, CardBody, CardHeader } from "@heroui/card";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import { VariantReveal } from "./variant-reveal-item";

interface ItemVariants {
    name: string
    description: string
    image: string
    color: string
}
const itemVarian: ItemVariants[] = [
    {
        name: 'Original',
        description: 'Roti lembut dengan rasa klasik yang sederhana namun tetap nikmat di setiap gigitan.',
        image: './variants/original.webp',
        color: 'black'
    },
    {
        name: 'Blueberry',
        description: 'Perpaduan roti hangat dengan isian blueberry manis segar yang sedikit asam menyegarkan.',
        image: './variants/blueberry.webp',
        color: 'rgb(11,11,38)'
    },
    {
        name: 'Strawberry',
        description: 'Rasa strawberry manis dan harum, memberikan sensasi segar yang disukai semua kalangan.',
        image: './variants/strawberry.webp',
        color: 'rgb(193,71,60)'
    },
    {
        name: 'Matcha',
        description: 'Aroma khas matcha yang lembut dengan sentuhan pahit manis yang elegan dan menenangkan.',
        image: './variants/matcha.webp',
        color: 'rgb(113,117,33)'
    },
    {
        name: 'Cremebrulee',
        description: 'Rasa creamy dengan sentuhan karamel yang manis, menghadirkan sensasi dessert premium.',
        image: './variants/cremebrulee.webp',
        color: 'rgb(138,48,35)'
    },
    {
        name: 'Chocolate',
        description: 'Lelehan cokelat manis yang kaya rasa, cocok untuk pecinta cokelat sejati.',
        image: './variants/chocolate.webp',
        color: 'rgb(161,71,31)'
    },
    {
        name: 'Chococheese',
        description: 'Perpaduan cokelat manis dan keju gurih yang menciptakan rasa unik dan seimbang.',
        image: './variants/chococheese.webp',
        color: 'rgb(200,151,68)'
    },
    {
        name: 'Chocobanana',
        description: 'Kombinasi cokelat lembut dengan pisang manis yang menghasilkan rasa klasik favorit.',
        image: './variants/chocobanana.webp',
        color: 'rgb(205,156,80)'
    },
]

const Item = (props: ItemVariants) => {
    return <Card className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start gap-2">
            <p className={`transition-all text-xl md:text-2xl font-bold`} style={{ color: props.color }}>{props.name}</p>
            <small className="text-default-500 min-h-20">{props.description}</small>
        </CardHeader>
        <CardBody className="overflow-visible py-2 h-60">
            <Image
                alt={props.name}
                className="w-80 m-auto"
                src={props.image}
                width={1218}
                height={760}
            />
        </CardBody>
    </Card>
}


export default function Varian() {
    return <div className="w-full my-16">
        <Parallax speed={-2}>
            <div className="flex justify-center font-bold text-3xl lg:text-5xl my-8">
                <VariantReveal className="delay-100">Varian</VariantReveal>
            </div>
        </Parallax>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-8 gap-4 px-8">
            {itemVarian.map((item, index) => (
                <VariantReveal className={`delay-${index}00`} key={index}>
                    <Item {...item} />
                </VariantReveal>
            ))}
        </div>
    </div>
}