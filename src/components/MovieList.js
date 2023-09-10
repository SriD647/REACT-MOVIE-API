import MovieDisplay from "./MovieDisplay";
import { error } from "../App.js";

export default function MovieList({ movies }) {
  const loading = () => error("Invalid film name");
  const loaded = () => (
    <ul className="movie-list">
      {movies.Search.map((movie) => (
        <MovieDisplay key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );

  return !movies || !movies.Search || movies.length === 0
    ? loading()
    : loaded();
}
