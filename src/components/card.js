import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export const CardS = styled(Card)`
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
  width: 30vh;
  height: 28vh;
  background-color: #965d62;
  color: #f2d974;
  border: solid;
  border-radius: 1rem;
  box-shadow: 2px 2px 0.5em #00000090;
  overflow: hidden;
  
  img {
    border-radius: 0.7rem;
    width: 29vh;
    height: 27vh;
    :hover {
      transition: all linear 0.4s;
      transform: scale(1.1)
    }
  }
`;

export const CardIcon = styled(Card)`
  max-width: 25vh;
  width: auto;
  height: 20vh;
  border: none;
  overflow: hidden;
  
  img {
    border-radius: 1rem;
    max-width: 25vh;
    width: auto;
  }
`;

export const CardL = styled(Card)`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
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

export const CardTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  height: 4rem;
  padding: 1rem;
  margin: 0.5rem;
  box-shadow: 0.2rem 0.2rem 2mm #00000030;
  border-radius: 0.7rem;
`;

export const Title = styled.h2`
  padding: 2rem 0;
  color: #2b222c;
`;
