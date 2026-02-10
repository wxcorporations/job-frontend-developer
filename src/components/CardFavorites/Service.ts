/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from 'react'
import useAudio from '../../hooks/useAudio'

import { toast } from 'react-toastify'

interface CardServicesProps {
  id: string
  isFavorite: boolean
  handlePlayCallback: (id: string) => void
  handleFavoriteCallback: (bol: boolean) => void
}

export default function CardServices({
  id,
  isFavorite,
  handleFavoriteCallback,
  handlePlayCallback,
}: CardServicesProps) {
  const [active, setActive] = useState(false)
  const [load, setLoad] = useState(false)
  const [error, setError] = useState(false)
  const { sound, playSound } = useAudio()

  useEffect(() => {
    setActive(isFavorite)
  }, [isFavorite])

  const toggleStatusFavorite = useCallback(() => {
    setActive(!active)
    if (handleFavoriteCallback) handleFavoriteCallback(!active)

    playSound(sound.Click)
  }, [active, handleFavoriteCallback])

  const handlePlay = useCallback(() => {
    if (!handlePlayCallback || !id)
      return console.error('attrs obrigatorios [play, id]')
    handlePlayCallback(id)

    playSound(sound.Swipe)
  }, [id, handlePlayCallback])

  const downloadVideo = useCallback(async () => {
    try {
      setLoad(true)

      const urlVideo = `https://youtube.com/watch?v=${id}`
      const response: any = await fetch(
        `http://localhost:5000/download?url=${encodeURIComponent(urlVideo)}`,
      )
      const blob = await response.blob()

      if (!blob.size) throw new Error(`Erro no download ${id}`)

      const url = window.URL.createObjectURL(blob)

      setLoad(false)

      notifySucess(`Download realizado com sucesso!`)

      setTimeout(() => {
        const a = document.createElement('a')
        a.href = url
        a.download = 'video.mp4'
        a.click()
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
      position: 'bottom-left',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
      toastId: id,

      onClose: () => {
        // eslint-disable-next-line no-console
        console.log(error)
      },
    })
  }

  const notifySucess = (msg: string) => {
    toast.success(msg, {
      position: 'bottom-left',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
      onClose: () => {},
    })
  }

  return {
    notifyError,
    notifySucess,
    toggleStatusFavorite,
    handlePlay,
    downloadVideo,
    load,
  }
}
