import React from 'react';
import { Download } from 'react-bootstrap-icons';

import './style.scss';

interface CardActionDownloadProps {
    onDownload: () => void
}
function CardActionDownload({ onDownload }: CardActionDownloadProps) {
    return (
        <div className='card-action__download' onClick={onDownload}>
            <Download />
        </div>
    )
}

export default React.memo(CardActionDownload)