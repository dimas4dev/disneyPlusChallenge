import { useEffect, useState } from 'react';
import { MovieCard } from '../components/core/MovieCard';
import { ResponsiveContainer } from '../components/core/Container';

import { API_KEY, API_URL } from '../config/index.mts';

export const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const url = `${API_URL}3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${API_KEY}`
            }
        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => {
                setMovies(json.results);
            })
            .catch(err => console.error('error:' + err));
    }, []);

    return (
        <ResponsiveContainer>
            {movies.map((movie: { id: number; title: string; release_date: string; overview: string; poster_path: string }) => (
                <MovieCard
                    key={movie.id}
                    title={movie.title}
                    releaseDate={movie.release_date}
                    overview={movie.overview}
                    posterPath={movie.poster_path}
                    id={movie.id}
                />
            ))}
        </ResponsiveContainer>
    );
};
