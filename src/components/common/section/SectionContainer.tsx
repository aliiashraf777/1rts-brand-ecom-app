type SectionTy = {
    children: React.ReactNode,
    className?: string,
    sectionClass?: string,
}

const SectionContainer = ({ children, className, sectionClass }: SectionTy) => {
    return (
        <section className={`md:page-padding ${sectionClass}`}>
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
        <section className={`md:page-padding ${sectionClass}`}>
            <div className={`container-custom ${containerClass}`}>
                {children}
            </div>
        </section>
    )
}