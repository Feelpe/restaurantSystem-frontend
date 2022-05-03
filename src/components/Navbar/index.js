import { useEffect, useState } from 'react';
import { Navbar, Nav, Button, Modal } from 'react-bootstrap';
import { NavbarC, ContainerBar } from '../CardContainer';
import { FoodBank, ButtonSair } from '../Button';

export const NavbarS = () => {
  const [logged, setLogged] = useState(false);
  const [showError, setShowError] = useState(true);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const logout = () => localStorage.clear();
  
  useEffect(() => {
    const token = localStorage.token;

    if (!token) {
      setLogged(false);
      setShowError(true);
    }
    else {
      setLogged(true);
      setShowError(false);
    }
  }, []);

  return (
    <NavbarC expand="lg">
      <ContainerBar>
        <a href="/"><FoodBank /></a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {logged && (
              <>
                <a href="/profile">Usuário</a>
                <a href="/mesas">Mesa</a>
                <ButtonSair onClick={handleShow}>Sair</ButtonSair>
              </>
            )}
            {showError &&(
              <>
                <a href="/login">Entre</a>
                <a href="/register">Cadastre-se</a>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </ContainerBar>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Você esta saindo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Tem Certeza que deseja sair de sua conta?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={logout}>Sair da Conta</Button>
        </Modal.Footer>
      </Modal>
    </NavbarC>
  );
};
