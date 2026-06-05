import { appStore, googleApp, logo } from "@/assets"
import NewsLetter from "../footer/NewsLetter"
import SectionContainer, { SectionFull } from "./SectionContainer"
import { footerData, footerSocials } from "@/data/footerData"
import { Link } from "react-router"
import { FlagsSelector } from "./DropdownSelectors"

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="w-full">
      <NewsLetter />

      {/* main footer */}
      <section className="page-padding bg-white">
        <div className="container-custom pt-10 pb-[60px]">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[2fr_repeat(4,minmax(90px,1fr))_1.5fr] gap-8 sm:gap-8 md:gap-7 lg:gap-6"
          >
            {/* footer logo */}
            <div className="flex flex-col gap-4">
              <Link to='/'>
                <img src={logo} alt="footer_logo"
                  className="w-[150px] cursor-pointer hover:scale-105 transition duration-300"
                />
              </Link>

              <p className="txt-body text-gray-600 max-w-[275px]">
                Best information about the company gies here but now lorem ipsum is
              </p>

              <div className="flex items-center gap-2.5">
                {footerSocials.map((item, idx) => {

                  const Icon = item.icon

                  return (
                    <Link
                      to={item.link}
                      key={`${item.icon}`}
                      className="bg-gray-400 text-white p-2.5 rounded-full cursor-pointer group hover:bg-primary transition duration-300"
                    >
                      <Icon className="group-hover:scale-115 transition-all duration-300" />
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* footer links */}

            {footerData.map((item) => (
              <div
                key={item.heading}
                className="flex flex-col gap-1"
              >
                <h3 className="txt-body-title mb-2">
                  {item.heading}
                </h3>

                {item.fItem.map((item) => (
                  <Link to={item.link}
                    className="txt-body text-gray-500 hover:text-gray-600x hover:ml-0.5 transition-all ease-out duration-300"
                  >
                    {item.text}
                  </Link>
                ))}
              </div>
            ))}


            {/* footer apps */}
            <div className="flex flex-col gap-2">
              <h3 className="txt-body-title mb-2.5">
                Get App
              </h3>

              <Link to={'/'}>
                <img src={appStore} alt="app_store" />
              </Link>

              <Link to={'/'}>
                <img src={googleApp} alt="google_play" />
              </Link>
            </div>

          </div>
        </div>
      </section>


      {/* copyright section */}
      <SectionFull
        sectionClass="bg-gray-200 border-y border-gray-300"
        containerClass="flex justify-between items-center py-6"
      >
        <div className="">
          &copy; 2026 Ecommerce.
        </div>

        <div className="">
          <FlagsSelector 
          direction="top"
          />
        </div>
      </SectionFull>
    </footer>
  )
}

export default Footer