import { langCurrencyData, navMenuData, shipToFlagsData } from "@/data/navigationData"
import type { IshipToFlagsItem } from "@/types/menuTypes"
import { ChevronDown, ChevronUp, Menu } from "lucide-react"
import { useState } from "react"
import { NavLink } from "react-router"

type Props = {
  className?: string,
  onOpenMobile: () => void
}

const NavBar = ({ className, onOpenMobile }: Props) => {

  // currency selector
  const [selectedCurrency, setSelectedCurrency] = useState(langCurrencyData[0]);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState<boolean>(false);

  // flags selector
  const [selectedCountry, setSelectedCountry] = useState<IshipToFlagsItem>(shipToFlagsData[0]);
  const [isFlagOpen, setIsFlagOpen] = useState<boolean>(false);

  return (
    <nav className="hidden lg:block page-padding border-b border-gray-300">
      <div className={`container-custom py-3 flex justify-between items-center gap-2.5 ${className || ''}`}>

        {/* nav */}
        <div className="flex gap-1">
          <button
            type="button"
            aria-label="Open menu"
            onClick={onOpenMobile}
            className="flex items-center justify-center"
          >
            <Menu
              className="w-6 h-6 cursor-pointer hover:text-primary transition duration-300"
            />
          </button>

          <ul className="flex items-center gap-7">
            {
              navMenuData.map((nav) => (
                <li
                  key={`${nav.link}-${nav.text}`}
                  className="txt-body-title hover:text-primary cursor-pointer transition-all duration-300"
                >
                  <NavLink to={nav.link}>
                    {nav.text}
                  </NavLink>
                </li>
              ))
            }
          </ul>
        </div>

        {/* dropdowns selectors*/}
        <div className="flex justify-between items-center gap-section-30">

          {/* currency */}
          <div className="relative">
            <button
              onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
              className="flex items-center gap-2 relative txt-body-title cursor-pointer"
            >
              <span>
                {selectedCurrency.language}, {selectedCurrency.currencyCode}
              </span>

              {!isCurrencyOpen
                ?
                < ChevronDown className="text-gray-500 w-4 h-4" />
                :
                < ChevronUp className="text-gray-500 w-4 h-4" />
              }
            </button>

            {/* currency custom dropDown Panel */}
            {/* {isCurrencyOpen && ( */}
            <div
              className={`min-w-max absolute top-full right-0 mt-2 bg-white border border-gray-300 rounded-card overflow-hidden shadow-card-lg flex flex-col transition-all duration-300 ease-in ${isCurrencyOpen
                ? 'pointer-events-auto opacity-100 translate-y-0'
                : 'pointer-events-none opacity-0 -translate-y-2'}`
              }>
              {
                langCurrencyData.map((item) => (
                  <button
                    key={item.currency}
                    onClick={() => {
                      setSelectedCurrency(item)
                      setIsCurrencyOpen(false)
                    }}
                    className="w-fullx px-4 py-2 hover:bg-primary-light cursor-pointer border-b border-gray-200"
                  >
                    <span>{item.language}, {item.currencyCode}</span>
                  </button>
                ))
              }
            </div>
            {/* )} */}
          </div>

          {/* flags */}
          <div className="relative">
            <button
              onClick={() => setIsFlagOpen(!isFlagOpen)}
              className="flex items-center gap-2 cursor-pointer relative txt-body-title"
            >
              <span>{selectedCountry.text}</span>

              <img
                src={selectedCountry.flag}
                alt={selectedCountry.country}
                className="w-5"
              />

              {!isFlagOpen
                ?
                < ChevronDown className="text-gray-500 w-4 h-4" />
                :
                < ChevronUp className="text-gray-500 w-4 h-4" />
              }
            </button>

            {/* flags dropdown panel */}
            <div
              className={`min-w-max absolute top-full right-0 mt-2 bg-white border border-gray-300 rounded-card overflow-hidden shadow-card-lg flex flex-col transform transition-all duration-300 ease-out ${isFlagOpen
                ? 'pointer-events-auto opacity-100 translate-y-0'
                : 'pointer-events-none opacity-0 -translate-y-2'}`}
            >
              {shipToFlagsData.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedCountry(item)
                    setIsFlagOpen(false)
                  }}
                  className="flex items-center gap-2 w-full px-4 py-2 hover:bg-primary-light cursor-pointer border-b border-gray-200"
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
        </div>
        {/* dropdowns end */}
      </div>
    </nav>
  )
}

export default NavBar