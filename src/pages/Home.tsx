import { useEffect, useState } from 'react';
import { MovieCard } from '../components/core/MovieCard';
import ResponsiveContainer from '../components/core/Container';

export const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTgzOWJiMDA5NTE2MTYzNmI1ZmRiMjU0YzlmNGU4NCIsInN1YiI6IjY1ZTg5OTlmY2FhYjZkMDE2Mjk1YTE5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YQcGiFn3wnWGzBD5eRZaHgsQiZJfMDssvzlrzpcFBFs'
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
            {movies.map(movie => (
                <MovieCard
                    key={movie.id}
                    title={movie.title}
                    releaseDate={movie.release_date}
                    overview={movie.overview}
                    posterPath={movie.poster_path}
                />
            ))}
        </ResponsiveContainer>

    );
};
