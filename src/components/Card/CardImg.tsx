
import React, { ReactNode } from "react"

interface CardImgProps {
    img: string,
    title: string,
    icon?: ReactNode,
    onPlay?: () => void
}

export default function CardImg({ img, title, icon, onPlay }:CardImgProps) {

    const SIZE = {
        MOBILE: [100, 84],
        DESKTOP: [123, 84]
    }

    return (
        <div className='card-img' onClick={onPlay}>
            { icon && <div className="card-img-icon">{icon}</div>}
            <img src={img} alt="" title={title || ''} width={SIZE['DESKTOP'][0]} height={SIZE['DESKTOP'][1]} />
        </div>
    )
}