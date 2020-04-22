import styled from 'styled-components';

export const Container = styled.ul`
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