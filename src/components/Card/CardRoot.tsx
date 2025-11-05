import React from 'react';

import './style.scss';

interface CardRootProps {
    children?: React.ReactNode,
}
function CardRoot({ children }: CardRootProps) {
    return (
        <div className='card'>
            {children}
        </div>
    )
}

export default React.memo(CardRoot)