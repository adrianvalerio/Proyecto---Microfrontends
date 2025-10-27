declare module 'store_mfe/store' {
  import { UseBoundStore } from 'zustand';
  import { StoreApi } from 'zustand';

  interface CinemaStore {
    favoriteMovies: string[];
    addFavorite: (movie: string) => void;
    removeFavorite: (movie: string) => void;
  }

  const useCinemaStore: UseBoundStore<StoreApi<CinemaStore>>;
  export { useCinemaStore };
}
