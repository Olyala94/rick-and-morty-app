
import { createSlice } from '@reduxjs/toolkit';

const favoriteCharactersSlice = createSlice({
  name: 'favoriteCharacters',
  initialState: {
    list: [],
  },
  reducers: {
    addFavoriteCharacter: (state, action) => {
      state.list.push(action.payload);
    },
    removeFavoriteCharacter: (state, action) => {
      state.list = state.list.filter((character) => character.id !== action.payload.id);
    },
  },
});

export const { addFavoriteCharacter, removeFavoriteCharacter } = favoriteCharactersSlice.actions;
export default favoriteCharactersSlice.reducer;
