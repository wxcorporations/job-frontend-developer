import videosMock from '../mock/videos.json'

import useVideo from './useVideo';
import useSearch from './useSearch';

import Youtube from '../api/Youtube';
const youtubeApi = new Youtube()

const validateQuery = (value: string) => value.length !== 0 && value.length < 120

export default function useYoutubeSearch() {
    const { updateSearch} = useSearch()
    const { updateVideos } = useVideo()

    const searchVideos = async (query: string) => {
        // if (!validateQuery(query)) return false
        // const res = await youtubeApi.search(query)

        // if ('error' in res) throw res

        updateSearch(query)
        updateVideos(videosMock.items as [])
    }

    return {
        searchVideos
    }
}
