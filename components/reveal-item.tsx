import { useEffect, useRef, useState } from "react";

type Props = {
    children: React.ReactNode;
    className?: string;
};

function useOnVisible(options?: IntersectionObserverInit) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
            }
        }, options);

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, [options]);

    return { ref, isVisible };
}

export function Reveal({ children, className }: Props) {
    const { ref, isVisible } = useOnVisible({ threshold: 0.2 });

    return (
        <div ref={ref} className={`transition-all duration-500 ease-out origin-center ${isVisible ? "opacity-100 blur-none scale-100" : "opacity-0 blur-sm scale-110"} ${className}`}>
            {children}
        </div>
    );
}