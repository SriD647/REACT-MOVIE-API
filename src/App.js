import { useEffect, useState } from "react";
import Form from "./components/Form";
import MovieDisplay from "./components/MovieDisplay";
import MovieList from "./components/MovieList";
import "./styles.css";
import SearchForm from "./components/SearchForm";

export function error(string) {
  return `${string}`;
}

export default function App() {
  const apiKey = "98e3fb1f";

  const [movie, setMovie] = useState(null);
  const [movies, setMovies] = useState([]);

  const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      const data = await response.json();
      setMovie(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getMovies = async (searchTerm) => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`
      );
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error(error);
    }
  };

  const reloadPage = () => {
    window.location.reload();
  };

  useEffect(() => {
    // getMovie("borat");
    getMovies("Batman");
  }, []);

  return (
    <div className="App">
      <h1 id="header" onClick={reloadPage}>Welcome to Search-A-Film!</h1>
      <nav className="search-container">
        <Form getMovie={getMovie} />
        <SearchForm getMovies={getMovies} />
      </nav>{" "}
      <h2>{error("")} </h2>
      <br />
      <div className="movie-container">
        <MovieDisplay movie={movie} />
        <MovieList movies={movies} />
      </div>
    </div>
  );
}
