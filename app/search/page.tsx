import SearchPage from "../_components/page-search";

import { PageProp } from "@/types";


export default async function Search(props: PageProp) {
    return <SearchPage keyword={(await props.params).id} />
}
