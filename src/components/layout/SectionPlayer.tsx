import YoutubeEmbed from '../YoutubeEmbed'
import ListVideos from '../ListVideos'

import useVideo from '../../hooks/useVideo'
import useFavorites from '../../hooks/useFavorites'

import './SectionPlayer.scss'



export default function SectionPlayer(props: any) {
    const { list: listFavorites } = useFavorites()
    const { player, list } = useVideo()

    const listUpdated = list.map((video: any) => {
            const favorite = listFavorites.find((fav: any) => fav.id === video.id)
            return favorite ? favorite : video
        })
        
    return (
        <>
            <div className="section-player">
                <div className="section-player__embed">
                    <YoutubeEmbed id={player?.id || list[0].id} />

                    <div className='p-2'>
                        <h1 className='mt-2'>{player?.title || list[0].title}</h1>
                        <p className='mb-2'>{player?.channel || list[0].channel}</p>
                        <p className='text-secondary'>{player?.description || list[0].description}</p>
                    </div>
                </div>
                <div className="section-player__content">
                    <ListVideos items={listUpdated || []} />
                </div>
            </div>
        </>
    )
}