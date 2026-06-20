import React from 'react'
import "../css/Favorites.css"
import { useMovieContext } from '../contexts/MovieContext'
import MovieCard from '../components/MovieCard'

const Favorites = () => {

  const {Favorites} = useMovieContext();
  if(Favorites){
    return 
    <div className='favorites'>  <h2>Your favorites</h2>
    <div className="movies-grid">
      {Favorites.map((movie)=>(
        <MovieCard movie={movie} key={movie.id}  />
      ))}
    </div>
    </div>
  }
  return (
     <div className='favorites-empty'>
        <h2>No Favourite Movies yet</h2>
        <p>Start adding movies to you favourites list and enkoy watching these witout any hesitation</p>
    </div>
  )
}

export default Favorites