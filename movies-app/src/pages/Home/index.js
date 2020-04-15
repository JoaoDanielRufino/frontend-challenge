import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IoIosSearch } from 'react-icons/io';
import api from '../../services/api';

import { Container, InputContainer, IllustrationContainer, MovieList } from './styles';

import illustration from '../../assets/2.Illustrations/illustration-empty-state.png';

export default function Home() {
  const [title, setTitle] = useState('');
  const [movies, setMovies] = useState(null);
  const history = useHistory();
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
    myTimeout = setTimeout(handleInputChange, 1000);
  }

  const deleteTimeout = () => {
    clearTimeout(myTimeout);
  }

  const handleImageClick = movie => {
    history.push(`/movie/${movie.imdbID}`);
  }

  return (
    <Container>
      <InputContainer>
        <IoIosSearch size={25} />
        <input
          value={title}
          placeholder="Search movies..."
          onKeyUp={() => createTimeout()}
          onKeyDown={() => deleteTimeout()}
          onChange={e => setTitle(e.target.value)}
        />
      </InputContainer>

      {movies === null ?
        <IllustrationContainer>
          <img src={illustration} alt="illustration" />
          <span>Don't know what to search?</span>
          <span>Here's an offer you can't refuse</span>
        </IllustrationContainer> :

        <MovieList>
          {movies.map(movie => (
            <li key={movie.imdbID} onClick={() => handleImageClick(movie)}>
              <img className="img" src={movie.Poster} alt="poster" />
              <div className="info">
                <p>{movie.Title}</p>
                <p>{movie.Year}</p>
              </div>
            </li>
          ))}
        </MovieList>
      }
    </Container>
  );
}