import styled from 'styled-components';
import { Navbar, Container, Nav, Link } from 'react-bootstrap';

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

const LinkS = styled(Link)`
  color: #f2d974;
`;

export const NavbarS = () => {
  return (
    <NavbarC expand="lg">
      <Container>
          <NavbarT.Brand href="/">Restaurante</NavbarT.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.LinkS href="/login">Entre</Nav.LinkS>
              <Nav.LinkS href="/register">Cadastre-se</Nav.LinkS>
              <Nav.LinkS href="/profile">Usuário</Nav.LinkS>
            </Nav>
          </Navbar.Collapse>
      </Container>
    </NavbarC>
  );
};
