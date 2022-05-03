import styled from 'styled-components';
import { Container, Row, Navbar } from 'react-bootstrap';

export const NavbarC = styled(Navbar)`
  background-color: #2b222c;
  font-weight: 600;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  
  button{
    background-color: #965d62;

    :hover{
      background-color: #c7956d;
    }
  }
`;

export const ContainerBar = styled(Container)`
  align-items: center;
  
  a {
    color: #f2d974;
    margin: 0.35rem;
    text-decoration: none;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5vh;
  flex-wrap: wrap;

  a {
    color: black;
    text-decoration: none;
  }
`;

export const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 120vh;
`;

export const ContainerStart = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: auto;
  height: 20rem;
  margin: 0.5rem;
  padding: 2rem;
  box-shadow: 0.2rem 0.2rem 2mm #00000030;
  border-radius: 1rem;
`;

export const Section = styled.section`
  display: flex;
  height: 90vh;
  justify-content: center;
  padding: 2.5rem;
`;

// Form
export const ContainerS = styled(Container)`
  width: 45rem;
  padding: 1rem;
`;
