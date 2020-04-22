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

