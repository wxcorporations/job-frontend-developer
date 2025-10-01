import { useMemo, useState } from 'react'
import YoutubeEmbed from '../YoutubeEmbed'
import ListVideos from '../ListVideos'
import { useSelector } from 'react-redux'

import './SectionPlayer.scss'

export default function SectionPlayer(props: any) {
    const [video, setVideo] = useState(props.videoId)

    const description = useSelector((state: any) => state.video.play.description)
    const channel = useSelector((state: any) => state.video.play.channel)
    const title = useSelector((state: any) => state.video.play.title)
    const id = useSelector((state: any) => state.video.play.id)

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
                <div className="section-player__embed">
                    <YoutubeEmbed id={id} />

                    <div className='p-2'>
                        <h1 className='mt-2'>{title}</h1>
                        <p className='mb-2'>{channel}</p>
                        <p className='text-secondary'>{description}</p>
                    </div>
                </div>
                <div className="section-player__content">
                    <ListVideos />
                </div>
            </div>
        </>
    )
}