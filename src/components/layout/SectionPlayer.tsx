import YoutubeEmbed from '../YoutubeEmbed'
import ListVideos from '../ListVideos'

import useVideo from '../../hooks/useVideo'

import './SectionPlayer.scss'

export default function SectionPlayer(props: any) {
    const { player, list } = useVideo()

    return (
        <>
            <div className="section-player">
                <div className="section-player__embed">
                    <YoutubeEmbed id={player?.id || list[0].id} />

                    <div className='p-2'>
                        <h1 className='mt-2'>{player?.title || list[0].title }</h1>
                        <p className='mb-2'>{player?.channel || list[0].channel }</p>
                        <p className='text-secondary'>{player?.description || list[0].description }</p>
                    </div>
                </div>
                <div className="section-player__content">
                    <ListVideos items={list || []} />
                </div>
            </div>
        </>
    )
}