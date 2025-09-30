import { useState } from 'react';
import { Video } from '../interfaces/Video';

import './CardVideo.scss'


type DataCard = {
    data: Video,
    handleFavorite?: Function,
    play?: Function
}

export default function CardVideo(props: DataCard) {
    const [isFavorite, setIsFavorite] = useState(false)

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        props.play && props.play(event.currentTarget.id)
    }

    const toggleFavorite = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();

        const status = !isFavorite
        
        props.handleFavorite && (props.handleFavorite({
            status,
            thumb: props.data.getThumb(),
            id: props.data.getVideoId()
        }))

        setIsFavorite(status)
    }

    return (
        <>
            <div role="card" id={props.data.getVideoId()} className='card-video' onClick={handleClick}>
                <div className='card-video__img'>
                    <div className={`card-video__img-action ${isFavorite ? 'is-active' : ''}`} onClick={toggleFavorite} >
                        <i className="bi bi-heart-fill shadow-sm"></i>
                    </div>
                    <img className='' src={props.data.getThumb()} title={props.data.getImgTitle()} />
                </div>

                <div className='card-video__content'>
                    <div className='card-video__content-info'>
                        <h2 className='title'>{props.data.getTitle()}</h2>
                        <p className='channel'>{props.data.getChannel()}</p>
                    </div>
                </div>
            </div>
        </>
    )
}