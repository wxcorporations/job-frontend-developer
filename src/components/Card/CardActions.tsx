import React, { ReactNode } from 'react';

import './style.scss';

interface CardActionProps {
    children?: ReactNode
}

function CardActions({ children }: CardActionProps) {
    return (
        <div className='card-action'>
            { children }
        </div>
    )
}

export default React.memo(CardActions)