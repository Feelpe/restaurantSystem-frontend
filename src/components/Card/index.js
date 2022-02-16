import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export const CardS = styled(Card)`
  margin: 1rem;
  width: 17rem;
  background-color: #965d62;
  color: #f2d974;
  border: none;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 2px 2px 0.5em #00000090;

  img {
    border-radius: 0.7rem;

  }

  :hover {
      transition: transform 500ms;
      transform: scale(1.1)
    }
`;
