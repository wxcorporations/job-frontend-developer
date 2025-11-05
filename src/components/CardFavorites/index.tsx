import React, { useCallback, useEffect, useState } from "react"
import { PlayBtnFill } from "react-bootstrap-icons"
import { toast } from "react-toastify"

import useAudio from "../../hooks/useAudio"
import Card from "../Card"

interface CardFavoritesProps {
    id: string,
    title: string,
    status: boolean,
    channel: string,
    thumbnail: string,
    handleFavoriteCallback: (status: boolean) => void,
    handlePlayCallback: (data: any) => void,
}

export default function CardFavorites({ id, title, status, channel, thumbnail, handleFavoriteCallback, handlePlayCallback }: CardFavoritesProps) {
    const [active, setActive] = useState(false)
    const [load, setLoad] = useState(false)
    const [error, setError] = useState(false)
    const { sound, playSound } = useAudio()

    useEffect(() => {
        setActive(status)
    }, [status])


    const toggleStatusFavorite = useCallback(() => {
        setActive(!active)
        if (handleFavoriteCallback) handleFavoriteCallback(!active)

        playSound(sound.Click)
    }, [active, handleFavoriteCallback])

    const handlePlay = useCallback(() => {
        if (!handlePlayCallback || !id) return console.error('attrs obrigatorios [play, id]')
        handlePlayCallback(id)

        playSound(sound.Swipe)
    }, [id, handlePlayCallback])

    const downloadVideo = useCallback(async () => {
        try {
            setLoad(true)

            const urlVideo = `https://youtube.com/watch?v=${id}`
            const response: any = await fetch(`http://localhost:5000/download?url=${encodeURIComponent(urlVideo)}`);
            const blob = await response.blob();

            if (!blob.size) throw new Error(`Erro no download ${id}`);

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
            notifyError(`Erro no download ${id}!`)
        }
    }, [id])

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
            toastId: id,
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
        <Card.Root>
            <Card.Img
                icon={<PlayBtnFill />}
                img={thumbnail}
                title={title}
                onPlay={handlePlay}
            />
            <Card.Content 
                id={id}
                channel={channel}
                title={title} 
            />
            <Card.Actions>
                {
                    load
                        ? <Card.ActionLoad />
                        : (<>
                            <Card.ActionShared id={id} />
                            <Card.ActionDownload onDownload={downloadVideo} />
                            <Card.ActionFavorite status={status} onToggle={toggleStatusFavorite} />
                        </>)
                }
            </Card.Actions>
        </Card.Root>
    )
}