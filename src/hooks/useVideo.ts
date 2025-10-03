import { useDispatch, useSelector } from 'react-redux';
import { setPlayer, updateVideos } from '../../store/videoSlice'


function factoryDataVideo(data:any) {
    return {
        id: data.id.videoId,
        title: data.snippet.title,
        discription: data.snippet.description,
        channel: data.snippet.channelTitle,
        thumbnail: data.snippet.thumbnails.medium.url || data.snippet.thumbnails.default.url,
    }
}

export default function useVideo() {
    const dispatch = useDispatch()

    const list = useSelector((store:any) => store.video.list)
    const player = useSelector((store:any) => store.video.player)

    return {
        setPlayer: (data: any) => { dispatch(setPlayer(data)) },
        updateVideos: (list: []) => { dispatch(updateVideos(list.map((data) => factoryDataVideo(data)))) },
        player,
        list
    }
}