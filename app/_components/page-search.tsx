"use client"

import { ItemType, ItemVariants } from "@/types"
import { MoveUpReveal } from "./component-move-up-reveal-item"
import ItemVariantCard from "./card-item-variants"
import { Parallax } from "react-scroll-parallax"
import { useSearchParams } from "next/navigation"

const itemVarian: ItemVariants[] = [
    {
        name: 'Original',
        description: 'Roti lembut dengan rasa klasik yang sederhana namun tetap nikmat di setiap gigitan.',
        image: './variants/original.webp',
        type: ItemType.Variants
    },
    {
        name: 'Blueberry',
        description: 'Perpaduan roti hangat dengan isian blueberry manis segar yang sedikit asam menyegarkan.',
        image: './variants/blueberry.webp',
        color: 'rgb(11,11,38)',
        colorDark: 'rgb(160,157,193)',
        type: ItemType.Variants
    },
    {
        name: 'Strawberry',
        description: 'Rasa strawberry manis dan harum, memberikan sensasi segar yang disukai semua kalangan.',
        image: './variants/strawberry.webp',
        color: 'rgb(193,71,60)',
        colorDark: 'rgb(232,177,171)',
        type: ItemType.Variants
    },
    {
        name: 'Matcha',
        description: 'Aroma khas matcha yang lembut dengan sentuhan pahit manis yang elegan dan menenangkan.',
        image: './variants/matcha.webp',
        color: 'rgb(113,117,33)',
        colorDark: 'rgb(245,245,205)',
        type: ItemType.Variants
    },
    {
        name: 'Cremebrulee',
        description: 'Rasa creamy dengan sentuhan karamel yang manis, menghadirkan sensasi dessert premium.',
        image: './variants/cremebrulee.webp',
        color: 'rgb(138,48,35)',
        colorDark: 'rgb(250,236,193)',
        type: ItemType.Variants
    },
    {
        name: 'Chocolate',
        description: 'Lelehan cokelat manis yang kaya rasa, cocok untuk pecinta cokelat sejati.',
        image: './variants/chocolate.webp',
        color: 'rgb(161,71,31)',
        colorDark: 'rgb(223,178,143)',
        type: ItemType.Variants
    },
    {
        name: 'Chococheese',
        description: 'Perpaduan cokelat manis dan keju gurih yang menciptakan rasa unik dan seimbang.',
        image: './variants/chococheese.webp',
        color: 'rgb(200,151,68)',
        colorDark: 'rgb(247,237,215)',
        type: ItemType.Variants
    },
    {
        name: 'Chocobanana',
        description: 'Kombinasi cokelat lembut dengan pisang manis yang menghasilkan rasa klasik favorit.',
        image: './variants/chocobanana.webp',
        color: 'rgb(205,156,80)',
        colorDark: 'rgb(252,240,215)',
        type: ItemType.Variants
    },
]

const itemPartnership: ItemVariants[] = [
    {
        name: 'Standard',
        description: 'Kemitraan standard yang cocok untuk pemula yang ingin mencoba tetapi tidak ingin mengambil resiko terlalu besar.',
        image: './variants/original.webp',
        type: ItemType.Partnerships
    },
    {
        name: 'Premium',
        description: 'Untuk kalian yang ingin mendapatkan pengalaman kemitraan yang lebih lengkap dan lebih menarik perhatian pelanggan.',
        image: './variants/original.webp',
        type: ItemType.Partnerships
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
    const filteredPartnership = itemPartnership.filter(item => {
        const name = item.name.toLowerCase()
        const description = item.description.toLowerCase()

        return name.includes(keyword) || description.includes(keyword) || 'partnership'.startsWith(keyword)
    })
    return <div className="w-full my-16">
        <Parallax speed={-2}>
            <div className="flex justify-center font-bold text-xl lg:text-3xl my-8">
                <MoveUpReveal className="delay-100">Pencarian untuk "{searchParams.get("keyword")}"</MoveUpReveal>
            </div>
        </Parallax>
        {filteredVariant.length == 0 && filteredPartnership.length == 0 ?
            <div className="text-md lg:text-xl py-8 lg:py-16">
                <MoveUpReveal className="flex justify-center delay-200 my-32 lg:my-40">Data tidak ditemukan</MoveUpReveal>
            </div>
            :
            <>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-8 gap-4 px-8">
                    {[...filteredVariant, ...filteredPartnership].map((item, index) =>
                        <MoveUpReveal style={{
                            transitionDelay: `${index * 50}ms`,
                        }} key={index}>
                            <ItemVariantCard {...item} />
                        </MoveUpReveal>
                    )}
                </div>
                <div className="flex justify-center">
                    {filteredVariant.length + filteredPartnership.length} data ditampilkan
                </div>
            </>
        }
    </div>
}

export default SearchPage;