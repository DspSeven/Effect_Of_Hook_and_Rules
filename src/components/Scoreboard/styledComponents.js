import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const ScoreText = styled.p`
  color: #2e3e4e;
  font-size: 80px;
  font-family: 'Roboto';
  margin-top: 0px;
  margin-bottom: 30px;
  @media screen and (min-width: 576px) {
    font-size: 100px;
  }
`

export const ButtonsContainer = styled.div``

export const Button = styled.button`
  color: #ffffff;
  background-color: #7c69e9;
  font-size: 14px;
  font-weight: 400;
  font-family: 'Roboto';
  border: none;
  border-radius: 4px;
  margin: 6px;
  padding: 8px 12px 8px 12px;
  cursor: pointer;
  outline: none;

  @media screen and (min-width: 576px) {
    font-size: 18px;
    margin: 10px;
    padding: 8px 18px 8px 18px;
  }
`
