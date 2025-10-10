import React from 'react'

import './YoutubeEmbed.scss'

type YoutubeEmbedProps = {
    id: string,
}

export default function YoutubeEmbed(props: YoutubeEmbedProps) {
    const src = `https://www.youtube.com/embed/${props.id}`
    
    return (
        <>
            <div className="youtube-embed">
                <iframe  frameBorder="0" src={src}  allowFullScreen></iframe>
            </div>
        </>
    )
}
