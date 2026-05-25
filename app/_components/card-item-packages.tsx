import { ItemPackages } from "@/types";
import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";

const ItemPackagesCard = (props: ItemPackages) => {
    const { resolvedTheme } = useTheme();
    const [theme, setTheme] = useState<string | undefined>(undefined);
    useEffect(() => {
        setTheme(resolvedTheme);
    }, [resolvedTheme]);
    return <Card className="py-4 overflow-visible">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start gap-2 overflow-auto">
            <p className={`transition-all text-xl md:text-2xl font-bold`} style={{ color: theme === 'dark' ? props.colorDark : props.color }}>{props.name}</p>
            <small className="text-default-500 md:min-h-20 hidden sm:flex">{props.description}</small>
        </CardHeader>
        <CardBody className="overflow-visible py-5 sm:py-10 md:min-h-90 lg:min-h-100">
            <Parallax speed={2} className="my-auto">
                <Image
                    alt={props.name}
                    className="w-80 m-auto rounded-2xl"
                    src={props.image}
                    width={1218}
                    height={760}
                />
            </Parallax>
        </CardBody>
        <div className="px-4 flex flex-col gap-4">
            <p className="text-lg md:text-2xl font-semibold">{props.price}</p>
            <Button color="danger" variant="solid" size="lg" className="text-large font-bold bg-[rgb(255,58,65)]">{props.caption}</Button>
        </div>
    </Card>
}

export default ItemPackagesCard;