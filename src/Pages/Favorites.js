import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavoriteCharacter } from '../store/favoriteCharactersSlice';

const Favorites = () => {
  const favoriteCharacters = useSelector((state) => state.favoriteCharacters.list);
  const dispatch = useDispatch();

  const handleRemoveCharacter = (character) => {
   
    const isConfirmed = window.confirm(`"${character.name}" isimli karakteri favorilerden kaldırmak istediğinize emin misiniz?`);

    if (isConfirmed) {
      dispatch(removeFavoriteCharacter(character));
    }
   
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>The Favorites are here</h2>
      <ul>
        {favoriteCharacters.map((character) => (
          <li key={character.id}>
            {character.name}{' '}
            <button onClick={() => handleRemoveCharacter(character)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
