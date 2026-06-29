import Button, { BorderReorderBtn } from "@/components/common/btns/Button";
import SectionContainer from "@/components/common/section/SectionContainer";
import { DynamicBreadCrumb } from "@/components/shop/BreadCrumb";
import StarsDynamicRatings from "@/components/shop/products/StarsDynamicRatings";
import { productDetailsData, productsData, suppliersData } from "@/data/productsData"
import { useCartActions } from "@/redux/features/cart/useCartActions";
import { selectFavsItemsList } from "@/redux/features/favs/favsSelectors";
import { useFavsActions } from "@/redux/features/favs/useFavsActions";
import { useAppSelector } from "@/redux/features/storeHooks";
import type { IProductItem } from "@/types/productTypes";
import { Check, Globe, HeartIcon, MessageSquareText, ShieldCheck, ShoppingBasket } from "lucide-react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router"

type Props = {}

const SingleProductDetail = (props: Props) => {

  const { productId } = useParams();
  const product = productsData.find(
    (product) => product.id === (productId)
  );

  const [selectedThumbIdx, setSelectedThumbIdx] = useState(0);

  const navigate = useNavigate()

  if (!product) {
    return (
      <SectionContainer>
        <div className="w-full h-[70vh] flex flex-col items-center justify-center gap-4">
          <p className="heading-h1 text-gray-300 uppercase">
            No product found!
          </p>
          <Button
            onClick={() => navigate("/shop")}
          >
            Return To Shop
          </Button>
        </div>
      </SectionContainer>
    )
  }

  const { id, title, image, price, oldPrice, desc, ratings, detailsLink, orders, categoryId } = product;

  // const thumbnails = product.images;
  const thumbnails = [image, image, image, image, image];

  const { addToCart } = useCartActions();
  const { addToFavs } = useFavsActions();
  const favsItemsList = useAppSelector(selectFavsItemsList);

  const isAddedToFavs: IProductItem | undefined = favsItemsList.find((i) => i.id === id);

  return (<>
    <DynamicBreadCrumb />

    <SectionContainer
      className=""
      sectionClass="mb-section px-2.5"
    >

      <div className="bg-white p-2.5 md:p-5 border border-gray-300 rounded-card">
        <div className="w-full flex-col md:flex-row flex gap-5">

          {/* image wrapper ----------------------- */}
          <div className="flex flex-col gap-5">
            <figure className="w-full h-full md:w-[330px] md:h-[330px] max-[1440px]:w-[380px]x max-[1440px]:h-[380px]x aspect-square md:shrink-0 border border-gray-300 rounded-card p-5 grid place-items-center overflow-hidden">
              <img
                src={thumbnails[selectedThumbIdx]}
                alt={title}
                className={`w-full h-full object-contain aspect-square transition-all duration-300 eas
                  e-out hover:scale-105 cursor-zoom-in`}
              />
            </figure>

            <div className="flex justify-between gap-1 md:gap-2">
              {/* {[0, 1, 2, 3, 4, 5].map((i) => ( */}
              {thumbnails.map((thumb, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSelectedThumbIdx(i)}
                  className={`w-[56px] h-[56px] p-1 border border-gray-300 rounded-card overflow-hidden! cursor-pointer
                    ${selectedThumbIdx === i
                      ? "border-primary scale-105"
                      : "hover:border-gray-400"}`}
                >
                  <img
                    src={thumb}
                    alt={title}
                    className="w-full h-full object-contain aspect-square"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* details wrapper ------------------- */}
          <div className="xl:w-[430px] flex flex-1 shrink-0 flex-col gap-2 borderx border-gray-300 rounded-card mb-5">

            {/* title & review */}
            <p className="hidden md:flex items-center gap-1 txt-body-shrik text-brand-green">
              <Check className="w-5 h-5" />
              <span>In stock</span>
            </p>

            <h2 className="txt-body-title md:heading-h4 capitalize">{title}</h2>

            {/* ratins & reviews */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <StarsDynamicRatings rating={Number(ratings)}
                />
                <span className="hidden md:inline-block txt-base text-card-orange">
                  {ratings}
                </span>
              </div>

              {/* period */}
              <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>

              <div className="flex items-center gap-2 text-gray-500">
                <MessageSquareText className="w-4 h-4" />
                <p className="txt-small md:text-base text-gray-500">
                  32 reviews
                </p>
              </div>

              {/* period */}
              <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>

              <div className="flex items-center gap-2 text-gray-500">
                <ShoppingBasket className="w-4 h-4" />
                <p className="txt-small md:text-base text-gray-500">
                  {orders} orders
                </p>
              </div>

            </div>

            {/* pricings strip */}
            <div className="w-full p-4 flex gap-5 bg-brand-red-light divide-x divide-gray-300 mb-2.5">

              <div className="flex flex-col gap-1 pr-2.5 md:pr-10">
                <h3 className="heading-h5 text-brand-red">$98.00</h3>
                <p className="txt-small text-gray-800">50-100 pcs</p>
              </div>

              <div className="flex flex-col gap-1 pr-2.5 md:pr-10">
                <h3 className="heading-h5">$90.00</h3>
                <p className="txt-small text-gray-800">100-700 pcs</p>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="heading-h5">$78.00</h3>
                <p className="txt-small text-gray-800">700+ pcs</p>
              </div>
            </div>

            {/* material & customization */}
            <div className="w-full">
              {productDetailsData.slice(0, 1).map((detail) => (
                <div
                  key={detail.id}
                  className="flex flex-col gap-1 md:gap-4"
                >

                  {/* <div className="flex gap-[98px]">
                    <span className="text-gray-500">Customization: </span>
                    <span className="text-gray-600">{detail.customization}</span>
                  </div> */}

                  {[
                    { label: 'Price', value: detail.price },
                    { label: 'Type', value: detail.type },
                    { label: 'Material', value: detail.material },
                    { label: 'Design', value: detail.design },
                  ].map(({ label, value }, idx) => (
                    <div key={idx}>
                      {idx === 1 &&
                        <div className="w-full h-px bg-gray-300 mb-4" />}

                      <div className="grid grid-cols-[140px_1fr] py-1.5x">
                        <span className="text-gray-500">{label}</span>
                        <span className="text-gray-600">{value}</span>
                      </div>
                    </div>
                  ))}

                  <div className="w-full h-px bg-gray-300" />

                  {[
                    { label: 'Customization', value: detail.customization },
                    { label: 'Protection', value: detail.protection },
                    { label: 'Warranty', value: detail.warranty },
                  ].map(({ label, value }, idx) => (
                    <div
                      key={idx}
                      className="grid grid-cols-[140px_1fr]"
                    >
                      <span className="text-gray-500">{label}</span>
                      <span className="text-gray-600">{value}</span>
                    </div>
                  ))}

                  <div className="w-full h-px bg-gray-300"></div>

                </div>
              ))}
            </div>

          </div>

          {/* supplier and CTAs wrapper ------------------ */}
          <div className="w-full h-max md:w-[280px] shrink-0 flex flex-col gap-6">

            <div className="border border-gray-300 rounded-card px-4 py-5">

              {suppliersData.slice(0, 1).map((supplier) => (
                <div key={supplier.id} className="w-full">

                  {/* supplier title */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-[48px] h-[48px] bg-[#C6F3F1] heading-h2 text-[#4CA7A7]/60 rounded-card grid place-items-center">
                      {supplier.profileLetter}
                    </div>

                    <div className="flex flex-col">
                      <p>Supplier</p>
                      <p>{supplier.name}</p>
                    </div>
                  </div>

                  <div className="w-full h-px bg-gray-300 mb-3" />

                  {/* supplier details */}
                  <div className="flex items-center gap-4 mb-2">
                    <img
                      src={supplier.countryFlag}
                      alt={supplier.countryName}
                      className="w-5"
                    />

                    <p className="text-gray-500">
                      {supplier.countryName}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 mb-2">
                    <ShieldCheck className="w-5 h-5 text-gray-500" />

                    <p className="text-gray-500">
                      {supplier.isVerified}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 mb-8">
                    <Globe className="w-5 h-5 text-gray-500" />

                    <p className="text-gray-500">
                      {supplier.isGlobalShip}
                    </p>
                  </div>

                  {/* supplier CTAs */}
                  <Button variant="gradient" size="full"
                    className="mb-2"
                  >
                    Send inquiry
                  </Button>

                  <Button variant="white" size="full"
                    className="border border-gray-300 text-primary"
                  >
                    Seller's profile
                  </Button>

                </div>
              ))}

            </div>

            {/* addToWishlist btn */}
            <div className="w-full grid place-items-center">
              {!isAddedToFavs
                ? (<>
                  <BorderReorderBtn
                    className="txt-body-medium! text-primary! text-center! justify-center! w-max! h-max! border-transparent! hover:bg-transparent hover:border-primary!"
                    onClick={() => addToFavs({
                      id, title, image, price
                    })}
                  >
                    <HeartIcon />
                    <span>Save for later</span>
                  </BorderReorderBtn>
                </>)
                : (<>
                  <BorderReorderBtn
                    className="txt-body-medium! text-brand-green! text-center! justify-center! w-max! h-max! border-transparent! hover:bg-transparent hover:border-brand-green!"
                  >
                    <Check />
                    <span>Saved for later</span>
                  </BorderReorderBtn>
                </>)
              }
            </div>

          </div>
        </div>
      </div>

    </SectionContainer >
  </>)
}

export default SingleProductDetail