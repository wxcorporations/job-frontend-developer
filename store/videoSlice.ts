import { createSlice } from '@reduxjs/toolkit';

const videoSlice = createSlice({
  name: 'video',
  initialState: {
    play: '',
    search: '',
    favorites: [] as any
  },
  reducers: {
    play: (state, action) => { state.play = action.payload },
    setSearch: (state, action) => { state.search = action.payload },
    addFavorite: (state, action) => { state.favorites.push(action.payload) },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter((data: any) => {
        return data.id === action.payload.id
      })
    }
  }
});

export default videoSlice.reducer;
export const { play, setSearch, addFavorite, removeFavorite } = videoSlice.actions;