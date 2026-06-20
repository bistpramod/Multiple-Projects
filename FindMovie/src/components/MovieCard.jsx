import React from "react";
import "../css/MoviesCard.css";
import { useMovieContext } from "../contexts/MovieContext";
import { Form } from "react-router-dom";
// import {useMovieContext} from "../contexts/MovieContext" // duplicate import commented out

const MovieCard = ({ movie }) => {
  // Correct context API names:
  // const { favorites, isfavorites, addToFavorites, removeFromFavorites } = useMovieContext();
  const { favorites, isFavorite, addToFavorites, removeFavourites } =
    useMovieContext();
  const favorite = isFavorite(movie.id);

  function onFavouriteClick(e) {
    e.preventDefault();
    if (favorite) removeFavourites(movie.id);
    else addToFavorites(movie);
  }

  return (
    <>
      <div className="movie-card">
        <div className="movie-poster">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="movie-overlay">
            <button
              className={`favourite-btn ${favorite ? "active" : ""}`}
              onClick={onFavouriteClick}
            >
              ❤️
            </button>
          </div>
        </div>
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>{movie.release_date?.split("-")[0]}</p>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
