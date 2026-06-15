import { Check } from "lucide-react"
import StarsDynamicRatings from "./StarsDynamicRatings"
import type { IfilterOption } from "@/data/shopFiltersData"
import type { IsearchCategoriesItem } from "@/types/menuTypes"

type Props = {
    item: IfilterOption,
    selectedIds: string[],
    onClick?: () => void,
    variant?: 'checkbox' | 'radio' | 'noCheckRadio',
}

const CheckboxBtn = ({ item, selectedIds, onClick, variant = 'checkbox' }: Props) => {

    const isSelected = selectedIds?.includes(item.id);

    return (
        <button
            type="button"
            onClick={onClick}
            className={`w-full flex items-center gap-3 py-2.5 px-2 txt-base text-gray-600 capitalize transition-all duration-300 ease-out cursor-pointer hover:bg-gray-200 
                            ${isSelected ? 'text-primary' : ''}
                        `}
        >
            {variant === 'checkbox' && (

                <div className={`
                        w-5 h-5 shrink-0 border-2 border-checkbox-border rounded-card grid place-items-center
                        ${isSelected ? "bg-primary border-primary" : ''}`}>
                    {isSelected &&
                        <Check className="text-white w-4 h-4" />
                    }
                </div>
            )}

            {variant === 'radio' && (
                <div className={`
                    w-5 h-5 shrink-0 border-2 border-checkbox-border rounded-full grid place-items-center 
                    ${isSelected ? "bg-primary border-primary" : ''}`}>
                    {isSelected &&
                        <div className="w-full h-full border-2 border-white rounded-full"></div>
                    }
                </div>
            )}

            {(item.label && variant === 'noCheckRadio')
                ?
                <p className={`text-gray-600 ${isSelected ? 'text-primary' : ''
                    }`}>
                    {item.label}
                </p>
                :
                (item.label
                    ?
                    <p className="text-text-primary">
                        {item.label}
                    </p>
                    :
                    <StarsDynamicRatings
                        rating={item.rating!}
                    />
                )
            }

            {/* {item.label &&
                <p className="text-text-primary">
                    {item.label}
                </p>
            }
            {(item.label && variant === 'noCheckRadio') &&
                <p className={`text-gray-600`}>
                    {item.label}
                </p>
            }
            {item.rating &&
                <StarsDynamicRatings
                    rating={item.rating!}
                />
            } */}
        </button >
    )
}

export default CheckboxBtn