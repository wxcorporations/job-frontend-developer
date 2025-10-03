import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: 'video',
    initialState: {
        list: [] as Array<any>,
        player: {},
    },
    reducers: {
        setPlayer: (state, action) => { state.player = action.payload },
        updateVideos: (state, action) => { state.list = action.payload },
    }
})

export default videoSlice.reducer
export const { setPlayer, updateVideos } = videoSlice.actions