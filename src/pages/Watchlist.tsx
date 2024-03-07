import { useStore } from "../StatusHandlers/ZustandHandler.mts"

import { MovieCard } from '../components/core/MovieCard';
import { ResponsiveContainer } from '../components/core/Container';


export const Watchlist = () => {

    const { favorites } = useStore();

    return (
        <ResponsiveContainer>
            {favorites.map(
                (movie) => (
                    <MovieCard
                        key={movie.id}
                        title={movie.title}
                        releaseDate={movie.releaseDate}
                        overview={movie.overview}
                        posterPath={movie.posterPath}
                        id={movie.id}
                    />
                )
            )}
        </ResponsiveContainer>
    )
}