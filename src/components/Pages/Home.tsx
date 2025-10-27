import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import { BookmarkHeartFill, PlayCircle, Share } from 'react-bootstrap-icons';

import useYoutubeSearch from '../../hooks/useYoutubeSearch';
import useStoreVideo from '../../hooks/useStoreVideo';

import InputSearch from '../InputSearch';
import Feature from '../Feature';

import person_300 from '@assets/person-300.png';
import person_390 from '@assets/person-390.png';

import './Home.scss'

export default function Home() {
    const navigate = useNavigate()
    const { searchVideos } = useYoutubeSearch()
    const { resetPlayer, resetVideos } = useStoreVideo()

    useEffect(() => {
        resetPlayer()
        resetVideos()
    }, [])

    const handleSearch = async (query: string) => {
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
                <div className='home animate__animated animate__fadeInDown'>
                    <img 
                        className="home__image" 
                        src={person_390}
                        alt="" 
                        loading="lazy" 
                    />

                    <div className="home__content ">
                        <h1 className='home__content-title mb-3'>Dash-play, seu agregador de videos off-line.</h1>
                        <p className='home__content-label mb-3'>Aqui você ira assistir, salvar e compartilhar seu vídeos favoritos com seu amigos no whatsapp</p>
                        <div className='home__content-search animate__animated animate__delay-3s animate__repeat-2 animate__headShake'>
                            <InputSearch search={handleSearch} />
                        </div>
                    </div>
                </div>

                <div className='home__features home animate__animated  animate__delay-1s animate__fadeIn'>
                    <Feature icon={<PlayCircle />} title="Assista" description="Assista seus videos do youtube" />
                    <Feature icon={<Share />} title="Compartilhe" description="Compartilhe seu video favorito com seus amigos do youtube e facebook" />
                    <Feature icon={<BookmarkHeartFill />} title="Salve" description="Salve seus favoritos na sua máquina" />
                </div>
            </div>
        </>
    )
}