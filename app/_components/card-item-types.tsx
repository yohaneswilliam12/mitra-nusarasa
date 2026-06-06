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
    return <Card className="overflow-visible">
        <CardBody className="overflow-visible">
            <div className={`flex flex-col gap-2 ${(props.index ?? 0) % 2 == 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className='flex-1 flex flex-col'>
                    <p className={`transition-all text-2xl md:text-3xl lg:text-4xl md:my-5 md:mx-8 mx-5 flex-1 font-bold text-center ${(props.index ?? 0) % 2 == 0 ? 'md:text-left' : 'md:text-right'}`}>{props.name}</p>
                    <div className={`px-4 gap-4 hidden md:block ${(props.index ?? 0) % 2 == 0 ? 'md:text-left' : 'md:text-right'}`}>
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
                        className={`w-80 rounded-2xl transition-all duration-400 ${loaded ? 'scale-100' : `${(props.index ?? 0) % 2 == 0 ? 'translate-x-4' : '-translate-x-4'} scale-95`} mx-auto ${(props.index ?? 0) % 2 == 0 ? 'md:ml-auto' : 'md:mr-auto'}`}
                        src={props.image}
                        width={1218}
                        height={760}
                    />

                </div>
                <div className={`px-4 gap-4 md:hidden text-center`}>
                    {props.url ?
                        <Link href={props.url}><Button variant="light" color="danger" size="lg" className="text-large font-bold">{props.caption}</Button></Link>
                        :
                        <Button variant="light" color="danger" size="lg" className="text-large font-bold" onPress={emptyAlert}>{props.caption}</Button>
                    }
                </div>
            </div>
        </CardBody>

    </Card >
}

export default ItemTypesCard;