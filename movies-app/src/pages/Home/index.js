import React, { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import api from '../../services/api';

import { Container, InputContainer, IllustrationContainer } from './styles';

import illustration from '../../assets/2.Illustrations/illustration-empty-state.png';

export default function Home() {
  const [movies, setMovies] = useState(null);

  const handleInputChange = async e => {
    if(e.target.value === "") {
      setMovies(null);
      return;
    }

    const response = await api.get(`?apikey=37f7e7fd&s=${e.target.value}`);
    setMovies(response.data);
    console.log(response.data);
  }

  return (
    <Container>
      <InputContainer>
        <IoIosSearch size={25} />
        <input placeholder="Search movies..." onChange={e => handleInputChange(e)} />
      </InputContainer>

      {movies === null ?
        <IllustrationContainer>
          <img src={illustration} alt="illustration" />
          <span>Don't know what to search?</span>
          <span>Here's an offer you can't refuse</span>
        </IllustrationContainer> :

        <h1>OK</h1>
      }
    </Container>
  );
}