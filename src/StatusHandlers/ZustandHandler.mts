import { create } from 'zustand';

interface Movie {
    id: number;
    title: string;
    releaseDate: string;
    overview: string;
    posterPath: string;
}

interface MovieState {
    favorites: Movie[];
    addFavorite: (movie: Movie) => void;
    removeFavorite: (movieId: number) => void;
}

export const useStore = create<MovieState>((set) => ({
    favorites: [],
    addFavorite: (movie) => set((state) => {
        // Verificar si la película ya está en favoritos para evitar duplicados
        const isAlreadyFavorite = state.favorites.some((fav) => fav.id === movie.id);
        if (!isAlreadyFavorite) {
            return { favorites: [...state.favorites, movie] };
        }
        return state;
    }),
    removeFavorite: (movieId) => set((state) => {
        return { favorites: state.favorites.filter((movie) => movie.id !== movieId) };
    }),
}));
