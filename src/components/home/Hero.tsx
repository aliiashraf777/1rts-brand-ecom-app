import Button from "../common/Button"
import SectionContainer from "../common/SectionContainer"

type Props = {}

const Hero = (props: Props) => {
  return (
    <SectionContainer>
      <h1 className="heading-h1">Hero</h1>
      <p className="txt-body">Brand Ecom - Ecommerce brand</p>
      <p className="txt-small">small muted text</p>

      <Button variant="white">Search</Button>
    </SectionContainer>
  )
}

export default Hero