import { formBg } from "@/assets"
import SectionContainer from "../common/SectionContainer"
import Button from "../common/Button"
import FormQuote from "./FormQuote"

type Props = {}

const QuoteForm = (props: Props) => {

    return (
        <SectionContainer sectionClass="mb-section-30" className="rounded-none md:rounded-card overflow-hidden">
            <div className="w-full flex justify-between p-[25px] md:p-10 bg-[url(@/assets/backgrounds/formBg.png)] bg-cover min-h-[180px] sm:h-auto">

                {/* text box */}
                <div className="flex flex-col gap-5 sm:gap-3">
                    <h2 className="heading-h5 text-white sm:heading-h2 sm:text-white whitespace-pre-line">
                        An easy way to send {`\n`} requests to all suppliers
                    </h2>

                    <p className="hidden md:inline txt-body-shrik text-left text-white whitespace-pre-line pb-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing {`\n`} elit, sed do eiusmod tempor incididunt.
                    </p>

                    <Button className="md:hidden">
                        Send inquiry
                    </Button>
                </div>

                {/* box container */}
                <div className="hidden md:block bg-white px-section py-[22px] rounded-card shadow-card">
                    <FormQuote />
                </div>
            </div>
        </SectionContainer>
    )
}

export default QuoteForm