declare module 'store_mfe/store' {
  interface Movie {
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

  export const useCinemaStore: {
    <T>(selector: (state: CinemaStore) => T): T;
    (): CinemaStore;
    getState: () => CinemaStore;
    setState: (state: Partial<CinemaStore>) => void;
  };
}