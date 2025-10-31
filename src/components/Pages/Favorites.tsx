import React, { useCallback } from "react";
import { useMemo, useState } from "react";

import useStoreFavorites from "../../hooks/useStoreFavorites";
import YoutubeEmbed from '../YoutubeEmbed';

import Card from "../Card";
import Modal from "../Modal";

import './Favorites.scss'

import octo from "@assets/octocat-zero-otmized.png"

import Highlight from "../HighLight";

export default function Favorites(props: any) {
    const { list, addFavorite, removeFavorite } = useStoreFavorites()
    const [modalOpen, setModalOpen] = useState(false)
    const [videoModal, setVideoModal] = useState('')

    // const handleFavorite = (status:any, data:any ) => {
    //     const action = status ? addFavorite : removeFavorite
    //     action({...data, status })
    // }

    // const handleVideoModal = (id:string) => {
    //     if(!id) return null

    //     setVideoModal(id)
    //     setModalOpen(true)
    // }

    const handleFavorite = useCallback((status: any, data: any) => {
        const action = status ? addFavorite : removeFavorite
        action({ ...data, status })
    }, [addFavorite, removeFavorite])

    const handleVideoModal = useCallback((id: string) => {
        if (!id) return null

        setVideoModal(id)
        setModalOpen(true)
    }, [])

    const whapperCard = (data: any) => {
        const onFavorite = (status: any) => handleFavorite(status, data)

        return (
            <div className="whapper" key={`card-${data.id}`}>
                <Card
                    id={data.id}
                    img={data.thumbnail}
                    channel={data.channel}
                    title={data.title}
                    active={data.status}
                    favorite={onFavorite}
                    play={handleVideoModal}
                />
            </div>
        )
    }

    const cards = useMemo(() => {
        if (!list.length) return []

        return list.map((whapperCard))
    }, [list])

    const templateFavoriteNone = () => {
        return (
            <>
                <div className="w-100 vh-75 d-flex flex-column justify-content-center align-items-center">
                    <img
                        src={octo}
                        alt="icon do octocat triste, por não ter favoritos"
                        width={256}
                        height={256}
                    />
                    <h2 className="mt-5 text-secondary">
                        0 favorito :(
                    </h2>
                </div>
            </>
        )
    }


    return (
        <>

            {
                modalOpen
                    ? <div className="whapper-modal">
                        <Modal close={() => setModalOpen(false)}>
                            <YoutubeEmbed id={videoModal} />
                        </Modal>
                    </div>
                    : ''
            }
            <div className="favorite__content">
                <Highlight text="FAVORITOS" description="FAVORITOS"></Highlight>

                {cards.length ? <div className="favorite__list">{cards}</div> : templateFavoriteNone()}
            </div>
        </>
    )
}