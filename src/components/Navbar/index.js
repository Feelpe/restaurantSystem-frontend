import styled from 'styled-components';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavbarC = styled(Navbar)`
  background-color: #2b222c;
  font-weight: 600;
  color: #f2d974;

  button{
    box-shadow: 2px 2px 0.3em black;
  }
`;

const NavbarT = styled(Navbar)`
  color: #f2d974;
`;

const NavS = styled(Nav)`
  color: #f2d974;
`;

export const NavbarS = () => {
  return (
    <NavbarC expand="lg">
      <Container>
          <NavbarT.Brand href="/">Restaurante</NavbarT.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <NavS className="me-auto">
              <Nav.Link href="/login">Entre</Nav.Link>
              <Nav.Link href="/register">Cadastre-se</Nav.Link>
              <Nav.Link href="/profile">Usuário</Nav.Link>
            </NavS>
          </Navbar.Collapse>
      </Container>
    </NavbarC>
  );
};
