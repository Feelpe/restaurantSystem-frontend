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
  box-shadow: 2px 2px 0.3em #00000050;

  img {
    border-radius: 0.2rem;
    transform: scale(1.1)
  }
`;
