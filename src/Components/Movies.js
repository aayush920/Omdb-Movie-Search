import React, { useState } from "react";
import Movie from './Movie'

const Movies = (props) => {
  // use "strict";
  const API = "872e9409";
  const [movs, setMovs] = useState([]);
  if (props.clicked) {
    function generateError(message) {
      alert(`${message}`);
    }
    async function getMovie(search) {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${API}&s=${search}`
      );
      const data = response.json();
      return data;
    }

    const data = getMovie(props.title);
    data.then(function (details) {
      if (details.Response === "False") {
        generateError(details.Error);
        return;
      }
      setMovs(details.Search);
    });
  }
  return (
    <div className="movie-list">
      {movs.map((movie) => (
        <Movie key={movie.imdbID} src={movie.Poster} Title={movie.Title}/>
      ))}
    </div>
  );
};
export default Movies;
