import { Reveal } from "@/components/reveal-item";

interface Props {
    text: string | string[];
    startDelay?: number;
    step?: number;
    className?: string;
}

export function RevealText({
    text,
    startDelay = 0,
    step = 100,
    className,
}: Props) {
    return (
        <span className={className}>
            {typeof text == 'string' ? text.split(" ").map((word, i) => (
                <Reveal
                    key={i}
                    className="inline-block"
                    style={{
                        transitionDelay: `${startDelay + i * step}ms`,
                    }}
                >
                    {word + "\u00A0"}
                </Reveal>
            )) : text.map((word, i) => (
                <Reveal
                    key={i}
                    className="inline-block"
                    style={{
                        transitionDelay: `${startDelay + i * step}ms`,
                    }}
                >
                    {word}
                </Reveal>
            ))}
        </span>
    );
}