import React from 'react';

interface MovieCardProps {
    title: string;
    year: string;
    description: string;
}

export const MovieCard: React.FC<MovieCardProps> = ({ title, year, description }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                    {year}
                </p>
                <p className="text-gray-700 text-base">
                    {description}
                </p>
            </div>
        </div>
    );
};
