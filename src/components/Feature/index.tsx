import React, { ReactNode } from "react";

import './index.scss'

interface FeatureProps {
    icon?: ReactNode,
    title?: string,
    description?: string
}

export default function Feature({ icon, title, description }: FeatureProps) {
    return (
        <>
            <div className="feature">
                {icon && <div className="feature__icon"> {icon} </div>}
                {title && <h2>{title}</h2>}
                {description && <p>{description}</p>}
            </div>
        </>
    )
}