import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin-top: 20px;
`;

export const RatingBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #303A46;
  border-radius: 5px;

  div.imdb {
    padding: 7px;
    background: #FF9F1C;
    height: 100%;
  }

  div.tomato {
    padding: 7px;
    background: #FF4040;
    height: 100%;
  }

  span {
    color: #fff;
    font-size: 16px;
    padding: 7px;
  }
`;

export const AddFavourites = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #303A46;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  background: ${({ isFavourite }) => isFavourite ? '#FF4040' : 'none'};

  img {
    height: 15px;
    width: auto;
  }

  span {
    font-size: 14px;
    padding-left: 5px;
    color: ${({ isFavourite }) => isFavourite ? '#FFD1CF' : '#71838E'};
  }
`;
