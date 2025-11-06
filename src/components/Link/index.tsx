import React, { ReactNode } from "react"

import './style.scss';

interface LinkProps {
    url: string,
    badge?: string,
    children: ReactNode
}
export default function Link ({ url, badge, children}:LinkProps) {
    return (
        <>
            <div className="link">
                <a href={url}>
                    {badge && <span className="link__badge">{badge}</span>}
                    {children}
                </a>
            </div>
        </>
    )
}