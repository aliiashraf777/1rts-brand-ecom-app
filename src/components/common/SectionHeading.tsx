import React from 'react'

type Props = {
    heading: string,
    className?: string,
}

const SectionHeading = ({ heading, className }: Props) => {
    return (
        <h3
            className={`heading-h4 sm:heading-h3 pb-6 ${className || ""}`
            }>
            {heading}
        </h3>
    )
}

export default SectionHeading