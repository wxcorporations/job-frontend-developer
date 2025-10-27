import React from "react"

import './style.scss';
export default function Link (props:any) {
    return (
        <>
            <div className="link">
                <a href={props.url}>
                    {props.badge && <span className="link__badge">{props.badge}</span>}
                    {props.children && props.children}
                </a>
            </div>
        </>
    )
}