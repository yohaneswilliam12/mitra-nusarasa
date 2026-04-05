import { SearchParams } from "@/types";
import SearchPage from "../_components/page-search";

export default async function Search({ searchParams }: { searchParams?: Promise<SearchParams> }) {
    // const keyword = (searchParams)?.keyword??"";
    // await searchParams
    const keyword = "";
    return <SearchPage keyword={keyword??""} />
}
