import { productsData } from "@/data/productsData"
import SectionContainer from "../common/SectionContainer"
import { Link } from "react-router"

type Props = {}

const RecommendedProducts = (props: Props) => {
  return (
    <SectionContainer sectionClass="mb-section-30">
      <div className="px-2.5 md:px-0">
        <h3 className="heading-h3 pb-6">
          Recommended items
        </h3>

        <div className="flex-1 min-w-0">
          <div
            className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-rows-2 gap-section"
          >
            {productsData.map((item) => (
              <Link
                to={item.detailsLink}
                key={`${item.title}-${item.price}`}
                className="bg-white border border-gray-300 rounded-card hover:shadow-card transition-all duration-300 ease-out group"
              >

                {/* imageBox */}
                <div className="flex aspect-squarex h-[200px] items-center justify-center p-4 mb-3.5">
                  <img
                    src={item.image}
                    alt=""
                    className="object-contain group-hover:scale-105 transition-all duration-300 ease-out"
                  />
                </div>

                {/* textBox */}
                <div className="px-4 pb-2.5">
                  <p className="txt-body-title">
                    ${item.price}
                  </p>

                  <p className="txt-body-shrik text-left text-text-muted line-clamp-2">
                    {item.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default RecommendedProducts