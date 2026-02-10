/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ResponseSearch,
  ResponseSearchError,
  ResponseVideo,
} from '../types/Youtube'

function setYoutubeRequestError(
  message: string,
  errors?: object[],
): ResponseSearchError {
  return {
    error: true,
    message: message || '',
    errors: errors || [],
  }
}

const BASE_PARAMS = {
  part: 'snippet',
  key: process.env.YOUTUBE_KEY,
  maxResults: 10,
  type: 'video',
}

export default class Youtube {
  private endpoint: string

  constructor() {
    this.endpoint = 'https://www.googleapis.com/youtube/v3/'
  }

  private composeURL(recurso: string, params: any): string {
    if (!params) throw new Error('Paramentro obrigatorio!')

    const qs = new URLSearchParams()

    const _params = { ...BASE_PARAMS, ...params }

    for (const key in _params) {
      qs.set(key, _params[key])
    }

    return `${this.endpoint}${recurso}?${qs.toString()}`
  }

  async search(
    value: string,
    options?: any,
  ): Promise<ResponseSearch | ResponseSearchError> {
    try {
      const url = this.composeURL('search', {
        q: value,
        part: 'snippet',
        maxResults: 10,
      })
      const result = await fetch(url, { ...options })

      if (!result.ok) {
        return setYoutubeRequestError('Erro na requisição')
      }

      const data = await result.json()
      return data
    } catch {
      return setYoutubeRequestError('Erro desconhecido!')
    }
  }

  async nextVideos(
    query: string,
    value: string,
    options?: any,
  ): Promise<ResponseSearch | ResponseSearchError> {
    try {
      const url = this.composeURL('search', { q: query, pageToken: value })
      const result = await fetch(url, { ...options })

      if (!result.ok) {
        return setYoutubeRequestError('Erro na requisição')
      }

      const data = await result.json()
      return data
    } catch {
      return setYoutubeRequestError('Erro desconhecido!')
    }
  }

  async video(id: string, options?: any): Promise<ResponseVideo | unknown> {
    try {
      const url = this.composeURL('videos', {
        id: id,
        part: 'snippet,contentDetails,statistics',
      })
      const result = await fetch(url, { ...options })
      const data = await result.json()
      return data
    } catch (error) {
      return error
    }
  }
}
