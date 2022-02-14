import { Navbar, Container, Nav } from 'react-bootstrap';

export const NavbarS = () => {
  return (
    <Navbar bg="light" expand="lg">
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
    </Navbar>
  );
};
