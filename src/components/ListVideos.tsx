import CardVideo from './CardVideo'
import useFavorites from '../hooks/useFavorites'
import useVideo from '../hooks/useVideo'

import './ListVideos.scss'

export default function ListVideos(props: { items: Array<any> }): React.ReactNode {
    const { addFavorite, removeFavorite } = useFavorites()
    const { setPlayer } = useVideo()

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