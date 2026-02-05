import React from 'react'
import { Link } from 'react-router-dom';

export const NetflixMovies = () => {

  var movies = [
    { movieId: 1, movieName: "Dhurandhar"},
    { movieId: 2, movieName: "Border 2" },
    { movieId: 3, movieName: "Laalo" }
  ];
  return (
    <div style={{ textAlign: "center" }}>
      <h1>NetflixMovies</h1>
      {
        movies.map((movie) => {
          //return <li>{movie.movieName}</li>
          return <li>
            <Link to={`/watch/${movie.movieName}`}>{movie.movieName}</Link>
          </li>
        })
      }
    </div>
  );
};