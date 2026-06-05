type SectionTy = {
    children: React.ReactNode,
    className?: string,
}

const SectionContainer = ({ children, className }: SectionTy) => {
    return (
        <section className="page-padding">
            <div className={`container-custom ${className || ""}`}>
                {children}
            </div>
        </section>
    )
}

export default SectionContainer


// full section container
type SectionFullPropsTy = {
    sectionClass: string,
    containerClass: string,
    children: React.ReactNode
}

export const SectionFull = ({ sectionClass, containerClass, children }: SectionFullPropsTy) => {

    return (
        <section className={`page-padding ${sectionClass}`}>
            <div className={`container-custom ${containerClass}`}>
                {children}
            </div>
        </section>
    )
}