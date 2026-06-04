import { searchCategoriesData } from "@/data/navigationData"
import Button from "./Button"
import { ChevronDown } from "lucide-react"

type Props = {}

const SearchBar = (props: Props) => {
    return (
        <div className="w-full max-w-[665px] h-[40px] border-2 border-primary rounded-card hidden lg:flex items-center">
            <input
                type="search"
                name=""
                id=""
                placeholder="Search"
                className="flex-1 min-w-0 w-[420px]x h-full p-2.5 placeholder:text-text-muted focus:outline-none"
            />

            <div className="relative h-full">
                <select name="search_categories" id="" className="border-x border-primary min-w-max shrink-0 h-full px-2.5 txt-body focus:outline-none appearance-none">
                    {searchCategoriesData.map((category, idx) => (
                        <option value={category} key={idx}>
                            {category}
                        </option>
                    ))}
                </select>

                {/* custom chevron */}
                <ChevronDown
                    className="text-gray-500 w-4 h-4 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none"
                />
            </div>

            <Button className="rounded-none">Search</Button>
        </div>
    )
}

export default SearchBar