import { Suspense } from "react";
import Varian from "./_components/varian";

export default async function Variant() {
    return <Suspense>
        <Varian />
    </Suspense>
}