import React, {useState} from 'react'
import { PlayBtnFill } from "react-bootstrap-icons"

import './index.scss'

type YoutubeEmbedProps = {
    id: string,
}

export default function YoutubeEmbed({ id }: YoutubeEmbedProps) {
    const [load, setLoad] = useState(false)
    
    return (
        <div className="youtube-embed">
                
            <div className='youtube-embed__fallback'
                style={{ visibility: !load ? 'visible' : 'hidden' }}
            >
                <PlayBtnFill />
            </div>
        
            <iframe
                style={{ visibility: !load ? 'hidden': 'visible' }}
                title='player do youtube'
                frameBorder="0"
                allowFullScreen
                loading='lazy'
                onLoad={() => setLoad(true)}
                src={`https://www.youtube.com/embed/${id}`}
            >
            </iframe>
            
        </div>
    )
}
