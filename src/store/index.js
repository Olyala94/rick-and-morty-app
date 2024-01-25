// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import favoriteCharactersReducer from './favoriteCharactersSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, favoriteCharactersReducer);

const store = configureStore({
  reducer: {
    favoriteCharacters: persistedReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
