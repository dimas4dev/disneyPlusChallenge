import { useEffect, useState } from 'react';

import { useStore } from '../StatusHandlers/ZustandHandler.mts';

import { MovieCard } from '../components/core/MovieCard';
import { ResponsiveContainer } from '../components/core/Container';

import { API_KEY, API_URL } from '../config/index.mts';

export const Home = () => {
    const [movies, setMovies] = useState([]);
    const { search } = useStore();

    useEffect(() => {
        const fetchMovies = async () => {
            const url = `${API_URL}3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${API_KEY}`
                }
            };

            try {
                const res = await fetch(url, options);
                const json = await res.json();
                const filteredMovies = search ?
                    json.results.filter((movie: { title: string }) => movie.title.toLowerCase().includes(search.toLowerCase())) :
                    json.results;
                setMovies(filteredMovies);
            } catch (err) {
                console.error('error:', err);
            }
        };

        fetchMovies();
    }, [search]);



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
