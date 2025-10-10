
type thumbnailValues = {
    url: string,
    width: number,
    height: number
}

export type thumbnails = {
    "default"?: thumbnailValues,
    "medium"?: thumbnailValues,
    "high"?: thumbnailValues,
    "standard"?: thumbnailValues,
    "maxres"?: thumbnailValues,
}

export type ResponseVideo = {
    "kind": string,
    "etag": string,
    "items": [
        {
            "kind": string,
            "etag": string,
            "id": string,
            "snippet": {
                "publishedAt": Date | string,
                "channelId": string,
                "title": string,
                "description": string,
                "thumbnails": thumbnails,
                "channelTitle": string,
                "tags": string[],
                "categoryId": string | number,
                "liveBroadcastContent": string,
                "defaultLanguage": string,
                "localized": {
                    "title": string,
                    "description": string
                },
                "defaultAudioLanguage": string
            },
            "contentDetails": {
                "duration": string,
                "dimension": string,
                "definition": string,
                "caption": string,
                "licensedContent": boolean,
                "contentRating": object,
                "projection": string
            },
            "statistics": {
                "viewCount": string | number,
                "likeCount": string | number,
                "favoriteCount": string | number,
                "commentCount": string | number
            }
        }
    ],
    "pageInfo": {
        "totalResults": number,
        "resultsPerPage": number
    }
}

export type VideoItemResponse = {
    "kind": string,
    "etag": string,
    "id": {
        "kind": string,
        "videoId": string
    },
    "snippet": {
        "publishedAt": Date | string,
        "channelId": string,
        "title": string,
        "description": string,
        "thumbnails": thumbnails
        "channelTitle": string,
        "liveBroadcastContent": string,
        "publishTime": Date | string
    }
}

export type ResponseSearch = {
    "kind": string,
    "etag": string,
    "nextPageToken": string,
    "regionCode": string,
    "pageInfo": {
        "totalResults": number,
        "resultsPerPage": number
    },
    "items": VideoItemResponse[]
}

export type ResponseSearchError = {
    error: true,
    message: string,
    errors?: object[]
}