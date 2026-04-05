import { SearchParams } from "@/types";
import SearchPage from "../_components/page-search";

export default async function Search({ searchParams }: { searchParams?: SearchParams }) {
    return <SearchPage keyword={searchParams?.keyword??""} />
}
