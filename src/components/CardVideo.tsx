import React, { useLayoutEffect, useState } from 'react';
import { Heart, HeartFill } from 'react-bootstrap-icons'

import './CardVideo.scss'

const TOTAL_CHAR_TITLE = 32

export default function CardVideo(props: {
    data: any,
    handleFavorite?: Function,
    play?: Function,
}) {
    const [isFavorite, setIsFavorite] = useState(false)

    useLayoutEffect(() => {
        setIsFavorite(props?.data?.status || false)
    }, [props.data.status])


    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();

        setTimeout(() => {
            const elementAnchor = document.querySelector('[data-anchor="player"]');
            elementAnchor && elementAnchor?.scrollIntoView(true)
        }, 500)

        props.play && props.play(props.data)
    }

    const toggleFavorite = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        const status = !isFavorite

        props.handleFavorite && (props.handleFavorite({ ...props.data, status }))

        setIsFavorite(status)
    }

    const getTitle = () => {
        return props.data.title.substring(0, TOTAL_CHAR_TITLE).concat('...')
    }

    return (
        <>
            <div aria-label='card' id={props.data.id} className='card-video' onClick={handleClick}>
                <div className='card-video__img'>
                    <div className={`card-video__img-action ${isFavorite ? 'is-active' : ''}`} onClick={toggleFavorite} >
                        {isFavorite ? <HeartFill className='icon' /> : <Heart className='icon' />}
                    </div>
                    <img className='' src={props.data.thumbnail} title={props.data.title} />
                </div>

                <div className='card-video__content'>
                    <div className='card-video__content-info'>
                        <h2 className='title'>{getTitle()}</h2>
                        <p className='channel'>{props.data.channel}</p>
                    </div>
                </div>
            </div>
        </>
    )
}