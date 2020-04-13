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