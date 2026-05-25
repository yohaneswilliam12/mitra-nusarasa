import { Button, ButtonProps } from "@heroui/button"
import { ReactElement } from "react";

interface FloatingActionButtonProviderProps {
    children: ReactElement;
}

const FloatingActionButtonProvider = (props: FloatingActionButtonProviderProps) => {
    return <div className="fixed flex right-0 bottom-0 p-5">{props.children}</div>
}

const FloatingActionButton = (props: ButtonProps) => {
    return <Button {...props} className="rounded-3xl" size="lg" />
}

export {
    FloatingActionButton,
    FloatingActionButtonProvider
}