import { Parallax } from "react-scroll-parallax";
import ItemPackagesCard from "./card-item-packages";
import { MoveUpReveal } from "./component-move-up-reveal-item";

const itemPaketUsaha = [
    {
        name: 'Standard',
        description: 'Paket standar yang menyediakan peralatan minimum untuk bisa berjualan.',
        price: 'Rp5.000.000',
        caption: 'Beli',
        image: './cart.png',
    },
    {
        name: 'Premium',
        description: 'Paket usaha yang lebih lengkap untuk berjualan lebih mudah dan menarik.',
        price: 'Rp8.000.000',
        caption: 'Beli',
        image: './cart.png',
    },
    {
        name: 'Extended',
        description: 'Paket usaha premium dengan tambahan yang bisa disesuaikan dengan keinginan anda.',
        price: 'Dapatkan penawaran',
        caption: 'Hubungi',
        image: 'cart.png',
    },
]

export default function PaketUsaha() {

    return <div className="w-full">
        <Parallax speed={-2}>
            <div className="flex justify-center font-bold text-3xl lg:text-5xl my-8">
                <MoveUpReveal className="delay-100">Paket Usaha</MoveUpReveal>
            </div>
        </Parallax>
        <div className="py-16 md:py-32 flex flex-col gap-8">
            <div className="grid grid-cols-2 md:grid-cols-3 py-8 gap-4 px-8">
                {itemPaketUsaha.map((item, index) => (
                    <MoveUpReveal style={{
                        transitionDelay: `${index * 50}ms`,
                    }} key={index}>
                        <ItemPackagesCard {...item} />
                    </MoveUpReveal>
                ))}
            </div>
        </div>
    </div>
}