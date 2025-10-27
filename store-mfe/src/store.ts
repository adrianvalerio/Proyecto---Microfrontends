import { create } from 'zustand'

interface CinemaStore {
  favoriteMovies: string[]
  addFavorite: (movie: string) => void
  removeFavorite: (movie: string) => void
}

export const useCinemaStore = create<CinemaStore>((set) => ({
  favoriteMovies: [],
  addFavorite: (movie) =>
    set((state) => ({ favoriteMovies: [...state.favoriteMovies, movie] })),
  removeFavorite: (movie) =>
    set((state) => ({
      favoriteMovies: state.favoriteMovies.filter((m) => m !== movie)
    }))
}))
