import responseVideos from '../mock/videos.json'
import DataVideo from '../core/DataVideo'
import CardVideo from './CardVideo'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite, removeFavorite, play } from '../../store/videoSlice'

import './ListVideos.scss'

export default function ListVideos(props: any): React.ReactNode {
    const dispath = useDispatch()

    const handleFavorite = (data:any) => {
        dispath(data.status ? addFavorite(data) : removeFavorite(data))
    }

    const cards = responseVideos.items
        .map((data) => new DataVideo(data))
        .map((data, index) => {
            return (
                <>
                    <CardVideo
                        key={index}
                        play={(data: any) => dispath(play(data))}
                        handleFavorite={handleFavorite}
                        data={data}
                    />
                </>
            )
        })

    return (
        <>
            <div className='list-videos'>
                {cards.length && cards}
            </div>
        </>
    )
}