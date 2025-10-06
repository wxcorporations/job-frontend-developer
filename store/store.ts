import { combineReducers, configureStore } from '@reduxjs/toolkit';
import videoSlice from './videoSlice';
import favoritesSlice from './favoritesSlice';
import menuBarSlice from './menuBarSlice';
import searhSlice from './searchSlice';


import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const reducers = combineReducers({
  video: videoSlice,
  favorites: favoritesSlice,
  search: searhSlice,
  menu: menuBarSlice
})

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const persistedReducers = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store)
