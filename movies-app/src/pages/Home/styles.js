import styled from 'styled-components';

export const Container = styled.div`
  margin: 0% 6%;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  height: 45px;
  border: 1px solid #ddd;
  border-radius: 3px;
  background-color: #fff;

  input {
    border: none;
    width: 100%;
    font-size: 18px;
    padding-left: 10px;
  }
`;

export const IllustrationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 18%;

  span {
    color: #fff;
    padding-bottom: 5px;
    font-size: 16px;
  }
`;

export const MovieList = styled.ul`
  display: grid;
  row-gap: 1em;
  grid-column-gap: 2%;
  list-style: none;
  margin-top: 3%;

  @media (max-width: 699px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(6, 1fr);
  }

  li {
    position: relative;
    cursor: pointer;

    &:hover .img {
      opacity: 0.3;
    }

    &:hover .info {
      opacity: 1;
    }

    img {
      width: 100%;
      max-width: 190px;
      height: 100%;
      max-height: 240px;
      border-radius: 3px;
      transition: 0.5s;
      opacity: 1;
    }

    div {
      position: absolute;
      top: 75%;
      left: 50%;
      width: 80%;
      transform: translate(-50%, -50%);
      opacity: 0;
      transition: 0.5s;

      p {
        color: #ddd;
        font-size: 20px;
      }
    }
  }
`;