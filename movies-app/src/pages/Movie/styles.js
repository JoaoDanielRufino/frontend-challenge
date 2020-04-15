import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 6%;

  img.back-arrow {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2%;

  img {
    max-width: 500px;
    width: 100%;
    height: 100%;
    max-height: 600px;
    border-radius: 1%;
  }
`;

export const Infos = styled.div`
  padding-right: 10px;

  span {
    color: #71838E;
    font-size: 20px;
  }

  p {
    padding-top: 20px;
    color: #fff;
    font-size: 65px;
  }
`;

export const Ratings = styled.div`
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
  background: ${props => props.isFavourite ? '#FF4040' : 'none'};

  img {
    height: 15px;
    width: auto;
  }

  span {
    font-size: 14px;
    padding-left: 5px;
    color: ${props => props.isFavourite ? '#FFD1CF' : '#71838E'};
  }
`;

export const PlotContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  width: 60%;
  
  span {
    font-size: 14px;
  }
  
  p {
    line-height: 150%;
    color: #B7B8B9;
    font-size: 14px;
  }
`;

export const MovieInfos = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin-top: 50px;
  
  span {
    font-size: 14px;
  }
  
  p {
    line-height: 50%;
    color: #B7B8B9;
    font-size: 14px;
  }
`;
