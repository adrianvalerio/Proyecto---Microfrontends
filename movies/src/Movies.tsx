import React from 'react';
import { useCinemaStore } from 'store_mfe/store';
import './Movies.css';

const Movies: React.FC = () => {
  const favoriteMovies = useCinemaStore(state => state.favoriteMovies);
  const addFavorite = useCinemaStore(state => state.addFavorite);
  const removeFavorite = useCinemaStore(state => state.removeFavorite);

  const movies = ['Matrix', 'Inception', 'Avatar'];

  return (
    <div className="movies-container">
      <h1 className="movies-header">
        Películas <span>Disponibles</span>
      </h1>
      <ul className="movies-list">
        {movies.map(movie => (
          <li key={movie}>
            <span>{movie}</span>
            <div>
              {favoriteMovies.includes(movie) ? (
                <button onClick={() => removeFavorite(movie)}>Eliminar</button>
              ) : (
                <button onClick={() => addFavorite(movie)}>Agregar</button>
              )}
              {favoriteMovies.includes(movie) && (
                <span className="favorite-badge">★</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
