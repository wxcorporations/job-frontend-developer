import React from 'react';
import './style.scss';

interface CardContentProps {
    channel?: string,
    title?: string,
    id?: string,
}

function CardContent({ channel, title, id }: CardContentProps) {
    return (
        <div className='card-content'>
            {channel && <span className='card-content__channel'>{channel}</span>}
            {title && <h2 className='card-content__title'>{title.length > 42 ? title.substring(0, 42) : title}</h2>}

            {id && <span className='card-content__id'>ID: {id}</span>}
        </div>
    )
}

export default React.memo(CardContent)