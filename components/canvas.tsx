'use client';

import { useEffect, useRef } from 'react';
import WebGLFluidEnhanced from 'webgl-fluid-enhanced';

const Canvas = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const fluidRef = useRef<WebGLFluidEnhanced | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        fluidRef.current = new WebGLFluidEnhanced(containerRef.current);

        fluidRef.current.setConfig({
            hover: true,
            transparent: true,
            bloom: true,
            curl: 2,
            pressure: 0,
            brightness: 0.05
        });

        fluidRef.current.start();

        return () => {
            fluidRef.current?.stop();
        };
    }, []);

    return <div className="fixed w-full h-full flex top-0">
        <div ref={containerRef} className="flex-1" />
    </div >
};

export default Canvas;
