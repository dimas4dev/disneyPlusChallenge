import React from 'react';

interface MovieCardProps {
    title: string;
    releaseDate: string;
    overview: string;
    posterPath: string;
}

export const MovieCard: React.FC<MovieCardProps> = ({ title, releaseDate, overview, posterPath }) => {
    return (
        <div className="max-w-xs rounded overflow-auto shadow-lg bg-white m-2">
            <img src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt={title} className="w-full h-auto" />
            <div className="px-4 py-2">
                <div className="font-bold text-lg mb-2">{title}</div>
                <p className="text-gray-600 text-sm">
                    {new Date(releaseDate).getFullYear()}
                </p>
                {/* <p className="text-gray-600 text-sm">
                    {overview}
                </p> */}
            </div>
        </div>
    );
};

