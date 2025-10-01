import responseVideos from '../mock/videos.json'
import DataVideo from '../core/DataVideo'
import CardVideo from './CardVideo'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite, play } from '../../store/videoSlice'

import './ListVideos.scss'

export default function ListVideos(props: any): React.ReactNode {
    const dispath = useDispatch()

    const cards = responseVideos.items
        .map((data) => new DataVideo(data))
        .map((data, index) => {
            return (
                <>
                    <CardVideo
                        key={index}
                        play={(data: any) => dispath(play(data))}
                        handleFavorite={(data: any) => dispath(addFavorite(data))}
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