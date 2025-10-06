import CardVideo from './CardVideo'
import useStoreFavorites from '../hooks/useStoreFavorites'
import useStoreVideo from '../hooks/useStoreVideo'

import './ListVideos.scss'

export default function ListVideos(props: { items: Array<any> }): React.ReactNode {
    const { addFavorite, removeFavorite } = useStoreFavorites()
    const { setPlayer } = useStoreVideo()

    const toggleFavorite = (data: any) => {
        data.status ? addFavorite(data) : removeFavorite(data)
    }

    const cards = props.items.map((data: any, index: number) => {
        return (
            <>
                <CardVideo
                    key={index}
                    play={setPlayer}
                    handleFavorite={toggleFavorite}
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