import Button from "../common/Button";
import SectionContainer, { SectionFull } from "../common/SectionContainer"
import { Mail } from 'lucide-react';


type Props = {}

const NewsLetter = (props: Props) => {

  return (
    <SectionFull
      sectionClass="bg-gray-200 flex-justify-center items-center"
      containerClass="flex flex-col justify-center items-center gap-2 text-center py-10"
    >
      <h4 className="heading-h4">
        Subscribe on our newsletter
      </h4>

      <p className="txt-body-shrik text-gray-800">
        Get daily news on upcoming offers from many suppliers all over the world
      </p>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-2 mt-5">
        {/* icon + input */}
        <div className="flex items-center gap-2 bg-white p-2.5 rounded-card w-[275px]">
          <Mail
            className="w-5 h-5 text-gray-500"
          />
          <input
            type="search"
            name="newsletter"
            id="newsletter"
            placeholder="Email"
            className="txt-base text-gray-600 placeholder:text-gray-500 outline-none"
          />
        </div>

        <div className="hidden md:block">
          <Button>
            Subscribe
          </Button>
        </div>

        <div className="w-full block md:hidden">
          <Button size="full">
            Subscribe
          </Button>
        </div>
      </div>

    </SectionFull>
  )
}

export default NewsLetter