import { ResponseVideo, ResponseSearch } from './types'

export default class Youtube {
    private endpoint: string;

    constructor () {
        this.endpoint = 'https://www.googleapis.com/youtube/v3/'
    }

    private composeURL(recurso: string, params: any): string {
        if (!params) throw new Error('Paramentro obrigatorio!');
        
        const qs = new URLSearchParams();
        
        qs.set('key', process.env.YOUTUBE_KEY as string);

        for (const key in params) {
            qs.set(key, params[key])
        }

        return `${this.endpoint}${recurso}?${qs.toString()}`
    }

    async search(value: string, options?: any): Promise<ResponseSearch|unknown> {
        try {
            const url = this.composeURL('search', {q: value})
            const result = await fetch(url, { ...options})
            const data = await result.json()
            return data

        } catch (error) {
            return error
        }
    }

    async video(id: string, options?: any): Promise<ResponseVideo|unknown> {
        try {
            const url = this.composeURL('videos', {id: id, part: 'snippet,contentDetails,statistics'})
            const result = await fetch(url, { ...options})
            const data = await result.json()
            return data

        } catch (error) {
            return error
        }
    }
}