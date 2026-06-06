import { searchCategoriesData } from "@/data/navigationData"
import type { IsearchCategoriesItem } from "@/types/menuTypes"
import { useState } from "react"
import { Link, NavLink } from "react-router"
import Button from "../common/Button"

type Props = {}

const HeroCategories = (props: Props) => {

  const [selectedCategory, setSelectedCategory] = useState<IsearchCategoriesItem>(searchCategoriesData[1]);

  return (
    <div className="flex gap-section w-full min-w-0">
      {/* categories */}
      <div className="hidden lg:flex flex-col w-[250px] shrink-0">
        {searchCategoriesData.slice(1,).map((item, idx) => (
          <NavLink
            key={`${item.text}-${idx}`}
            to={item.link}
            className={`txt-body-medium p-2.5 rounded-card hover:bg-primary-light w-full h-[40px] grid content-center transition-all ease-out duration-300 ${selectedCategory.text === item.text ? 'bg-primary-light' : ''} `}
            onClick={() => setSelectedCategory(item)}
          >
            {item.text}
          </NavLink>
        ))}
      </div>


      {/* categories banner */}

      <div
        key={`${selectedCategory.text}-category}`}
        className="relative w-full flex-1 lg:max-w-[665px]"
      >
        <img
          src={selectedCategory.bgImg}
          alt={selectedCategory.text}
          className="w-full h-full object-cover"
        />

        {/* textBox */}
        <div className="absolute top-[15px] lg:top-[55px] left-[20px] lg:left-[45px]">
          <h3 className="txt-base text-[20px] lg:text-[28px] mb-1">
            Latest trending
          </h3>
          <h1 className="heading-h1">
            {selectedCategory.text}
          </h1>
          <Button
            variant="white"
            className="mt-2.5 lg:mt-section"
          >
            <Link
              to={selectedCategory.link}
            >
              Learn more
            </Link>
          </Button>
        </div>
      </div>
    </div >
  )
}

export default HeroCategories