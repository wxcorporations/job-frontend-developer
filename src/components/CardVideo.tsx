import { useState } from 'react';
import { Video } from '../interfaces/Video';

import './CardVideo.scss'


type DataCard = {
    data: Video,
    handleFavorite?: Function,
    play?: Function
}


function factoryDataVideo(data: Video) {
    return {
        id: data.getVideoId(),
        title: data.getTitle(),
        description: data.getDescription(),
        thumb: data.getThumb(),
        channel: data.getChannel()
    }
}

const TOTAL_CHAR_TITLE = 32

export default function CardVideo(props: DataCard) {
    const [isFavorite, setIsFavorite] = useState(false)
    const DATA_VIDEO: any = factoryDataVideo(props.data)


    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        props.play && props.play(DATA_VIDEO)
    }

    const toggleFavorite = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        const status = !isFavorite

        props.handleFavorite && (props.handleFavorite({ status, ...DATA_VIDEO }))

        setIsFavorite(status)
    }

    return (
        <>
            <div role="card" id={props.data.getVideoId()} className='card-video' onClick={handleClick}>
                <div className='card-video__img'>
                    <div className={`card-video__img-action ${isFavorite ? 'is-active' : ''}`} onClick={toggleFavorite} >
                        <i className="bi bi-heart-fill"></i>
                    </div>
                    <img className='' src={props.data.getThumb()} title={props.data.getImgTitle()} />
                </div>

                <div className='card-video__content'>
                    <div className='card-video__content-info'>
                        <h2 className='title'>{props.data.getTitle().substring(0, TOTAL_CHAR_TITLE).concat('...')}</h2>
                        <p className='channel'>{props.data.getChannel()}</p>
                    </div>
                </div>
            </div>
        </>
    )
}