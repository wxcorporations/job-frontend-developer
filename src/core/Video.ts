import { VideoItemResponse } from "../types/Youtube";

export type videoStore = {
    status?: boolean,
    id: string,
    title: string,
    channel: string,
    discription: string,
    thumbnail: string,
}

export default class Video {
    constructor() {}

    static factoryData(data: VideoItemResponse): videoStore {
        return {
            status: false,
            id: data?.id?.videoId || "",
            title: data?.snippet?.title || "",
            channel: data?.snippet?.channelTitle || "",
            discription: data?.snippet?.description || "",
            thumbnail: data?.snippet?.thumbnails?.medium?.url || data.snippet?.thumbnails?.default?.url || ""
        }
    }
}