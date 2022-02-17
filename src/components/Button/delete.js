import { GoTrashcan } from 'react-icons/go';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const ButtonS = styled(Button)`
  background-color: #fff;
  border: none;
  margin: 0rem 0rem 0rem 0.25rem;
  padding: 0rem;

  a{
    text-decoration: none;
  }

  :hover{
    background-color: #fff;
  }
`;

const GoTrashcanS = styled(GoTrashcan)`
  color: #700006;
  font-size: 2rem;

  :hover{
    transform: scale(1.1);
    color: #9a0e24;
  }
`;

export const ButtonD = () => {
  return (
    <ButtonS>
      <a href='/delete'>
        <GoTrashcanS />
      </a>
    </ButtonS>
  )
}

export const DeleteArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
`;
