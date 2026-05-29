"use client";

import { useEffect, useState } from "react";

const AlternatePage = () => {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        setLoaded(true);
    }, []);

    return <div className="h-screen flex flex-col bg-yellow-300">
        <div className="flex-1 w-full items-center flex flex-col justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10">
            <div className="relative">
                <img src="./subject-pickup.png" alt="mascot" className={`w-70 sm:w-80 md:w-90 lg:w-100 xl:w-110 [filter:drop-shadow(4px_0_0_white)_drop-shadow(-4px_0_0_white)_drop-shadow(0_4px_0_white)_drop-shadow(0_-4px_0_white)] transition-all duration-500 ease-out mx-auto my-8 ${loaded ? 'scale-100 opacity-100 blur-none' : 'scale-110 opacity-0 blur-md'}`} />
            </div>
            <div className={`flex flex-col gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 transition-all duration-500 ease-out delay-25 mx-auto my-8 ${loaded ? 'scale-100 opacity-100 blur-none' : 'scale-110 opacity-0 blur-md'}`}>
                <h1 className={`text-red-500 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-poppins text-center [filter:drop-shadow(4px_0_0_white)_drop-shadow(-4px_0_0_white)_drop-shadow(0_4px_0_white)_drop-shadow(0_-4px_0_white)]`}>COMING SOON</h1>
                <h1 className={`text-red-500 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-poppins text-center [filter:drop-shadow(4px_0_0_white)_drop-shadow(-4px_0_0_white)_drop-shadow(0_4px_0_white)_drop-shadow(0_-4px_0_white)]`}>Jakarta 2026</h1>
            </div>
        </div>
        <footer className="w-full flex items-center justify-center py-3">
            <div className="flex items-center gap-1 text-current">
                <span className="text-default">&copy; 2026</span>
                <p className="text-primary">Mitra Nusarasa Mandiri</p>
            </div>
        </footer>
    </div>
}

export default AlternatePage;