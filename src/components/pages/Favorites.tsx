import React from "react";
import { useMemo , useState } from "react";

import useStoreFavorites from "../../hooks/useStoreFavorites";
import YoutubeEmbed from '../YoutubeEmbed';

import CardRef from "../card";
import Modal from "../modal";

import './Favorites.scss'

export default function Favorites(props: any) {
    const { list, addFavorite, removeFavorite } = useStoreFavorites()
    const [modalOpen, setModalOpen] = useState(false)
    const [videoModal, setVideoModal] = useState('')
    
    const handleFavorite = (status:any, data:any ) => {
        const action = status ? addFavorite : removeFavorite
        action({...data, status })
    }

    const handleVideoModal = (id:string) => {
        if(!id) return null

        setVideoModal(id)
        setModalOpen(true)
    }

    const whapperCard = (data:any, index:number) => {
        return  (
            <>
                <div className="whapper">
                    <CardRef 
                        key={index} 
                        id={data.id}
                        img={data.thumbnail} 
                        channel={data.channel} 
                        title={data.title} 
                        active={data.status}
                        favorite={(status:any) => handleFavorite(status, data)}
                        play={handleVideoModal}
                    />
                </div>
            </>
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
                        src="/assets/octocat-zero-otmized.png"
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
                            <YoutubeEmbed id={videoModal}/>
                        </Modal>
                    </div> 
                    : ''
            }
            <div className="favorite__content">                
                { cards.length ? <div className="favorite__list">{cards}</div>: templateFavoriteNone() }
            </div>
        </>
    )
}