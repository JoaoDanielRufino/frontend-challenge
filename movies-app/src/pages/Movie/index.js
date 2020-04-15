import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import api from '../../services/api';

import {
  Container,
  InfoContainer,
  Infos,
  Ratings,
  RatingBox,
  AddFavourites,
  PlotContainer,
  MovieInfos
} from './styles';

import arrow from '../../assets/1.Icons/icon-arrow-grey.svg';
import imdb from '../../assets/2.Logos/logo-imdb.svg';
import tomato from '../../assets/2.Logos/logo-rotten-tomatoes.svg';
import heart from '../../assets/1.Icons/icon-heart-grey.svg';
import heartFull from '../../assets/1.Icons/icon-heart-full.svg';

export default function Movie() {
  const [movie, setMovie] = useState(null);
  const [isFavourite, setIsFavourite] = useState(false);
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

  const handleAddFavouritesClick = () => {
    setIsFavourite(!isFavourite);
  }

  return (
    <Container>
      <img className="back-arrow" src={arrow} alt="arrow" onClick={() => history.goBack()} />

      {movie &&
        <InfoContainer>
          <Infos>
            <span>{movie.Runtime} - {movie.Year} - {movie.Rated}</span>
            <p>{movie.Title}</p>
            <Ratings>
              <RatingBox>
                <div className="imdb"><img src={imdb} alt="imdb" /></div>
                <span>{movie.Ratings[0].Value}</span>
              </RatingBox>
              <RatingBox>
                <div className="tomato"><img src={tomato} alt="logo" /></div>
                <span>{movie.Ratings[1].Value}</span>
              </RatingBox>
              <AddFavourites isFavourite={isFavourite} onClick={() => handleAddFavouritesClick()}>
                <img src={isFavourite ? heartFull : heart} alt="heart" />
                <span>{isFavourite ? "Added" : "Add to favourites"}</span>
              </AddFavourites>
            </Ratings>
            <PlotContainer>
              <span>Plot</span>
              <p>{movie.Plot}</p>
            </PlotContainer>
            <MovieInfos>
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
            </MovieInfos>
          </Infos>

          <img src={movie.Poster} alt="poster" />
        </InfoContainer>
      }
    </Container>
  );
}