import { configureStore } from '@reduxjs/toolkit';
import videoSlice from './videoSlice';
import favoritesSlice from './favoritesSlice';
import searhSlice from './searchSlice';


export const store = configureStore({
  reducer: {
    video: videoSlice,
    favorites: favoritesSlice,
    search: searhSlice
  }
});
