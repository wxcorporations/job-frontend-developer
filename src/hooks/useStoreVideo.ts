/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from 'react-redux'
import {
  setPlayer,
  updateVideos,
  resetPlayer,
  resetVideos,
  includeVideos,
} from '../../store/videoSlice'
import { VideoItemResponse } from '../types/Youtube'
import Video from '../core/Video'

export default function useStoreVideo() {
  const dispatch = useDispatch()

  const list = useSelector((store: any) => store.video.list)
  const player = useSelector((store: any) => store.video.player)

  return {
    setPlayer: (data: any) => {
      dispatch(setPlayer(data))
    },
    updateVideos: (list: VideoItemResponse[]) => {
      dispatch(
        updateVideos(
          list.map((data: VideoItemResponse) => Video.factoryData(data)),
        ),
      )
    },
    addVideos: (list: VideoItemResponse[]) => {
      dispatch(
        includeVideos(
          list.map((data: VideoItemResponse) => Video.factoryData(data)),
        ),
      )
    },
    resetPlayer: () => {
      dispatch(resetPlayer())
    },
    resetVideos: () => {
      dispatch(resetVideos())
    },
    player,
    list,
  }
}
