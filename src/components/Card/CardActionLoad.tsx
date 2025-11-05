import React from 'react';
import { OrbitProgress } from 'react-loading-indicators';

import './style.scss';

function CardActionLoad() {
    return (
        <div className="spiner">
            <OrbitProgress variant="dotted" color="#00d9ff" size="small" text="" textColor="" />
        </div>
    )
}

export default React.memo(CardActionLoad)