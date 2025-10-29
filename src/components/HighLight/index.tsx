import React from 'react'
import './index.scss'

export default function Highlight(props: any) {
    return (
        <div className='highlight'>
            <h1 className="highlight__title">{props.text && props.text}</h1>
            <span className="highlight__description animate__animated animate__fadeInUp">{props.description && props.description}</span>
        </div>
    )
}