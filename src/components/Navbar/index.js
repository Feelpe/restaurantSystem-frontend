import styled from 'styled-components';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { MdOutlineFoodBank } from 'react-icons/md';

const NavbarC = styled(Navbar)`
  background-color: #2b222c;
  font-weight: 600;

  button{
    background-color: #965d62;
    border: #5e435250;
    margin: 0.5rem;

    :hover{
      background-color: #c7956d;
    }
  }
`;

const ContainerS = styled(Container)`
  align-items: center;

  a {
    color: #f2d974;
    margin: 0.35rem;
    text-decoration: none;
  }
`;

const MdOutlineFoodBankS = styled(MdOutlineFoodBank)`
  margin: 0rem 1rem 0rem 0rem;
  padding: 0rem;
  font-size: 2.5rem;
`;

export const NavbarS = () => {
  return (
    <NavbarC expand="lg">
      <ContainerS>
          <a href="/"><MdOutlineFoodBankS /></a>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <a href="/profile">Usuário</a>
              <a href="/login">Entre</a>
              <a href="/register">Cadastre-se</a>
            </Nav>
          </Navbar.Collapse>
      </ContainerS>
    </NavbarC>
  );
};
