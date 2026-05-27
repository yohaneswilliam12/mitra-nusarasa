"use client"

import { useEffect } from "react";
import Beranda from "./segment-beranda";
import Kemitraan from "./segment-kemitraan";
import TentangKami from "./segment-tentang-kami";
import TipeVarian from "./segment-tipe-varian";
import PaketUsaha from "./segment-paket-usaha";

const HomePage = () => {
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const el = document.querySelector(hash);
            if (el) {
                el.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }
    }, []);
    return <>
        <section id="beranda">
            <Beranda />
        </section>
        <section id="paket-usaha">
            <PaketUsaha/>
        </section>
        <section id="varian">
            <TipeVarian />
        </section>
        <section id="kemitraan">
            <Kemitraan />
        </section>
        <section id="tentang-kami">
            <TentangKami />
        </section>
    </>
}

export default HomePage;