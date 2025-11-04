import React from 'react';
import { HeartFill } from 'react-bootstrap-icons';

interface CardActionFavoriteProps {
    status: boolean,
    onToggle?: () => void
} 

function CardActionFavorite({ status, onToggle }: CardActionFavoriteProps) {
    return (
        <div onClick={onToggle} className='card-action__favorite'>
            <HeartFill className={status ? 'card-action__icon--active' : 'card-action__icon'} />
        </div>
    )
}

export default React.memo(CardActionFavorite)