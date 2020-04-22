import React, { useState, useEffect } from 'react';

import { Container, RatingBox, AddFavourites } from './styles';

import imdb from '../../assets/2.Logos/logo-imdb.svg';
import tomato from '../../assets/2.Logos/logo-rotten-tomatoes.svg';
import heart from '../../assets/1.Icons/icon-heart-grey.svg';
import heartFull from '../../assets/1.Icons/icon-heart-full.svg';

export default function Ratings({ movie }) {
  const [isFavourite, setIsFavourite] = useState(false);
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    if(movie.Ratings[0] !== undefined && movie.Ratings[1] !== undefined) {
      setRatings([movie.Ratings[0].Value, movie.Ratings[1].Value]);
    }
    else {
      setRatings(['?', '?']);
    }
  }, [movie]);

  const handleAddFavouritesClick = () => {
    setIsFavourite(!isFavourite);
  }

  return (
    <Container>
      <RatingBox>
        <div className="imdb"><img src={imdb} alt="imdb" /></div>
        <span>{ratings[0]}</span>
      </RatingBox>
      <RatingBox>
        <div className="tomato"><img src={tomato} alt="logo" /></div>
        <span>{ratings[1]}</span>
      </RatingBox>
      <AddFavourites isFavourite={isFavourite} onClick={handleAddFavouritesClick}>
        <img src={isFavourite ? heartFull : heart} alt="heart" />
        <span>{isFavourite ? "Added" : "Add to favourites"}</span>
      </AddFavourites>
    </Container>
  );
}