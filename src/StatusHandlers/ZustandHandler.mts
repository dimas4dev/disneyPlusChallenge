import { create } from 'zustand';
import { ChangeEvent } from 'react';

interface Movie {
    id: number;
    title: string;
    releaseDate: string;
    overview: string;
    posterPath: string;
}

interface StoreState {
    favorites: Movie[];
    search: string;
    addFavorite: (movie: Movie) => void;
    removeFavorite: (movieId: number) => void;
    setSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const useStore = create<StoreState>((set) => ({
    favorites: [],
    search: '',
    addFavorite: (movie) => set((state) => ({
        favorites: state.favorites.some((fav) => fav.id === movie.id) ? state.favorites : [...state.favorites, movie]
    })),
    removeFavorite: (movieId) => set((state) => ({
        favorites: state.favorites.filter((movie) => movie.id !== movieId)
    })),
    setSearch: (event) => set((state) => ({ ...state, search: event.target.value })),
}));
