import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const menuBarSlice = createSlice({
    name: 'menu',
    initialState: {
        inputSearch: false,
        linkFavorite: false,
        linkHome: false,
    },
    reducers: {
        activeSearch: (state, actions: PayloadAction<boolean>) => { state.inputSearch = actions.payload},
        activeLinkFavorite: (state, actions: PayloadAction<boolean>) => { state.linkFavorite = actions.payload},
        activeLinkHome: (state, actions: PayloadAction<boolean>) => { state.linkHome = actions.payload},
    }
})

export default menuBarSlice.reducer
export const { activeLinkFavorite, activeLinkHome, activeSearch } = menuBarSlice.actions