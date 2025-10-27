import React, { useState } from 'react';
import { useCinemaStore } from 'store_mfe/store';
import MovieCard from './components/MovieCard';
import Tabs, { TabType } from './components/Tabs';
import { moviesData } from './data/moviesData';
import { Movie } from './types/movie.types';
import './Movies.css';

const Movies: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('Cartelera');
  
  const wantToWatch = useCinemaStore((state) => state.wantToWatch);
  const addToWantToWatch = useCinemaStore((state) => state.addToWantToWatch);
  const removeFromWantToWatch = useCinemaStore((state) => state.removeFromWantToWatch);

  const getFilteredMovies = (): Movie[] => {
    if (activeTab === 'Quiero-verla') {
      return moviesData.filter((movie) => wantToWatch.includes(movie.id));
    }
    return moviesData.filter((movie) => movie.status === activeTab);
  };

  const filteredMovies = getFilteredMovies();

  const counts = {
    'Cartelera': moviesData.filter((m) => m.status === 'Cartelera').length,
    'Proximamente': moviesData.filter((m) => m.status === 'Proximamente').length,
    'Quiero-verla': wantToWatch.length,
  };

  return (
    <div className="movies-page">
      <header className="movies-header">
        <h1>
          <span className="header-icon">🎬</span>
          Nuestra Cartelera
        </h1>
        <p className="header-subtitle">
          Descubre las mejores películas en cartelera y próximos estrenos
        </p>
      </header>

      <Tabs activeTab={activeTab} onTabChange={setActiveTab} counts={counts} />

      {filteredMovies.length === 0 ? (
        <div className="empty-state">
          <span className="empty-icon">🎭</span>
          <h2>No hay películas aquí</h2>
          <p>
            {activeTab === 'Quiero-verla'
              ? 'Selecciona películas a estrenarse que te interesen para recibir notificaciones y ofertas exclusivas'
              : 'No hay películas disponibles en esta sección'}
          </p>
        </div>
      ) : (
        <div className="movies-grid">
          {filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              showWantToWatchButton={
                activeTab === 'Proximamente' && !wantToWatch.includes(movie.id)
              }
              showRemoveButton={activeTab === 'Quiero-verla'}
              onWantToWatch={addToWantToWatch}
              onRemove={removeFromWantToWatch}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Movies;