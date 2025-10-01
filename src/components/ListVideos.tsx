import responseVideos from '../mock/videos.json'
import DataVideo from '../core/DataVideo'
import CardVideo from './CardVideo'

import './ListVideos.scss'


export default function ListVideos(props: any): React.ReactNode {
    const cards = responseVideos.items
    .map((data) => new DataVideo(data))
    .map((data, index) => {
        return (
            <>
                <CardVideo 
                    key={index}
                    play={(data: any) => console.log('play ========> ', data)}
                    handleFavorite={(data: any) => console.log('favorite ========> ', data)}
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