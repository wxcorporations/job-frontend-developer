import React, { useCallback, useEffect, useState } from 'react';
import { PlayCircleFill } from 'react-bootstrap-icons';
import useAudio from '../../hooks/useAudio';
import { OrbitProgress } from 'react-loading-indicators';

import CardActionFavorite from './CardActionFavorite';
import CardActionDownload from './CardActionDownload';
import CardActionShared from './CardActionShared';
import CardContent from './CardContent';
import CardImg from './CardImg';

import { toast } from 'react-toastify';

import './style.scss';


function Card(props: any) {
    const [active, setActive] = useState(false)
    const [load, setLoad] = useState(false)
    const [error, setError] = useState(false)
    const { sound, playSound } = useAudio()

    const SIZE = {
        MOBILE: [100, 84],
        DESKTOP: [123, 84]
    }

    useEffect(() => {
        setActive(props.active)
    }, [props.active])


    const toggleStatus = useCallback(() => {
        setActive(!active)
        if (props.favorite) props.favorite(!active)

        playSound(sound.Click)
    }, [active, props.favorite])

    const handlePlay = useCallback(() => {
        if (!props.play || !props.id) return console.error('attrs obrigatorios [play, id]')
        props.play(props.id)

        playSound(sound.Swipe)
    }, [props.play, props.id])

    const downloadVideo = useCallback(async () => {
        try {
            setLoad(true)

            const urlVideo = `https://youtube.com/watch?v=${props.id}`
            const response: any = await fetch(`http://localhost:5000/download?url=${encodeURIComponent(urlVideo)}`);
            const blob = await response.blob();

            if (!blob.size) throw new Error(`Erro no download ${props.id}`);

            const url = window.URL.createObjectURL(blob);

            setLoad(false);

            notifySucess(`Download realizado com sucesso!`)

            setTimeout(() => {
                const a = document.createElement('a');
                a.href = url;
                a.download = 'video.mp4';
                a.click();
            }, 3000)

        } catch (error) {
            setLoad(false)
            setError(true)
            console.error(error)
            notifyError(`Erro no download ${props.id}!`)
        }
    }, [props.id])


    const notifyError = (msg: string) => {
        toast.error(msg, {
            position: "bottom-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            toastId: props.id,
            onClose: () => { console.log(error) },
        });
    }

    const notifySucess = (msg: string) => {
        toast.success(msg, {
            position: "bottom-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            onClose: () => { },
        });
    }

    return (
        <>
            <div className='card'>
                <CardImg
                    img={props.img}
                    title={props.title}
                    icon={<PlayCircleFill />}
                    onPlay={handlePlay}
                />

                <CardContent
                    id={props.id}
                    title={props.title}
                    channel={props.channel}
                />

                <div className='card-action'>
                    {
                        load ?
                            (
                                <div className="spiner">
                                    <OrbitProgress variant="dotted" color="#00d9ff" size="small" text="" textColor="" />
                                </div>
                            )
                            : (
                                <>
                                    <CardActionShared id={props.id} />
                                    <CardActionDownload onDownload={downloadVideo} />
                                    <CardActionFavorite status={active} onToggle={toggleStatus} />
                                </>
                            )
                    }

                </div>
            </div>
        </>
    )
}

export default React.memo(Card)