import { create } from 'zustand';

export interface Movie {
  id: string;
  title: string;
  releaseDate: string;
  genre: string;
  status: 'Cartelera' | 'Proximamente' | 'Quiero-verla';
  imageUrl?: string;
}

interface CinemaStore {
  movies: Movie[];
  favoriteMovies: string[];
  wantToWatch: string[];
  addFavorite: (movie: string) => void;
  removeFavorite: (movie: string) => void;
  addToWantToWatch: (movieId: string) => void;
  removeFromWantToWatch: (movieId: string) => void;
}

export const useCinemaStore = create<CinemaStore>((set) => ({
  movies: [],
  favoriteMovies: [],
  wantToWatch: [],
  
  addFavorite: (movie) =>
    set((state) => ({ 
      favoriteMovies: [...state.favoriteMovies, movie] 
    })),
  
  removeFavorite: (movie) =>
    set((state) => ({
      favoriteMovies: state.favoriteMovies.filter((m) => m !== movie),
    })),
  
  addToWantToWatch: (movieId) =>
    set((state) => ({
      wantToWatch: [...state.wantToWatch, movieId],
    })),
  
  removeFromWantToWatch: (movieId) =>
    set((state) => ({
      wantToWatch: state.wantToWatch.filter((id) => id !== movieId),
    })),
}));