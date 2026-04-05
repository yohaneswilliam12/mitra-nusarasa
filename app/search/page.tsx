import { SearchParams } from "next/dist/server/request/search-params";
import SearchPage from "../_components/page-search";

export default async function Search({ searchParams }: { searchParams?: SearchParams }) {
    return <SearchPage keyword={String(searchParams?.keyword??"")} />
}
