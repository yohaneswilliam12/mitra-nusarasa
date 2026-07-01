import { Parallax } from "react-scroll-parallax";
import ItemPackagesCard from "./card-item-packages";
import { MoveUpReveal } from "./component-move-up-reveal-item";
import { ItemPackages } from "@/types";
import { addToast } from "@heroui/toast";
import { RevealText } from "./component-reveal-text";

const onClick = (message: string) => {
    addToast({
        title: "Belum Tersedia",
        description: "Tunggu sebentar ya, kami sedang mempersiapkan paketnya!",
        variant: 'flat',
        color: "foreground"
    })
}

const itemPaketUsaha: ItemPackages[] = [
    {
        name: 'Standard',
        description: 'Paket standar yang menyediakan peralatan minimum untuk bisa berjualan.',
        // price: 'Rp5.000.000',
        originalPrice: 'Rp20.000.000',
        price: 'Rp17.500.000',
        caption: 'Beli',
        // caption: 'Hubungi',
        image: './cart.png',
        onClick: () => {
            window.open('https://wa.me/message/EU2TRMLX3TJYN1')
        }
    },
    // {
    //     name: 'Premium',
    //     description: 'Paket usaha yang lebih lengkap untuk berjualan lebih mudah dan menarik.',
    //     // price: 'Rp8.000.000',
    //     price: 'TBA',
    //     // caption: 'Beli',
    //     caption: 'Hubungi',
    //     image: './cart.png',
    //     onClick
    // },
    {
        name: 'Custom',
        description: 'Paket usaha yang bisa disesuaikan dengan keinginan anda.',
        price: 'Dapatkan penawaran',
        // price: 'TBA',
        caption: 'Hubungi',
        image: 'cart.png',
        onClick: () => {
            window.open('https://wa.me/message/EU2TRMLX3TJYN1')
        }
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
            <div className="flex mx-8">
                <MoveUpReveal className="flex-1 delay-150">
                    <div className="transition-all mx-10 md:mx-20 text-center font-semibold text-2xl md:text-4xl leading-10 md:leading-12">
                        <RevealText
                            text="Peluang kemitraan AGEMON"
                            startDelay={0}
                            step={25}
                        />
                    </div>
                </MoveUpReveal>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 py-8 gap-4 px-8">
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