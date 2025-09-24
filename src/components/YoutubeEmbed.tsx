import './YoutubeEmbed.scss'

type youtubeArgs = {
    id: string,
}

export default function YoutubeEmbed(props: youtubeArgs) {
    const src = `http://www.youtube.com/embed/${props.id}`
    
    return (
        <>
            <div className="youtube-embed">
                <iframe  frameBorder="0" src={src}  allowFullScreen></iframe>
            </div>
        </>
    )
}
