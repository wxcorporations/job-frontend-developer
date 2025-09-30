import { ItemSearch } from '../api/types';
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
        return this.data?.snippet?.thumbnails?.default?.url || '';
    }

    getChannel() {
        return this.data?.snippet?.channelTitle || '';
    }

    getTitle() {
        if (this.data?.snippet?.title.length >= this.TOTAL_CHARS_TITLE) {
            return this.data?.snippet?.title.substring(0, this.TOTAL_CHARS_TITLE).concat('...')
        }
        return this.data?.snippet?.title || '';
    }
    getDescription() {
        return this.data?.snippet?.description || ''
    }
    getImgTitle() {
        return this.data.snippet.title;
    }
}