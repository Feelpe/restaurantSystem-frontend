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

const ContainerS = styled(Container)`
  color: #f2d974;
`; 

export const NavbarS = () => {
  return (
    <NavbarC expand="lg">
      <ContainerS>
          <Navbar.Brand style="color: #f2d974" href="/">Restaurante</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/profile">Usuário</Nav.Link>
              <Nav.Link href="/login">Entre</Nav.Link>
              <Nav.Link href="/register">Cadastre-se</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </ContainerS>
    </NavbarC>
  );
};
