import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { videoStore } from "../src/core/Video";

export type initStateVideo = {
    list: videoStore[] | [],
    player: videoStore | object
}

const initialState: initStateVideo = { list: [], player: {}}

const videoSlice = createSlice({
    name: 'video',
    initialState,
    reducers: {
        setPlayer: (state, action: PayloadAction<videoStore>) => { state.player = action.payload },
        resetPlayer: (state) => { state.player = {} },
        updateVideos: (state, action: PayloadAction<videoStore[]>) => { state.list = action.payload },
        resetVideos: (state) => { state.list = [] },
    }
})

export default videoSlice.reducer
export const { setPlayer, updateVideos, resetPlayer, resetVideos } = videoSlice.actions