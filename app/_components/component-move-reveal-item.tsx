import { useOnVisible } from "@/components/reveal-item";
import { CSSProperties } from "react";

interface RevealProps {
    children: React.ReactNode;
    className?: string;
    direction: "up" | "down" | "left" | "right";
    style?: CSSProperties | undefined;
};

export function MoveReveal({ children, className, direction, style }: RevealProps) {
    const { ref, isVisible } = useOnVisible({ threshold: 0.2 });

    return (
        <span ref={ref} className={`transition-[opacity,filter,transform,translate,font] duration-500 ease-out origin-center ${isVisible ? `opacity-100 blur-none scale-100 ${'translate-y-0 translate-x-0'}` : `opacity-0 blur-sm scale-110 ${direction == 'up' ? 'translate-y-10' : direction == 'down' ? '-translate-y-10' : direction == 'left' ? 'translate-x-10' : direction == 'right' ? '-translate-x-10' : 'translate-y-10'}`} ${className}`} style={style}>
            {children}
        </span>
    );
}