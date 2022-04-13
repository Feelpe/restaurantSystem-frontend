import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { BiEdit } from 'react-icons/bi';
import { GoTrashcan } from 'react-icons/go';

export const BiEditS = styled(BiEdit)`
  color: #c7956d;
  font-size: 2rem;

  :hover{
    transform: scale(1.1);
    color: #f2d974;
  }
`;

export const GoTrashcanS = styled(GoTrashcan)`
  color: #700006;
  font-size: 2rem;

  :hover{
    transform: scale(1.1);
    color: #9a0e24;
  }
`;

export const ButtonW = styled.button`
  border: none;
  background-color: #fff;
  padding: 0rem;
  margin: 0rem;
`;

export const ButtonS = styled(Button)`
  background-color: #965d62;
  border: #5e435250;
  margin: 0.5rem;

  :hover{
    background-color: #c7956d;
    transform: scale(1.1)
  }
`;

export const DeleteArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
`;

export const ButtonD = styled(Button)`
  margin: 0.5rem 4rem 0.5rem 0.5rem;
  width: 8rem;
  height: 3rem;

  a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    font-size: large;
  }
`;