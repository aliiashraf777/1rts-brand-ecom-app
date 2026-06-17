import { searchCategoriesData } from "@/data/navigationData";
import { filterVerifiedData } from "@/data/shopFiltersData";
import type { ProductFiltersTy } from "@/pages/shop/Shop";
import CheckboxBtn from "./CheckboxBtn";
import { TopSortSelector } from "../common/DropdownSelectors";

type Props = {
    productFilters: ProductFiltersTy,
    updateVerified: () => void,
}

const TopFiltersBar = ({ productFilters, updateVerified }: Props) => {

    return (
        <div className="w-full bg-white p-2.5 border border-gray-300 rounded-card mb-section">
            <div className="w-full flex justify-between items-center gap-2">
                {/* selected category */}
                <div className="flex items-center gap-1">
                    {productFilters.categoryIds.length === 0
                        ? (
                            <p className="txt-small text-gray-500 italic">
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

                </div>
            </div>
        </div >
    )
}

export default TopFiltersBar