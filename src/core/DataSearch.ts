import { ResponseSearch } from '../api/types';

export default class DataSearch {
    private data: ResponseSearch | undefined;

    constructor(value: ResponseSearch) {
        this.data = value
    }

    private adapterDataVideos(item: any) {
        const { snippet, id } = item

        return {
            id: id.videoId,
            title: snippet.title,
            description: snippet.description,
            thumbnails: snippet.thumbnails,
            canal: snippet.channelTitle,
            thumbnailsDefault: () => snippet.thumbnails.medium
        }
    }

    getList() {
        return this.data?.items ? this.data.items.map(item => this.adapterDataVideos(item)) : []
    }
}