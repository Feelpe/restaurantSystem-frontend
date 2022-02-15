import styled from 'styled-components';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavbarC = styled(Navbar)`
  background-color: #c22557;
  font-weight: 600;

  button{
    box-shadow: 2px 2px 0.3em black;
  }
`;

export const NavbarS = () => {
  return (
    <NavbarC expand="lg">
      <Container>
        <Navbar.Brand href="/">Restaurante</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/login">Entre</Nav.Link>
            <Nav.Link href="/register">Cadastre-se</Nav.Link>
            <Nav.Link href="/profile">Usuário</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </NavbarC>
  );
};
