"use client"

import { Card, CardBody, CardHeader } from "@heroui/card";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import { VariantReveal } from "./variant-reveal-item";

interface ItemVariants {
    name: string
    description: string
    image: string
}
const itemVarian: ItemVariants[] = [
    {
        name: 'Original',
        description: 'Roti lembut dengan rasa klasik yang sederhana namun tetap nikmat di setiap gigitan.',
        image: './variants/original.webp'
    },
    {
        name: 'Blueberry',
        description: 'Perpaduan roti hangat dengan isian blueberry manis segar yang sedikit asam menyegarkan.',
        image: './variants/blueberry.webp'
    },
    {
        name: 'Strawberry',
        description: 'Rasa strawberry manis dan harum, memberikan sensasi segar yang disukai semua kalangan.',
        image: './variants/strawberry.webp'
    },
    {
        name: 'Matcha',
        description: 'Aroma khas matcha yang lembut dengan sentuhan pahit manis yang elegan dan menenangkan.',
        image: './variants/matcha.webp'
    },
    {
        name: 'Cremebrulee',
        description: 'Rasa creamy dengan sentuhan karamel yang manis, menghadirkan sensasi dessert premium.',
        image: './variants/cremebrulee.webp'
    },
    {
        name: 'Chocolate',
        description: 'Lelehan cokelat manis yang kaya rasa, cocok untuk pecinta cokelat sejati.',
        image: './variants/chocolate.webp'
    },
    {
        name: 'Chococheese',
        description: 'Perpaduan cokelat manis dan keju gurih yang menciptakan rasa unik dan seimbang.',
        image: './variants/chococheese.webp'
    },
    {
        name: 'Chocobanana',
        description: 'Kombinasi cokelat lembut dengan pisang manis yang menghasilkan rasa klasik favorit.',
        image: './variants/chocobanana.webp'
    },
]

const Item = (props: ItemVariants) => {
    return <Card className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start gap-2">
            <p className="text-lg font-bold">{props.name}</p>
            <small className="text-default-500 min-h-20">{props.description}</small>
        </CardHeader>
        <CardBody className="overflow-visible py-2 h-60">
            <Image
                alt={props.name}
                className="w-80 my-auto"
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
        <div className="grid grid-cols-4 py-8 gap-4">
            {itemVarian.map((item, index) => (
                <VariantReveal className={`delay-${index}00`} key={index}>
                    <Item {...item} />
                </VariantReveal>
            ))}
        </div>
    </div>
}