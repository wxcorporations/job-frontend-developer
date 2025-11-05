import React, { useCallback, useEffect, useState } from "react"
import { PlayBtnFill } from "react-bootstrap-icons"

import useAudio from "../../hooks/useAudio"
import Card from "../Card"

interface CardPlayProps {
    id: string,
    title: string,
    status: boolean,
    channel: string,
    thumbnail: string,
    handleFavoriteCallback: (status: boolean) => void,
    handlePlayCallback: (data: any) => void,
}

export default function CardPlay({ id, title, status, channel, thumbnail, handleFavoriteCallback, handlePlayCallback }: CardPlayProps) {
    const [active, setActive] = useState(false)
    const { sound, playSound } = useAudio()

    useEffect(() => { setActive(status) }, [status])


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
                <Card.ActionFavorite status={active} onToggle={toggleStatusFavorite} />
            </Card.Actions>
        </Card.Root>
    )
}