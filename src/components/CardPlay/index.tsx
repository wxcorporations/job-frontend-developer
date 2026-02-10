/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect, useState } from 'react'
import { PlayBtnFill } from 'react-bootstrap-icons'

import useAudio from '../../hooks/useAudio'
import Card from '../Card'

interface IData {
  id: string
  channel: string
  status: boolean
  thumbnail: string
  title: string
}

interface ICardPlayProps {
  data: IData
  handleFavoriteCallback: (status: boolean, data: IData) => void
  handlePlayCallback: (data: any) => void
}

function CardPlay({
  data,
  handleFavoriteCallback,
  handlePlayCallback,
}: ICardPlayProps) {
  const { id, title, status, channel, thumbnail } = data

  const [active, setActive] = useState(false)
  const { sound, playSound } = useAudio()

  useEffect(() => {
    setActive(status)
  }, [status])

  const toggleStatusFavorite = useCallback(() => {
    setActive(!active)
    if (handleFavoriteCallback) {
      handleFavoriteCallback(!active, data)
    }

    playSound(sound.Click)
  }, [active, handleFavoriteCallback])

  const handlePlay = useCallback(() => {
    if (!handlePlayCallback || !id) {
      return console.error('attrs obrigatorios [play, id]')
    }
    handlePlayCallback(id)

    playSound(sound.Swipe)
  }, [])

  const iconPlayBtnFill = () => <PlayBtnFill />
  const IconMemo = React.memo(iconPlayBtnFill)

  return (
    <Card.Root>
      <Card.Img
        icon={<IconMemo />}
        img={thumbnail}
        title={title}
        onPlay={handlePlay}
      />
      <Card.Content id={id} channel={channel} title={title} />
      <Card.Actions>
        <Card.ActionFavorite status={active} onToggle={toggleStatusFavorite} />
      </Card.Actions>
    </Card.Root>
  )
}

export default React.memo(CardPlay)
