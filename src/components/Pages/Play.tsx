import React, { useEffect, useState, useRef, useMemo } from 'react'

import InputSearch from '../InputSearch'
import YoutubeEmbed from '../YoutubeEmbed'
import CardPlay from '../CardPlay'

import useStoreFavorites from '../../hooks/useStoreFavorites'
import useYoutubeSearch from '../../hooks/useYoutubeSearch'
import useStoreSearch from '../../hooks/useStoreSearch'
import useStoreVideo from '../../hooks/useStoreVideo'

import './Play.scss'

export default function PagePlay() {
    const { addFavorite, removeFavorite, list: favoriteList } = useStoreFavorites()
    const { nextVideos, searchVideos } = useYoutubeSearch()
    const { list, player, setPlayer } = useStoreVideo()
    const { query, nextToken } = useStoreSearch()

    const anchor = useRef<HTMLDivElement>(null)

    const [idvideo, setIdvideo] = useState('')
    const [channel, setChannel] = useState('')
    const [title, setTitle] = useState('')
    const [cards, setCards] = useState([])

    useEffect(() => {
        if (list.length === 0) return

        const { id, title, channel } = list[0]

        setIdvideo(id)
        setTitle(title)
        setChannel(channel)
        setCards(cardsMemo)

    }, [list])


    const handleFavorite = (status: any, data: any) => {
        const action = status ? addFavorite : removeFavorite
        action({ ...data, status })
    }

    const mergePlayListToFavorites = (video: any) => {
        const videoFavorite = favoriteList.find((favorite: any) => favorite.id === video.id)
        return videoFavorite ? videoFavorite : video
    }

    const getMoreVideos = async () => {
        await nextVideos(query, nextToken)
    }

    const updateVideoPlayer = (id: string) => {
        setIdvideo(id)
        setPlayer(id)
        scrollTopPlay()
    }

    const cardsMemo = useMemo(() => {
        return list.length
            ? list.map(mergePlayListToFavorites)
                .map((data: any, index: number) => {
                    return (
                        <CardPlay
                            key={`card-${data.id}-${index}`}
                            id={data.id}
                            channel={data.channel}
                            status={data.status}
                            thumbnail={data.thumbnail}
                            title={data.title}
                            handleFavoriteCallback={(status: any) => handleFavorite(status, data)}
                            handlePlayCallback={updateVideoPlayer}
                        />
                    )
                })
            : []
    }, [list])

    const handleSearch = async (query: string) => {
        try {
            await searchVideos(query)
            scrollTopPlay()

        } catch (error) {
            console.error(error)
        }
    }

    const scrollTopPlay = () => {
        if (anchor.current) {
            anchor.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
        }
    }

    return (
        <>
            <div className="page-play">
                <div className="page-play__container">
                    <div className="page-play__actions">
                        <InputSearch onSearch={handleSearch} />
                    </div>

                    <div className="page-play__videos">
                        <div className="page-play__videos-embed" ref={anchor}>
                            <YoutubeEmbed id={idvideo || player} />
                            <span className='mt-2 mb-3'>{channel}</span>
                            <h2 className=''>{title}</h2>
                        </div>
                        <div className="page-play__list">
                            {cards.length && <div className="page-play__list-items">{cards}</div>}
                            <button className="page-play__list-btn" onClick={getMoreVideos}>+ videos</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
