import React from "react";

import './index.scss'

export default function Feature (props:any) {
    return (
        <>
            <div className="feature">
                <div className="feature__icon">
                    {props.icon && props.icon}
                </div>
                <h2>{props.title && props.title}</h2>
                <p>{props.description && props.description}</p>
            </div>
        </>
    )
}