import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { BiEdit } from 'react-icons/bi';

const ButtonS = styled(Button)`
  background-color: #fff;
  border: none;
  margin: 0rem 0.25rem 0rem 0rem;
  padding: 0rem;

  a{
    text-decoration: none;
  }

  :hover{
    background-color: #fff;
  }
`;

const BiEditS = styled(BiEdit)`
  color: #c7956d;
  font-size: 2rem;

  :hover{
    transform: scale(1.1);
    color: #f2d974;
  }
`;

export const ButtonE = () => {
  return (
    <ButtonS>
      <a href='/update'>
        <BiEditS />
      </a>
    </ButtonS>
  )
}