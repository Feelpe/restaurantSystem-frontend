import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export const CardS = styled(Card)`
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
  width: 16rem;
  height: 10rem;
  background-color: #965d62;
  color: #f2d974;
  border: none;
  border-radius: 1rem;
  box-shadow: 2px 2px 0.5em #00000090;
  overflow: hidden;
  
  img {
    border-radius: 0.7rem;
    width: 15rem;
    height: 9rem;
    :hover {
      transition: all linear 0.4s;
      transform: scale(1.1)
    }
  }
`;

export const CardL = styled(Card)`
  display: flex;
  align-items: flex-start;
  width: auto;
  padding: 1rem;
  margin: 0.5rem;
  flex-wrap: wrap;
  flex-direction: row;
  border-radius: 0.7rem;
  box-shadow: 0rem 0rem 2mm #00000030;

  p{
    width: 13rem;
    margin: 0.2rem;
    padding: 0rem;
  }
`;