import { useOnVisible } from "@/components/reveal-item";

interface RevealProps {
    children: React.ReactNode;
    className?: string;
};

export function VariantReveal({ children, className }: RevealProps) {
    const { ref, isVisible } = useOnVisible({ threshold: 0.2 });

    return (
        <div ref={ref} className={`transition-[opacity,filter,transform,translate] duration-500 ease-out origin-center ${isVisible ? "opacity-100 blur-none scale-100 translate-y-0" : "opacity-0 blur-sm scale-110 translate-y-10"} ${className}`}>
            {children}
        </div>
    );
}