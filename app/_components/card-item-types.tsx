import { ItemTypes } from "@/types";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { addToast } from "@heroui/toast";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ItemTypesCard = (props: ItemTypes) => {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        setLoaded(true);
    }, []);

    const emptyAlert = () => {
        addToast({
            title: "Belum Tersedia",
            description: "Tunggu sebentar ya, kami sedang mempersiapkan menunya!",
            variant: 'flat',
            color: "foreground"
        })
    }
    return <Card className="py-4 overflow-visible">
        <CardBody className="overflow-visible my-2">
            <div className={`flex ${(props.index ?? 0) % 2 == 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className='flex-1 flex flex-col'>
                    <p className={`transition-all text-2xl md:text-3xl mx-10 flex-1 font-bold ${(props.index ?? 0) % 2 == 0 ? 'text-left' : 'text-right'}`}>{props.name}</p>
                    <div className={`px-4 gap-4 ${(props.index ?? 0) % 2 == 0 ? 'text-left' : 'text-right'}`}>
                        {props.url ?
                            <Link href={props.url}><Button variant="light" color="danger" size="lg" className="text-large font-bold">{props.caption}</Button></Link>
                            :
                            <Button variant="light" color="danger" size="lg" className="text-large font-bold" onPress={emptyAlert}>{props.caption}</Button>
                        }
                    </div>
                </div>
                <div>
                    <Image
                        alt={props.name}
                        className={`w-80 rounded-2xl transition-all duration-400 ${loaded ? 'scale-100' : `${(props.index ?? 0) % 2 == 0 ? 'translate-x-4' : '-translate-x-4'} scale-95`} ${(props.index ?? 0) % 2 == 0 ? 'ml-auto' : 'mr-auto'}`}
                        src={props.image}
                        width={1218}
                        height={760}
                    />

                </div>
            </div>
        </CardBody>

    </Card >
}

export default ItemTypesCard;