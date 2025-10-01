import { ItemSearch } from '../types/Youtube';
import { Video } from '../interfaces/Video'

export default class DataVideo implements Video {
    private data: ItemSearch;
    private TOTAL_CHARS_TITLE = 25

    constructor(video: ItemSearch) {
        this.data = video
    }

    getVideoId() {
        return this.data?.id?.videoId;
    }

    getThumb() {
        return this.data?.snippet?.thumbnails?.medium?.url || this.data?.snippet?.thumbnails?.medium?.url || '';
    }

    getChannel() {
        return this.data?.snippet?.channelTitle || '';
    }

    getTitle() {
        return this.data?.snippet?.title || '';
    }
    getDescription() {
        return this.data?.snippet?.description || ''
    }
    getImgTitle() {
        return this.data.snippet.title;
    }
}