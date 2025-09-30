import { useMemo, useState } from 'react'
import YoutubeEmbed from '../YoutubeEmbed'
import ListVideos from '../ListVideos'
import './SectionPlayer.scss'

export default function SectionPlayer(props: any) {
    const [video, setVideo] = useState(props.videoId)
    const [title, setTitle] = useState(props.title)
    const [description, setDescription] = useState(props.description)

    const embedYoutubeMemo = useMemo(() => {
        return (
            <>
                <YoutubeEmbed id={video} />

                <div className='p-2'>
                    <h1 className='mt-2'>{title}</h1>
                    <p>{description}</p>
                </div>
            </>
        )
    }, [video, title, description]);


    return (
        <>
            <div className="section-player">
                <div className="section-player__emded">
                    {embedYoutubeMemo}
                </div>
                <div className="section-player__content">
                    <ListVideos />
                </div>
            </div>
        </>
    )
}