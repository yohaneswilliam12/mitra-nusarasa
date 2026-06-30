"use client"

import { Parallax } from "react-scroll-parallax"
import { MoveUpReveal } from "./component-move-up-reveal-item"
import { RevealText } from "./component-reveal-text"
import { Card } from "@heroui/card"
import { Button } from "@heroui/button"
import * as LucideReact from 'lucide-react';
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { addToast } from "@heroui/toast"
import Link from "next/link"

interface CardHighlights {
    icon?: keyof typeof LucideReact
    label: string
    description?: string
    color?: string
    colorDark?: string
}

const highlights: CardHighlights[] = [
    {
        icon: 'Video',
        label: 'Promosi Opening',
        description: 'Promosi pembukaan gratis untuk menarik pelanggan pertama Anda',
        color: 'rgb(249,78,40)',
        colorDark: 'rgb(220,68,40)'
    },
    {
        icon: 'MapPin',
        label: 'Analisa Lokasi',
        description: 'Bantuan pemilihan lokasi penjualan strategis',
        color: 'rgb(149,78,255)',
        colorDark: 'rgb(220,68,255)'
    },
    {
        icon: 'Image',
        label: 'Pemasaran Digital',
        description: 'Akses akun resmi yang mudah dijangkau calon pelanggan',
        color: 'rgb(48,178,252)',
        colorDark: 'rgb(10,160,254)',
    },
    {
        icon: 'Book',
        label: 'Penulisan Resep',
        description: 'Pembagian resep ketika menu baru sudah tersedia',
        color: 'rgb(247,131,32)',
        colorDark: 'rgb(255,191,12)',
    },
    {
        icon: 'Phone',
        label: 'Konsultasi',
        description: 'Konsultasi via telepon/WA gratis dengan tim kami',
        color: 'rgb(85,137,97)',
        colorDark: 'rgb(85,255,120)',
    },
    {
        icon: 'Store',
        label: 'Subsidi Event',
        description: 'Dukungan untuk mengikuti festival/event makanan',
        color: 'rgb(247,131,32)',
        colorDark: 'rgb(255,191,12)',
    },
]

const CardHighlights = (props: CardHighlights) => {
    const { resolvedTheme } = useTheme();
    const [theme, setTheme] = useState<string | undefined>(undefined);
    useEffect(() => {
        setTheme(resolvedTheme);
    }, [resolvedTheme]);
    const Icon = (props.icon ? LucideReact[props.icon] : LucideReact.HelpCircle) as LucideReact.LucideIcon;
    return <Card className="p-8 flex h-full flex-col items-center" style={{ color: theme === 'dark' ? props.colorDark : props.color }}>
        <Icon size={40} strokeWidth={1.2} className="m-10" />
        <div>
            <div className="text-default-foreground text-2xl font-bold text-center">{props.label}</div>
            <div className="text-default-foreground text-justify">{props.description}</div>
        </div>
    </Card>
}

export default function Kemitraan() {
    return <div className="w-full">
        <Parallax speed={-2}>
            <div className="flex justify-center font-bold text-3xl lg:text-5xl my-8">
                <MoveUpReveal className="delay-100">Kemitraan</MoveUpReveal>
            </div>

        </Parallax>
        <div className="py-16 md:py-32 flex flex-col gap-8">
            <div className="flex mx-8">
                <MoveUpReveal className="flex-1 delay-150">
                    <div className="transition-all mx-10 md:mx-20 text-center font-semibold text-2xl md:text-4xl leading-10 md:leading-12">
                        <RevealText
                            text="Kemitraan untuk Pertumbuhan Bersama"
                            startDelay={0}
                            step={25}
                        />
                    </div>
                </MoveUpReveal>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-8">
                {highlights.map((item, index) => (
                    <MoveUpReveal className={`delay-${index + 1}00`} key={index}>
                        <CardHighlights {...item} />
                    </MoveUpReveal>
                ))}
            </div>
            <div className="flex mx-8">
                <MoveUpReveal className="flex-1 delay-450">
                    <Card className="md:flex md:flex-row items-center gap-4 p-4 bg-gradient-to-b md:bg-gradient-to-r from-[#f5f5f50e] from-0% via-[#f5f5f50e] via-0% md:via-70% to-100% to-[#f5908157]">
                        <div className="transition-all text-md text-center md:text-left md:text-lg flex-1">
                            <RevealText
                                text="Dapatkan Penawaran Spesial untuk Menjadi Mitra Kami dan Mulai Kembangkan Bisnis Bersama Kami."
                                startDelay={100}
                                step={25}
                            />
                        </div>
                        <Link href={"https://wa.me/message/EU2TRMLX3TJYN1"}><Button color="danger" variant="solid" size="lg" className="font-bold text-lg dark:bg-[#d43a22] bg-[#ff2200]">Gabung Sekarang!</Button></Link>
                    </Card>
                </MoveUpReveal>
            </div>

        </div>

    </div>
}