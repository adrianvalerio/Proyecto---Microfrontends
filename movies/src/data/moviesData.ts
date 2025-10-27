import { Movie } from '../types/movie.types';

export const moviesData: Movie[] = [
  // EN CARTELERA
  {
    id: 'movie-1',
    title: 'Minecraft: La pelicula',
    releaseDate: '2025-01-15',
    genre: 'Comedia',
    status: 'Cartelera',
    imageUrl: 'http://localhost:3003/assets/images/minecraft-movie.webp',
  },
  {
    id: 'movie-2',
    title: 'Sinners',
    releaseDate: '2025-02-20',
    genre: 'Acción - Drama',
    status: 'Cartelera',
    imageUrl: 'http://localhost:3003/assets/images/sinners.jpg',
  },
  {
    id: 'movie-3',
    title: 'Superman',
    releaseDate: '2025-03-10',
    genre: 'Acción - Comedia',
    status: 'Cartelera',
    imageUrl: 'http://localhost:3003/assets/images/Superman.jpeg',
  },

  // PROXIMAMENTE
  {
    id: 'movie-4',
    title: 'Batman: parte II',
    releaseDate: '2025-12-01',
    genre: 'Superheroes',
    status: 'Proximamente',
    imageUrl: 'http://localhost:3003/assets/images/Batman.webp',
  },
  {
    id: 'movie-5',
    title: 'The Long Walk',
    releaseDate: '2025-11-15',
    genre: 'Suspenso',
    status: 'Proximamente',
    imageUrl: 'http://localhost:3003/assets/images/the-long-walk.avif',
  },
  {
    id: 'movie-6',
    title: 'F1',
    releaseDate: '2025-12-25',
    genre: 'Acción',
    status: 'Proximamente',
    imageUrl: 'http://localhost:3003/assets/images/f1-poster.jpg',
  },
];