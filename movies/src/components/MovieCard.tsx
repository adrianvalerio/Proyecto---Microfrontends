import React from 'react';
import { Movie } from '../types/movie.types';
import './MovieCard.css';

interface MovieCardProps {
  movie: Movie;
  onWantToWatch?: (movieId: string) => void;
  onRemove?: (movieId: string) => void;
  showWantToWatchButton?: boolean;
  showRemoveButton?: boolean;
}

const MovieCard: React.FC<MovieCardProps> = ({
  movie,
  onWantToWatch,
  onRemove,
  showWantToWatchButton = false,
  showRemoveButton = false,
}) => {
  const formattedDate = new Date(movie.releaseDate).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="movie-card">
      <div className="movie-card-image">
        {movie.imageUrl ? (
          <img src={movie.imageUrl} alt={movie.title} />
        ) : (
          <div className="movie-card-placeholder">
            <span>🎬</span>
          </div>
        )}
      </div>
      
      <div className="movie-card-content">
        <h3 className="movie-card-title">{movie.title}</h3>
        <p className="movie-card-genre">{movie.genre}</p>
        <p className="movie-card-date">{formattedDate}</p>
        
        <div className="movie-card-actions">
          {showWantToWatchButton && onWantToWatch && (
            <button
              className="btn-want-to-watch"
              onClick={() => onWantToWatch(movie.id)}
            >
              ⭐ Quiero verla
            </button>
          )}
          
          {showRemoveButton && onRemove && (
            <button
              className="btn-remove"
              onClick={() => onRemove(movie.id)}
            >
              ❌ Quitar
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;