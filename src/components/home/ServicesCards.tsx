import { servicesData } from "@/data/servicesData"
import SectionContainer from "../common/section/SectionContainer"
import SectionHeading from "../common/section/SectionHeading"
import { Link } from "react-router"

type Props = {}

const ServicesCards = (props: Props) => {
  return (
    <SectionContainer sectionClass="mb-section-30">
      <div className="px-2.5 md:px-0">
        <SectionHeading
          heading="Our extra services"
        />

        <div className="flex flex-wrap gap-section">
          {servicesData.map((item, idx) => {

            const Icon = item.icon;

            return (
              <Link
                to={item.categoryLink}
                key={`${item.title}-${idx}`}
                className="group flex flex-col overflow-hidden bg-white flex-1 border border-gray-300 rounded-card overflow-hidden transition-transform duration-300 ease-in-out hover:shadow-card hover:-translate-y-1
                basis-full sm:basis-[calc(50%-0.75rem)] xl:basis-[calc(25%-1.125rem)]
                "
              >
                {/* image */}
                <div className="bg-black/85 relative aspect-2/1 overflow-hiddenx">
                  <img
                    src={item.image}
                    alt={item.image}
                    className="w-full h-full object-cover"
                  />

                  <div className="w-[55px] h-[55px] grid place-items-center rounded-full border-2 border-white bg-primary-light absolute -bottom-7 right-5 z-10">
                    <Icon
                      className="w-5 h-5"
                    />
                  </div>
                </div>

                {/* text */}
                <div className="w-full p-5">
                  <p className="txt-body-title whitespace-pre-line">
                    {item.title}
                  </p>
                </div>

              </Link>
            )
          })}
        </div>
      </div>
    </SectionContainer>
  )
}

export default ServicesCards