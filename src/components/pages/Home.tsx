import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import { BookmarkHeartFill, PlayCircle, Share } from 'react-bootstrap-icons';

import useYoutubeSearch from '../../hooks/useYoutubeSearch';
import useStoreVideo from '../../hooks/useStoreVideo';
import InputSearchREF from '../inputSearchREF';
import Feature from '../feature';


import './Home.scss'

export default function Home() {
    const navigate = useNavigate()
    const { searchVideos } = useYoutubeSearch()
    const { resetPlayer, resetVideos } = useStoreVideo()
    

    useEffect(() => {
        resetPlayer()
        resetVideos()
    }, [])

    const handleSearch = async (query:string) => {
        try {
            await searchVideos(query)
            navigate('/play')
            
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
        <div className="home-content">
            <div className='home'>                    
                <img className="home__image" src="/assets/person-desktop.png" alt="" />

                <div className="home__content">
                    <h1 className='home__content-title mb-3'>Dash-play Seu agregador de videos off-line.</h1>
                    <p className='home__content-label mb-3'>Assísta, favorite e compartilhe direto da sua máquina.</p>
                    <div className='home__content-search'>
                        <InputSearchREF search={handleSearch}/>
                    </div> 
                </div>
            </div>

            <div className='home__features'>
                <Feature icon={<PlayCircle />} title="Assista" description="Assista seus videos do youtube" />
                <Feature icon={<Share />} title="Compartilhe" description="Compartilhe seu video favorito com seus amigos do youtube e facebook" />
                <Feature icon={<BookmarkHeartFill />} title="Salve" description="Salve seus favoritos na sua máquina" />
            </div>
        </div>
        </>
    )
}


