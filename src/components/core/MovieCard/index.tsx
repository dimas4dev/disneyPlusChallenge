import React from 'react';
import { useStore } from "../../../StatusHandlers/ZustandHandler.mjs";

interface MovieCardProps {
    title: string;
    releaseDate: string;
    overview: string;
    posterPath: string;
    id: number;
}

export const MovieCard: React.FC<MovieCardProps> = ({ id, title, releaseDate, overview, posterPath }) => {

    const { addFavorite, removeFavorite, favorites } = useStore();
    const isFavorite = favorites.some(favMovie => favMovie.id === id);

    const toggleFavorite = () => {
        if (isFavorite) {
            removeFavorite(id);
        } else {
            addFavorite({ id, title, releaseDate, overview, posterPath });
        }
    };


    return (
        <div className="relative max-w-xs rounded overflow-hidden shadow-lg bg-white m-2">
            <div className="absolute top-2 right-2">
                <svg
                    onClick={toggleFavorite}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 cursor-pointer`}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill={isFavorite ? "red" : "none"}
                >
                    {isFavorite ? (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.485l-7.682-7.682a4.5 4.5 0 010-6.364z"
                            fill='red'
                        />
                    ) : (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={`M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.485l-7.682-7.682a4.5 4.5 0 010-6.364z`}
                        />
                    )}
                </svg>
            </div>
            <img src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt={title} className="w-full h-auto" />
            <div className="px-4 py-2">
                <div className="font-bold text-lg mb-2">{title}</div>
                <p className="text-gray-600 text-sm">
                    {new Date(releaseDate).getFullYear()}
                </p>
                {/*
                <p className="text-gray-600 text-sm">
                    {overview}
                </p>
                */}
            </div>
        </div>
    );
};


