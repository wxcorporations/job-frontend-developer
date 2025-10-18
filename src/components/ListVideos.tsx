import React from 'react'
import CardVideo from './CardVideo'
import useStoreFavorites from '../hooks/useStoreFavorites'
import useStoreVideo from '../hooks/useStoreVideo'
import useStoreSearch from '../hooks/useStoreSearch'

import Youtube from '../api/Youtube'
const youtubeAPI = new Youtube()

import './ListVideos.scss'

export default function ListVideos(props: { items: Array<any> }): React.ReactNode {
    const { addFavorite, removeFavorite } = useStoreFavorites()
    const { setPlayer, addVideos } = useStoreVideo()
    const { query } = useStoreSearch()

    const toggleFavorite = (data: any) => {
        data.status ? addFavorite(data) : removeFavorite(data)
    }


    const next = async () => {
        try {
            const res = await youtubeAPI.nextVideos(query, 'CAUQAA')

            if ('items' in res && res.items.length > 0) addVideos(res.items)

            console.log(res)
        } catch (error) {
            console.log(error)
        }
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
            <button onClick={next}>next</button>
        </>
    )
}