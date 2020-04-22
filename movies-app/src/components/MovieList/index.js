import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

export default function MovieList({ movies }) {
  const history = useHistory();

  const handleImageClick = movie => {
    history.push(`/movie/${movie.imdbID}`);
  }

  return (
    <Container>
      {movies.map(movie => (
        <li key={movie.imdbID} onClick={() => handleImageClick(movie)}>
          <img className="img" src={movie.Poster} alt="poster" />
          <div className="info">
            <p>{movie.Title}</p>
            <p>{movie.Year}</p>
          </div>
        </li>
      ))}
    </Container>
  );
}