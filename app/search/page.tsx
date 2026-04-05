import { Suspense } from "react";
import SearchPage from "../_components/page-search";

export default async function Search() {
    return <Suspense>
        <SearchPage />
    </Suspense>
}
