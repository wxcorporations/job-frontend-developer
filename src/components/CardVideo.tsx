import { useState } from 'react';

import './CardVideo.scss'

const TOTAL_CHAR_TITLE = 32

export default function CardVideo(props: {
    data: any,
    handleFavorite?: Function,
    play?: Function
}) {
    const [isFavorite, setIsFavorite] = useState(false)


    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        props.play && props.play(props.data)
    }

    const toggleFavorite = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        const status = !isFavorite

        props.handleFavorite && (props.handleFavorite({ status, ...props.data }))

        setIsFavorite(status)
    }

    return (
        <>
            <div role="card" id={props.data.id} className='card-video' onClick={handleClick}>
                <div className='card-video__img'>
                    <div className={`card-video__img-action ${isFavorite ? 'is-active' : ''}`} onClick={toggleFavorite} >
                        <i className="bi bi-heart-fill"></i>
                    </div>
                    <img className='' src={props.data.thumbnail} title={props.data.title} />
                </div>

                <div className='card-video__content'>
                    <div className='card-video__content-info'>
                        <h2 className='title'>{props.data.title.substring(0, TOTAL_CHAR_TITLE).concat('...')}</h2>
                        <p className='channel'>{props.data.channel}</p>
                    </div>
                </div>
            </div>
        </>
    )
}