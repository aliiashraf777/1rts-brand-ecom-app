import Button from "@/components/common/btns/Button";
import SectionContainer from "@/components/common/section/SectionContainer";
import { DynamicBreadCrumb } from "@/components/shop/BreadCrumb";
import { productsData } from "@/data/productsData"
import { useNavigate, useParams } from "react-router"

type Props = {}

const SingleProductDetail = (props: Props) => {

  const { productId } = useParams();
  const product = productsData.find(
    (product) => product.id === (productId)
  );

  if (!product) {

    const navigate = useNavigate()

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

  return (
    <div className="w-full">
      <DynamicBreadCrumb />

      <SectionContainer>
        details page of - {title}
      </SectionContainer>
    </div>
  )
}

export default SingleProductDetail