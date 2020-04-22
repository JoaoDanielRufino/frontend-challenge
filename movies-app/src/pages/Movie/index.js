import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import api from '../../services/api';

import {
  Container,
  InfoContainer,
  Infos,
  PlotContainer
} from './styles';

import Ratings from '../../components/Ratings';
import MovieInfos from '../../components/MovieInfos';

import arrow from '../../assets/1.Icons/icon-arrow-grey.svg';

export default function Movie() {
  const [movie, setMovie] = useState(null);
  const history = useHistory();
  const { imdbID } = useParams();

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`?apikey=37f7e7fd&i=${imdbID}`);
      const data = response.data;
      console.log(data);
      setMovie(data);
    }

    fetchMovie();
  }, [imdbID]);

  return (
    <Container>
      <img className="back-arrow" src={arrow} alt="arrow" onClick={() => history.goBack()} />

      {movie &&
        <InfoContainer>
          <Infos>
            <span>{movie.Runtime} - {movie.Year} - {movie.Rated}</span>
            <p>{movie.Title}</p>

            <Ratings movie={movie} />

            <PlotContainer>
              <span>Plot</span>
              <p>{movie.Plot}</p>
            </PlotContainer>

            <MovieInfos movie={movie} />
          </Infos>

          <img src={movie.Poster} alt="poster" />
        </InfoContainer>
      }
    </Container>
  );
}