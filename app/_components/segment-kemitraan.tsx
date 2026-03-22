"use client"

import { Parallax } from "react-scroll-parallax"
import { MoveUpReveal } from "./component-move-up-reveal-item"
import { RevealText } from "./component-reveal-text"
import { Card } from "@heroui/card"
import { Button } from "@heroui/button"
import * as LucideReact from 'lucide-react';
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

interface CardHighlights {
    icon?: keyof typeof LucideReact
    label: string
    color?: string
    colorDark?: string
}

const highlights: CardHighlights[] = [
    {
        icon: 'MapPin',
        label: 'Analisa Lokasi',
        color: 'rgb(149,78,255)',
        colorDark: 'rgb(220,68,255)'
    },
    {
        icon: 'Image',
        label: 'Pemasaran Digital',
        color: 'rgb(48,178,252)',
        colorDark: 'rgb(10,160,254)',
    },
    {
        icon: 'Book',
        label: 'Penulisan Resep',
        color: 'rgb(247,131,32)',
        colorDark: 'rgb(255,191,12)',
    },
    {
        icon: 'Phone',
        label: 'Konsultasi',
        color: 'rgb(85,137,97)',
        colorDark: 'rgb(85,255,120)',
    }
]

const CardHighlights = (props: CardHighlights) => {
    const { resolvedTheme } = useTheme();
    const [theme, setTheme] = useState<string | undefined>(undefined);
    useEffect(() => {
        setTheme(resolvedTheme);
    }, [resolvedTheme]);
    const Icon = (props.icon ? LucideReact[props.icon] : LucideReact.HelpCircle) as LucideReact.LucideIcon;
    return <Card className="p-8 flex h-full flex-col gap-16 text-2xl font-medium" style={{ color: theme === 'dark' ? props.colorDark : props.color, backgroundColor: theme === 'dark' ? props.colorDark?.replace('rgb', 'rgba').replace(')', ', 0.2)') : props.color?.replace('rgb', 'rgba').replace(')', ', 0.2)') }}>
        <Icon size={40} strokeWidth={1.2} />
        {props.label}
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-8">
                {highlights.map((item, index) => (
                    <MoveUpReveal className={`delay-${index+1}00`} key={index}>
                        <CardHighlights {...item} />
                    </MoveUpReveal>
                ))}
            </div>
            <div className="flex mx-8">
                <MoveUpReveal className="flex-1 delay-450">
                    <Card className="flex flex-row items-center gap-8 p-4">
                        <div className="transition-all text-md md:text-lg flex-1">
                            <RevealText
                                text="Dapatkan Penawaran Spesial untuk Menjadi Mitra Kami dan Mulai Kembangkan Bisnis Bersama Kami."
                                startDelay={100}
                                step={25}
                            />
                        </div>
                        <Button color="success" variant="flat" size="lg">Bergabung</Button>
                    </Card>
                </MoveUpReveal>
            </div>

        </div>

    </div>
}