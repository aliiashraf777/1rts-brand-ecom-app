import { useCurrencyContext } from "@/context/CurrencyContext";
import { useFlagsContext } from "@/context/FlagsContext";
import { useSortContext } from "@/context/TopSortContext";
import { langCurrencyData, shipToFlagsData } from "@/data/navigationData";
import { sortTopData, type IfilterOption } from "@/data/shopFiltersData";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";


export const CurrencySelector = () => {

    // const [selectedCurrency, setSelectedCurrency] = useState(langCurrencyData[0]);
    // const [isCurrencyOpen, setIsCurrencyOpen] = useState<boolean>(false);

    const {
        selectedCurrency, isCurrencyOpen, currencyToggle, currencyClose, currencySet
    } = useCurrencyContext();

    return (
        <div className="relative">
            <button
                onClick={currencyToggle}
                className="flex items-center gap-2 relative txt-body-title cursor-pointer"
            >
                <span>
                    {selectedCurrency.language}, {selectedCurrency.currencyCode}
                </span>

                <ChevronDown
                    className={`text-gray-500 w-4 h-4 
                    ${isCurrencyOpen ? 'rotate-180' : ''}`}
                />
            </button>

            {/* currency custom dropDown Panel */}
            {/* {isCurrencyOpen && ( */}
            <div
                className={`min-w-max absolute top-full right-0 mt-2 z-10 bg-white border border-gray-300 rounded-card overflow-hidden shadow-card-lg flex flex-col transition-all duration-300 ease-in 
                    ${isCurrencyOpen
                        ? 'pointer-events-auto opacity-100 translate-y-0'
                        : 'pointer-events-none opacity-0 -translate-y-2'}`}
            >
                {
                    langCurrencyData.map((item, idx) => (
                        <button
                            key={`${item.currency}-${idx}`}
                            onClick={() => {
                                currencySet(item)
                                currencyClose()
                            }}
                            className="w-fullx px-4 py-2 hover:bg-primary-light/50 cursor-pointer border-b border-gray-200 text-left"
                        >
                            <span>{item.language}, {item.currencyCode}</span>
                        </button>
                    ))
                }
            </div>
            {/* )} */}
        </div>
    )
}


type flagsDirectionTy = {
    direction?: 'top' | 'bottom',
}

export const FlagsSelector = ({ direction = 'bottom' }: flagsDirectionTy) => {

    const {
        selectedCountry,
        isFlagOpen,
        flagToggle,
        flagClose,
        flagSet
    } = useFlagsContext();

    return (
        <div className="relative">
            <button
                onClick={flagToggle}
                className="flex items-center gap-2 cursor-pointer relative txt-body-title"
            >
                <span>{selectedCountry.text}</span>

                <img
                    src={selectedCountry.flag}
                    alt={selectedCountry.country}
                    className="w-5"
                />

                <ChevronDown
                    className={`text-gray-500 w-4 h-4 
                    ${isFlagOpen ? 'rotate-180' : ''}`}
                />
            </button>

            {/* flags dropdown panel */}
            <div
                className={`min-w-max absolute right-0 ${direction === 'bottom' ? 'top-full mt-2' : 'bottom-full mb-2'} z-10 bg-white border border-gray-300 rounded-card overflow-hidden shadow-card-lg flex flex-col transform transition-all duration-300 ease-out ${isFlagOpen
                    ? 'pointer-events-auto opacity-100 translate-y-0'
                    : 'pointer-events-none opacity-0 -translate-y-2'}`}
            >
                {shipToFlagsData.map((item, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            flagSet(item)
                            flagClose()
                        }}
                        className="flex items-center gap-2 w-full px-4 py-2 hover:bg-primary-light/50 cursor-pointer border-b border-gray-200 text-left"
                    >
                        <span>{item.country}</span>
                        <img
                            src={item.flag}
                            alt={item.country}
                            className="w-5"
                        />
                    </button>
                ))}
            </div>
        </div>
    )
}


// ------------
export const TopSortSelector = () => {

    const {
        isSortOpen,
        selectedSort,
        sortToggle,
        sortClose,
        sortSelect
    } = useSortContext();

    return (
        <div className="relative">
            <button
                type="button"
                onClick={sortToggle}
                className="min-w-[170px] shirnk-0 flex items-center justify-between relative txt-base py-2.5 px-2 cursor-pointer border border-gray-100 rounded-card transition-all duration-300 ease-out hover:bg-gray-100"
            >
                <span>
                    {selectedSort.label}
                </span>

                <ChevronDown
                    className={`text-gray-500 w-4 h-4 
                    ${isSortOpen ? 'rotate-180' : ''}`}
                />
            </button>

            <div
                className={`flex flex-col min-w-max absolute top-full right-0 mt-2 z-10 bg-white border border-gray-300 rounded-card overflow-hidden shadow-card-lg transition-all duration-300 ease-out ${isSortOpen
                    ? "pointer-events-auto opacity-100 translate-y-0"
                    : "pointer-events-none opacity-0 -translate-y-2"}`}
            >
                {sortTopData.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => {
                            sortSelect(item)
                            sortClose()
                        }}
                        className={`px-4 py-2 border-b last:border-b-0 border-gray-200 hover:bg-primary-light/50 text-left`}
                    >
                        {item.label}
                    </button>
                ))}
            </div>
        </div>
    )
}