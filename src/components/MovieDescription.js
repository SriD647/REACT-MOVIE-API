import { useState, useEffect } from "react";
import MovieDisplay from "./MovieDisplay";

export default function MovieDescription({ movie }) {
  const apiKey = "98e3fb1f";
  const [item, setItem] = useState(movie);
  const getMovie = async () => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&i=${movie.imdbID}`
      );
      const data = await response.json();
      setItem(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="description">
      <nav style={{ textAlign: "left" }}>
        <p>
          <strong>Title:</strong> <i>{movie.Title}</i>
        </p>
        <p>
          <strong>Type:</strong> <i>{movie.Type}</i>
        </p>
        <p>
          <strong>Year:</strong> <i>{movie.Year}</i>
        </p>
        <p>
          <strong>Plot:</strong> <i>{item.Plot}</i>
        </p>
        <p>
          <strong>Director:</strong> <i>{item.Director}</i>
        </p>
        <p>
          {" "}
          <strong>Actors:</strong> <i>{item.Actors} </i>
        </p>

        <p>
          {" "}
          <strong>IMDb Rating:</strong> <i>{item.imdbRating}</i>
        </p>
      </nav>
    </div>
  );
}
