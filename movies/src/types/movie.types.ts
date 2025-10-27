export interface Movie {
  id: string;
  title: string;
  releaseDate: string;
  genre: string;
  status: 'Cartelera' | 'Proximamente' | 'Quiero-verla';
  imageUrl?: string;
}

export type MovieStatus = 'Cartelera' | 'Proximamente' | 'Quiero-verla';