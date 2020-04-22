import React, { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import api from '../../services/api';

import EmptyList from '../../components/EmptyList';
import MovieList from '../../components/MovieList';

import { Container, InputContainer } from './styles';

export default function Home() {
  const [title, setTitle] = useState('');
  const [movies, setMovies] = useState(null);
  let myTimeout;

  const handleInputChange = async () => {
    if (title === "") {
      setMovies(null);
      return;
    }

    console.log(title);
    const response = await api.get(`?apikey=37f7e7fd&s=${title}`);
    const data = response.data;

    console.log(data);

    if (data.Response === "False")
      return;

    setMovies(data.Search);
  }

  const createTimeout = () => { // Adicionando timeout para previnir muitas requisicoes a api
    myTimeout = setTimeout(handleInputChange, 500); // Pode utilizar debounce tbm
  }

  const deleteTimeout = () => {
    clearTimeout(myTimeout);
  }

  return (
    <Container>
      <InputContainer>
        <IoIosSearch size={25} />
        <input
          value={title}
          placeholder="Search movies..."
          onKeyUp={createTimeout}
          onKeyDown={deleteTimeout}
          onChange={e => setTitle(e.target.value)}
        />
      </InputContainer>

      {movies === null ?
        <EmptyList /> :

        <MovieList movies={movies} />
      }
    </Container>
  );
}