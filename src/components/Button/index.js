import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const ButtonS = styled(Button)`
  background-color: #965d62;
  border: #5e435250;
  margin: 0.2rem;

  :hover{
    background-color: #c7956d;
    transform: scale(1.1)
  }

  .btn-primary {
    background-color: #c7956d;
    border-color: #f2d974;
  }
`;
