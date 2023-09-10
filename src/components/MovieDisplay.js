import { useState } from "react";
import MovieDescription from "./MovieDescription";
import { error } from "../App.js";

export default function MovieDisplay({ movie }) {
  const [desc, setDesc] = useState(false);

  function handleClick() {
    setDesc(!desc);
  }

  // const loading = () => "You have entered an invalid film name!";
  const loading = () => error("Invalid film name");
  const loaded = () => (
    <div onClick={handleClick} id="movie">
      <h2 id="title">{movie.Title}</h2>
      <img src={movie.Poster} alt={movie.Title} />
      {desc && <MovieDescription movie={movie} />}
    </div>
  );

  if (movie === null) {
    return null;
  }

  return movie && movie.Title ? loaded() : loading();
}
