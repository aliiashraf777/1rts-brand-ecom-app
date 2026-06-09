import SectionContainer from "../common/SectionContainer"

type Props = {}

const BreadCrumb = (props: Props) => {
    return (
        <SectionContainer>
            <div className="py-section text-gray-500">
                breadcrumb &gt; home &gt; shop &gt; products &gt; electic &gt; gadgets
            </div>
        </SectionContainer>
    )
}

export default BreadCrumb