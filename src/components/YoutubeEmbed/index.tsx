import React from 'react'

import './index.scss'

type YoutubeEmbedProps = {
    id: string,
}

export default function YoutubeEmbed({ id }: YoutubeEmbedProps) {
    return (
        <div className="youtube-embed">
            <iframe
                frameBorder="0"
                allowFullScreen
                src={`https://www.youtube.com/embed/${id}`}
            >
            </iframe>
        </div>
    )
}
