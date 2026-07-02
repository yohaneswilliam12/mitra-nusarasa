"use client"

import { ItemPackages, ItemVariants } from "@/types"
import { MoveReveal } from "./component-move-reveal-item"
import ItemVariantCard from "./card-item-variants"
import { Parallax } from "react-scroll-parallax"
import { useSearchParams } from "next/navigation"
import ItemPackagesCard from "./card-item-packages"
import { addToast } from "@heroui/toast"

const onClick = (message: string) => {
    addToast({
        title: "Belum Tersedia",
        description: "Tunggu sebentar ya, kami sedang mempersiapkan paketnya!",
        variant: 'flat',
        color: "foreground"
    })
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
        colorDark: 'rgb(245,245,205)'
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
        caption: 'Hubungi',
        image: 'cart.png',
        onClick: () => {
            window.open('https://wa.me/message/EU2TRMLX3TJYN1')
        }
    },
]
const SearchPage = () => {
    const searchParams = useSearchParams();
    const keyword = (searchParams.get("keyword") ?? "").toLowerCase().trim();
    const filteredVariant = itemVarian.filter(item => {
        const name = item.name.toLowerCase()
        const description = item.description.toLowerCase()

        return name.includes(keyword) || description.includes(keyword) || 'variant'.startsWith(keyword)
    })
    const filteredPartnership = itemPaketUsaha.filter(item => {
        const name = item.name.toLowerCase()
        const description = item.description.toLowerCase()

        return name.includes(keyword) || description.includes(keyword) || 'partnership'.startsWith(keyword)
    })
    return <div className="w-full my-16">
        <Parallax speed={-2}>
            <div className="flex justify-center font-bold text-xl lg:text-3xl my-8">
                <MoveReveal direction="up" className="delay-100">Pencarian untuk &quot;{keyword}&quot;</MoveReveal>
            </div>
        </Parallax>
        {filteredVariant.length == 0 && filteredPartnership.length == 0 ?
            <div className="text-md lg:text-xl py-8 lg:py-16">
                <MoveReveal direction="up" className="flex justify-center delay-200 my-32 lg:my-40">Data tidak ditemukan</MoveReveal>
            </div>
            :
            <>
                {filteredVariant.length > 0 &&
                    <>
                        <div className="flex justify-center font-bold text-lg lg:text-2xl my-8">
                            <MoveReveal direction="up" className="delay-100">Varian</MoveReveal>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-8 gap-4 px-8">
                            {filteredVariant.map((item, index) =>
                                <MoveReveal direction="up" style={{
                                    transitionDelay: `${index * 50}ms`,
                                }} key={index}>
                                    <ItemVariantCard {...item} />
                                </MoveReveal>
                            )}
                        </div>
                    </>
                }

                {filteredPartnership.length > 0 &&
                    <>
                        <div className="flex justify-center font-bold text-lg lg:text-2xl my-8">
                            <MoveReveal direction="up" className="delay-100">Paket Usaha</MoveReveal>
                        </div>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 py-8 gap-4 px-8">
                            {filteredPartnership.map((item, index) =>
                                <MoveReveal direction="up" style={{
                                    transitionDelay: `${index * 50}ms`,
                                }} key={index}>
                                    <ItemPackagesCard {...item} />
                                </MoveReveal>
                            )}
                        </div>
                    </>
                }

                <div className="flex justify-center my-10">
                    {filteredVariant.length + filteredPartnership.length} data ditampilkan
                </div>
            </>
        }
    </div>
}

export default SearchPage;