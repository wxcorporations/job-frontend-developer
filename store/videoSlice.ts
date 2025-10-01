import { createSlice } from '@reduxjs/toolkit';

const videoSlice = createSlice({
  name: 'video',
  initialState: {
    play: '',
    favorites: [] as any
  },
  reducers: {
    play: (state, action) => { state.play = action.payload },
    addFavorite: (state, action) => { state.favorites.push(action.payload) }
  }
});

export default videoSlice.reducer;
export const { play, addFavorite } = videoSlice.actions;