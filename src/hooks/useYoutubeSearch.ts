import mock from '../mock/videos.json'
import useStoreVideo from './useStoreVideo';
import useStoreSearch from './useStoreSearch';

// import Youtube from '../api/Youtube';
// const youtubeApi = new Youtube()

const validateQuery = (value: string) => value.length !== 0 && value.length < 120

export default function useYoutubeSearch() {
    const { updateSearch} = useStoreSearch()
    const { updateVideos } = useStoreVideo()

    const searchVideos = async (query: string) => {
        if (!validateQuery(query)) return false
        // const res = await youtubeApi.search(query)
        const res = mock
        if ('error' in res) throw res

        updateSearch(query)
        updateVideos(res.items as [])
    }

    return {
        searchVideos
    }
}
