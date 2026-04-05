import { ItemVariants } from "@/types";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";

const ItemVariantCard = (props: ItemVariants) => {
    const { resolvedTheme } = useTheme();
    const [theme, setTheme] = useState<string | undefined>(undefined);
    useEffect(() => {
        setTheme(resolvedTheme);
    }, [resolvedTheme]);
    return <Card className="py-4 overflow-visible">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start gap-2 overflow-auto">
            <p className={`transition-all text-xl md:text-2xl font-bold`} style={{ color: theme === 'dark' ? props.colorDark : props.color }}>{props.name}</p>
            <small className="text-default-500 min-h-20">{props.description}</small>
        </CardHeader>
        <CardBody className="overflow-visible py-0 h-50">
            <Parallax speed={2} className="my-auto">
                <Image
                    alt={props.name}
                    className="w-80 m-auto"
                    src={props.image}
                    width={1218}
                    height={760}
                />
            </Parallax>
        </CardBody>
    </Card>
}

export default ItemVariantCard;