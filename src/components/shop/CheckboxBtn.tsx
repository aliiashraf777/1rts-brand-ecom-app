import { Check } from "lucide-react"
import StarsDynamicRatings from "./StarsDynamicRatings"

type Props = {
    item: any,
    text?: string,
    selectedState: any,
    onClick?: () => void,
    variant?: 'checkbox' | 'radio',
    rating?: number,
}

const CheckboxBtn = ({ item, text, selectedState, onClick, variant = 'checkbox', rating }: Props) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`w-full flex items-center gap-3 py-2.5 px-2 txt-base text-gray-600 capitalize transition-all duration-300 ease-out cursor-pointer hover:bg-gray-200 
                            ${selectedState === item ? 'text-primary' : ''}
                        `}
        >
            {variant === 'checkbox'
                ?
                <div className={`w-max h-max border-2 border-checkbox-border rounded-card grid place-items-center ${selectedState === item ? "bg-primary border-primary" : ''}`}>
                    {selectedState &&
                        <Check className="text-white w-4 h-4" />
                    }
                </div>
                :
                <div className={`w-max h-max border-2 border-checkbox-border rounded-full grid place-items-center ${selectedState === item ? "bg-primary border-primary" : ''}`}>
                    {selectedState &&
                        <div className="w-5 h-5 border-3 border-white rounded-full"></div>
                    }
                </div>
            }
            {text
                ?
                <p className="text-text-primary">
                    {text}
                </p>
                :
                <StarsDynamicRatings
                    rating={rating!}
                />
            }
        </button>
    )
}

export default CheckboxBtn