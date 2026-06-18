import { hasActiveFilters, type ProductFiltersTy } from "@/pages/shop/Shop"

type Props = {
    productFilters: ProductFiltersTy
    onClick: () => void,
    variant?: 'text' | 'onlyBtn'
    borderT?: boolean,
}

const ClearAllFilters = ({ productFilters, onClick, variant = 'text', borderT }: Props) => {
    return (
        <div
            className={`flex items-center justify-between py-3 px-2 ${borderT ? 'border-t border-gray-300' : ''} `}
        >
            <p
                className={`txt-body-medium ${variant === "onlyBtn" && 'hidden'}`}
            >
                Filters
            </p>

            {hasActiveFilters(productFilters) && (
                <button
                    type="button"
                    onClick={onClick}
                    className="txt-small text-primary cursor-pointer hover:underline"
                >
                    Clear all
                </button>
            )}
        </div>
    )
}

export default ClearAllFilters