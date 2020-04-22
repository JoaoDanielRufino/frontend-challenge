import React from 'react';

import { Container } from './styles';

export default function MovieInfos({ movie }) {
  return (
    <Container>
      <div>
        <span>Cast</span>
        {movie.Actors.split(",").map(actor => <p key={actor}>{actor}</p>)}
      </div>
      <div>
        <span>Genre</span>
        {movie.Genre.split(",").map(genre => <p key={genre}>{genre}</p>)}
      </div>
      <div>
        <span>Director</span>
        {movie.Director.split(",").map(director => <p key={director}>{director}</p>)}
      </div>
    </Container>
  );
}