"use client"

import { Reveal } from "@/components/reveal-item";
import Image from "next/image"
import { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax"

export default function Beranda() {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        setLoaded(true);
    }, []);
    return <div className="w-full flex flex-col">
        <Parallax speed={-5}>
            <Image src={'./placeholder.jpg'} width={1200} height={1394} alt="slogan" priority className={`transition-all duration-500 ease-out w-164 mx-auto my-8 ${loaded ? 'scale-100 opacity-100 blur-none' : 'scale-110 opacity-0 blur-md'} rounded-2xl`} />
        </Parallax>
        <div className="p-8 flex flex-col gap-1 lg:gap-2">
            <div className="transition-all text-center font-bold text-2xl sm:text-3xl lg:text-5xl text-[rgb(255,58,65)]">
                <Reveal className="delay-0">Renyah </Reveal>
                <Reveal className="delay-100">di </Reveal>
                <Reveal className="delay-200">luar, </Reveal>
                <Reveal className="delay-300">lembut </Reveal>
                <Reveal className="delay-400">di </Reveal>
                <Reveal className="delay-500">dalam</Reveal>
            </div>
            <div className="transition-all text-center font-bold text-xl sm:text-2xl lg:text-4xl text-[rgb(255,58,65)]">
                <Reveal className="delay-600">Lumer </Reveal>
                <Reveal className="delay-700">dengan </Reveal>
                <Reveal className="delay-800">krim </Reveal>
                <Reveal className="delay-900">favoritmu </Reveal>
                <Reveal className="delay-1000">di </Reveal>
                <Reveal className="delay-1100">setiap </Reveal>
                <Reveal className="delay-1200">gigitan</Reveal>
            </div>
        </div>
    </div>
}