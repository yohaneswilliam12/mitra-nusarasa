"use client"

import { Parallax } from "react-scroll-parallax"
import { MoveUpReveal } from "./component-move-up-reveal-item"

export default function TentangKami() {
    return <div className="w-full">
        <Parallax speed={-2}>
            <div className="flex justify-center font-bold text-3xl lg:text-5xl my-8">
                <MoveUpReveal className="delay-100">Tentang Kami</MoveUpReveal>
            </div>
        </Parallax>

    </div>
}