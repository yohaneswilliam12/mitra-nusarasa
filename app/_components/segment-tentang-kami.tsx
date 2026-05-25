"use client"

import { Parallax } from "react-scroll-parallax"
import { MoveUpReveal } from "./component-move-up-reveal-item"
import { RevealText } from "./component-reveal-text"
import { Card } from "@heroui/card"
import Image from "next/image"

export default function TentangKami() {
    return <div className="w-full py-8">
        <Parallax speed={-2}>
            <div className="flex justify-center font-bold text-3xl lg:text-5xl my-8">
                <MoveUpReveal className="delay-100">Tentang Kami</MoveUpReveal>
            </div>
        </Parallax>
        <div className="transition-all mx-10 md:mx-20 text-center text-2xl md:text-4xl leading-10 md:leading-12 py-16 md:py-32">
            <RevealText
                text="Dari inspirasi kuliner Jepang yang simpel dan estetis, kami menghadirkan rasa unik sekaligus membuka peluang untuk berkembang bersama."
                startDelay={0}
                step={25}
            />
        </div>
        <div className="md:grid md:grid-cols-8 gap-4 mx-8">
            <div className="col-span-3 mt-16 mb-32 md:my-auto italic text-2xl text-center flex flex-col">
                <RevealText
                    text={['"シンプル、', '味わい豊か。"']}
                    startDelay={0}
                    step={50}
                />
                <RevealText
                    text={'"Sederhana, penuh rasa."'}
                    className="text-lg font-light"
                    startDelay={150}
                    step={25}
                />
            </div>
            <div className="transition-all col-span-5 grid grid-cols-4 gap-2 sm:gap-4">
                <MoveUpReveal className="flex col-span-2 row-span-2">
                    <Card>
                        <Image alt="image-1" src={'./placeholder.jpg'} width={760} height={760} className="m-auto" />
                    </Card>
                </MoveUpReveal>
                <MoveUpReveal className="flex col-span-1 row-span-1 delay-50">
                    <Card>
                        <Image alt="image-1" src={'./placeholder.jpg'} width={760} height={760} className="m-auto" />
                    </Card>
                </MoveUpReveal>
                <MoveUpReveal className="flex col-span-1 row-span-1 delay-100">
                    <Card>
                        <Image alt="image-1" src={'./placeholder.jpg'} width={760} height={760} className="m-auto" />
                    </Card>
                </MoveUpReveal>
                <MoveUpReveal className="flex col-span-1 row-span-1 delay-150">
                    <Card>
                        <Image alt="image-1" src={'./placeholder.jpg'} width={760} height={760} className="m-auto" />
                    </Card>
                </MoveUpReveal>
                <MoveUpReveal className="flex col-span-1 row-span-2 delay-300">
                    <Card>
                        <Image alt="image-1" src={'./placeholder.jpg'} width={760} height={760} className="m-auto" />
                    </Card>
                </MoveUpReveal>
                <MoveUpReveal className="flex col-span-1 row-span-1 delay-200">
                    <Card>
                        <Image alt="image-1" src={'./placeholder.jpg'} width={760} height={760} className="m-auto" />
                    </Card>
                </MoveUpReveal>
                <MoveUpReveal className="flex col-span-2 row-span-1 delay-250">
                    <Card>
                        <Image alt="image-1" src={'./placeholder.jpg'} width={760} height={760} className="m-auto" />
                    </Card>
                </MoveUpReveal>
            </div>
        </div>

    </div>
}