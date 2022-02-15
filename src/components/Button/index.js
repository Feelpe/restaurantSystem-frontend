import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const ButtonS = styled(Button)`
  background-color: #965d62;
  border: #5e435250;

  :hover{
    background-color: #c7956d;
    transform: scale(1.1)
  }

  :active{
    background-color: #c7956d;
    border-color: 5e435250;
    border-collapse: collapse;
  }
`;
