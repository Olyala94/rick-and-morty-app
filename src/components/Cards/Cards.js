import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteCharacter, removeFavoriteCharacter } from '../../store/favoriteCharactersSlice';
import styles from './Cards.module.scss';
import { useNavigate } from 'react-router-dom';

const Cards = ({ results }) => {
  const favoriteCharacters = useSelector((state) => state.favoriteCharacters.list);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isFavorite = (character) => {
    return favoriteCharacters.some((favCharacter) => favCharacter.id === character.id);
  };

  const handleFavoriteClick = (character) => {
    if (favoriteCharacters.length >= 10 && !isFavorite(character)) {
      alert("Favori karakter ekleme sayısını aştınız. Başka bir karakteri favorilerden çıkarmalısınız.");
      return;
    }

    if (isFavorite(character)) {
      dispatch(removeFavoriteCharacter(character));
    } else {
      dispatch(addFavoriteCharacter(character));
      navigate('/favoriteCharacters');
    }
  };

  let display;
  console.log(results);

  if (results) {
    display = results.map((x) => {
      let { id, name, image, location, status } = x;

      return (
        <div key={id} className="col-4 mb-4 position-relative">
          <div className={styles.cards}>
            <img src={image} alt='' className={`${styles.img} img-fluid`}></img>
            <div style={{ padding: "10px" }} className='content'>
              <div className='fs-4 fw-bold mb-3'>{name}</div>
              <div className=''>
                <div className='fs-6'>Last location </div>
                <div className='fs-5'>{location.name}</div>
              </div>
            </div>
          </div>
          {(() => {
            if (status === "Dead") {
              return (
                <div className={`${styles.badge} position-absolute badge bg-danger`}>
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div className={`${styles.badge} position-absolute badge bg-success`}>
                  {status}
                </div>
              );
            } else {
              return (
                <div className={`${styles.badge} position-absolute badge bg-secondary`}>
                  {status}
                </div>
              );
            }
          })()}

          <button
            className={`btn btn-outline-primary ${styles.favoriteButton} mt-2`}
            onClick={() => handleFavoriteClick(x)}
            disabled={isFavorite(x)} // Eğer favoride ise butonu devre dışı bırak
          >
            {isFavorite(x) ? 'Already in Favorites' : 'Add to Favorites'}
          </button>
        </div>
      );
    });
  } else {
    display = "No Characters Found ";
  }

  return (
    <div className="row">
      {display}
    </div>
  );
};

export default Cards;
