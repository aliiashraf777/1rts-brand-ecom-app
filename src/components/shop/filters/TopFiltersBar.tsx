import { searchCategoriesData } from "@/data/navigationData";
import { filterVerifiedData } from "@/data/shopFiltersData";
import type { ProductFiltersTy } from "@/pages/shop/Shop";
import CheckboxBtn from "./CheckboxBtn";
import { TopSortSelector } from "../../common/header/DropdownSelectors";
import { IoGridSharp } from "react-icons/io5";
import { FaThList } from "react-icons/fa";
import { useProductViewContext } from "@/context/ProductViewContext";

type Props = {
    productFilters: ProductFiltersTy,
    updateVerified: () => void,
}

const TopFiltersBar = ({ productFilters, updateVerified }: Props) => {

    const { isListView, isGridView, productViewToggle } = useProductViewContext();

    return (
        <div className="overflow-x-hiddenx w-full bg-white p-2.5 border border-gray-300 rounded-card mb-section">
            <div className="w-full flex justify-between items-center gap-2">
                {/* selected category */}
                <div className="flex items-center gap-1">
                    {productFilters.categoryIds.length === 0
                        ? (
                            <p className="txt-small text-gray-300 italic">
                                no category selected
                            </p>)
                        :
                        (<>
                            {productFilters.categoryIds.slice(0, 1).map((id) => {
                                const item = searchCategoriesData.find((c) => c.id === id);

                                if (!item) return null;

                                return (
                                    <span
                                        key={item.id}
                                        className="txt-base"
                                    >
                                        {item.items} items in {" "}
                                        <span className="font-medium">
                                            {item.label}
                                        </span>
                                    </span>
                                )
                            })}
                        </>)
                    }
                </div>

                {/* right filters */}
                <div className="flex items-center gap-2.5">
                    {/* verified check */}
                    <div className="w-[144px]x border border-gray-100 rounded-card">
                        {filterVerifiedData.map((item) => (
                            <CheckboxBtn
                                key={item.id}
                                item={item}
                                selectedIds={productFilters.verified ? [item.id] : []}
                                onClick={updateVerified}
                            />
                        ))}
                    </div>

                    {/* sort selectors - featured etc */}
                    <TopSortSelector />

                    {/* list-grid view toggle */}
                    <div className="flex items-center border border-gray-300 rounded-card text-text-primary">
                        <button
                            type="button"
                            onClick={productViewToggle}
                            className={`p-2 cursor-pointer border-r border-gray-300 
                                ${isGridView ? "bg-gray-200" : ""}`}
                        >
                            <IoGridSharp
                                className="w-6 h-6"
                            />
                        </button>
                        <button
                            type="button"
                            onClick={productViewToggle}
                            className={`p-2 cursor-pointer 
                                ${isListView ? 'bg-gray-200' : ''}`}
                        >
                            <FaThList
                                className="w-6 h-6"
                            />
                        </button>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default TopFiltersBar