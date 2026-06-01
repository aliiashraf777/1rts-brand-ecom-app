import SectionContainer from "../common/SectionContainer"

type Props = {}

const Hero = (props: Props) => {
  return (
    <SectionContainer>
      <h1 className="heading-h1">Brand Ecom</h1>
      <h2 className="heading-h2">Brand Ecom</h2>
      <h3 className="p-section heading-h3">Brand Ecom</h3>
      <h4 className="m-section heading-h4">Brand Ecom</h4>

      <p className="txt-body">Brand Ecom - Ecommerce brand</p>
      <p className="txt-small">small muted text</p>

      <button>Click It</button>
    </SectionContainer>
  )
}

export default Hero