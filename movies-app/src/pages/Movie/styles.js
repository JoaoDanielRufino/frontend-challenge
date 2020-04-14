import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 6%;

  img {
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
    max-height: 660px;
    border-radius: 1%;
  }
`;

export const Infos = styled.div`
  span {
    color: #fff;
    font-size: 60px;
  }
`;