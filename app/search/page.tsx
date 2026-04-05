import { SearchParams } from "next/dist/server/request/search-params";
import SearchPage from "../_components/page-search";

export default async function Search({ searchParams }: { searchParams?: Promise<SearchParams> }) {
    return <SearchPage keyword={String((await searchParams)?.keyword??"")} />
}
