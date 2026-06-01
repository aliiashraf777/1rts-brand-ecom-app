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