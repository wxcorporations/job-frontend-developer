import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import { BookmarkHeartFill, PlayCircle, Share } from 'react-bootstrap-icons';

import useYoutubeSearch from '../../hooks/useYoutubeSearch';
import useStoreVideo from '../../hooks/useStoreVideo';
import useNotify from '../../hooks/useNotify';

import InputSearch from '../InputSearch';
import Feature from '../Feature';

import person_390 from '@assets/person-390.webp';

import './Home.scss'

const TEXTS = {
    TITLE: 'Dash-play, seu agregador de vídeos offline.',
    DESCRIPTION: 'Aqui, você assiste, salva e compartilha seus vídeos favoritos com os amigos no WhatsApp – tudo rápido e organizado!',
    FEATURES: {
        WATCH: 'Assista seus videos do youtube',
        SHARED: 'Compartilhe seu vídeo favorito com amigos no whatsapp.',
        SAVE: 'Salve seus favoritos para acessar rapidinho quando quiser.'
    }
}

export default function Home() {
    const navigate = useNavigate()
    const { searchVideos } = useYoutubeSearch()
    const { resetPlayer, resetVideos } = useStoreVideo()
    const { MsgError } = useNotify()

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
            MsgError('Erro ao se comunicar com api.', 'erro-youtube')
        }
    }

    return (
        <>
            <div className="home-content">
                <div className='home animate__animated animate__fadeInDown'>
                    <img
                        className="home__image"
                        src={person_390}
                        alt="Imagem de um passoa de terno com um laptop no colo, sentada em uma cadeira oval na cor branca com estofado vermelho sorrindo!"
                        rel='preload'
                        loading="eager"
                    />

                    <div className="home__content ">
                        <h1 className='home__content-title mb-3'>{TEXTS.TITLE}</h1>
                        <p className='home__content-label mb-3'>{TEXTS.DESCRIPTION}</p>
                        <div className='home__content-search animate__animated animate__delay-3s animate__repeat-2 animate__headShake'>
                            <InputSearch onSearch={handleSearch} />
                        </div>
                    </div>
                </div>

                <div className='home__features home animate__animated  animate__delay-1s animate__fadeIn'>
                    <Feature icon={<PlayCircle />} title="Assista" description={TEXTS.FEATURES.WATCH} />
                    <Feature icon={<Share />} title="Compartilhe" description={TEXTS.FEATURES.SHARED} />
                    <Feature icon={<BookmarkHeartFill />} title="Salve" description={TEXTS.FEATURES.SAVE} />
                </div>

            </div>
        </>
    )
}