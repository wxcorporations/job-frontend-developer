import React from "react";
import './index.scss'

interface HighlightProps {
    title?: string,
    description?: string
}

function Highlight({ title, description }: HighlightProps) {
    return (
        <div className='highlight'>
            {title && <h1 className="highlight__title">{title}</h1>}
            {
                description &&
                <span className="highlight__description animate__animated animate__fadeInUp">
                    {description}
                </span>
            }
        </div>
    )
}

export default React.memo(Highlight)