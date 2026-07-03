"use client";

import { MoveReveal } from "@/app/_components/component-move-reveal-item";
import { RevealText } from "@/app/_components/component-reveal-text";
import { Reveal } from "@/components/reveal-item";
import { Button } from "@heroui/button";
import { Check, ChevronLeft } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import Link from "next/link"

export default function Standard() {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        setLoaded(true);
    }, []);
    return <div className="w-full mb-16">
        <div className="flex">
            <MoveReveal direction="left"><Link href="/#paket-usaha"><Button variant="light"><ChevronLeft /></Button></Link></MoveReveal>
        </div>
        <Parallax speed={-2}>
            <div className="flex justify-center font-bold text-3xl lg:text-5xl mb-8">
                <MoveReveal direction="up" className="delay-100">Kemitraan</MoveReveal>
            </div>
        </Parallax>
        <div className="flex flex-col gap-8">
            <div className="flex mx-8">
                <MoveReveal direction="up" className="flex-1 delay-100">
                    <div className="transition-all mx-10 md:mx-20 text-center font-semibold text-2xl md:text-4xl leading-10 md:leading-12">
                        <RevealText
                            text="Standard"
                            startDelay={200}
                            step={25}
                        />
                    </div>
                </MoveReveal>
            </div>
            <div className="lg:flex gap-8 mt-2 mb-32">
                <div className="lg:w-[70%]">
                    <Reveal>
                        <Image src="/partnership/standard.webp" alt="standard-package" width={1000} height={1000} className={`transition-all duration-500 ${loaded ? 'scale-100' : 'scale-110'}`} />
                    </Reveal>
                </div>
                <div className="mx-8 my-16 lg:m-0">
                    <div className="flex">
                        <MoveReveal direction="up">
                            <ul className="flex flex-col gap-2">
                                <li><Reveal className="flex gap-2 font-medium delay-0"><Check color="red" />1 Unit Stand Premium</Reveal></li>
                                <li><Reveal className="flex gap-2 font-medium delay-50"><Check color="red" />Deep Frier & Peralatan</Reveal></li>
                                <li><Reveal className="flex gap-2 font-medium delay-100"><Check color="red" />Perlengkapan Operasional</Reveal></li>
                                <li><Reveal className="flex gap-2 font-medium delay-150"><Check color="red" />Apron & Seragam</Reveal></li>
                                <li><Reveal className="flex gap-2 font-medium delay-200"><Check color="red" />Banner & Media Promosi</Reveal></li>
                                <li><Reveal className="flex gap-2 font-medium delay-250"><Check color="red" />Buku SOP</Reveal></li>
                                <li><Reveal className="flex gap-2 font-medium delay-300"><Check color="red" />Training & Pendampingan</Reveal></li>
                            </ul>
                        </MoveReveal>
                    </div>
                    <div className="flex my-16">
                        <MoveReveal direction="up" className="delay-450">
                            <Reveal><Link href={"https://wa.me/message/EU2TRMLX3TJYN1"}><Button color="danger" variant="solid" size="lg" className="text-large font-bold bg-[rgb(255,58,65)]">Hubungi kami</Button></Link></Reveal>
                        </MoveReveal>
                    </div>
                </div>
            </div>
        </div>
    </div>
}