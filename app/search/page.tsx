// import { SearchParams } from "@/types";
import SearchPage from "../_components/page-search";

export default async function Search() {
    const keyword = "";
    return <SearchPage keyword={keyword??""} />
}
