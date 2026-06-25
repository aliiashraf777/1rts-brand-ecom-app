import type { ProductFiltersTy } from "@/pages/shop/Shop"
import Button from "../../common/btns/Button"
import ClearAllFilters from "./ClearAllFilters"
import { X } from "lucide-react"
import type { AppliedFiltersChipsTy } from "@/hooks/useFiltersChips"

type Props = {
    appliedFiltersChipsH: AppliedFiltersChipsTy[],
    productFilters: ProductFiltersTy,
    clearAllFilters: () => void,
}

const AppliedFiltersChips = ({ appliedFiltersChipsH, productFilters, clearAllFilters }: Props) => {
    return (
        <div className="w-full h-max mb-section flex min-w-0 flex-wrap items-center gap-2">
            {appliedFiltersChipsH.length === 0
                ?
                (<p className="txt-small text-gray-300 italic px-2">
                    no filters applied
                </p>)
                :
                (<>
                    {appliedFiltersChipsH.map((item) => (
                        <Button
                            key={`${item.key}-${item.label}`}
                            variant="white"
                            onClick={item.onRemove}
                            className="flex items-center gap-2 px-2 py-1.5 txt-base text-gray-600 capitalize border-primary shadow-card"
                        >
                            {item.label}
                            <X
                                className="w-4 h-4"
                            />
                        </Button>
                    ))}

                    <ClearAllFilters
                        variant="onlyBtn"
                        productFilters={productFilters}
                        onClick={clearAllFilters}
                    />

                </>)
            }
        </div>
    )
}

export default AppliedFiltersChips