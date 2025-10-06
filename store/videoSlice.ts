import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: 'video',
    initialState: {
        list: [] as Array<any>,
        player: {},
    },
    reducers: {
        setPlayer: (state, action) => { state.player = action.payload },
        resetPlayer: (state) => { state.player = {} },
        updateVideos: (state, action) => { state.list = action.payload },
        resetVideos: (state) => { state.list = [] },
    }
})

export default videoSlice.reducer
export const { setPlayer, updateVideos, resetPlayer, resetVideos } = videoSlice.actions