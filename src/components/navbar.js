import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Navbar, Nav, Button, Modal } from 'react-bootstrap';
import { MdOutlineFoodBank } from 'react-icons/md';
import { NavbarC } from './container';

export const NavbarS = () => {
  const [logged, setLogged] = useState(false);
  const [showError, setShowError] = useState(true);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const logout = () => localStorage.clear();

  const FoodBank = styled(MdOutlineFoodBank)`
    margin: 0rem 1rem 0rem 0rem;
    padding: 0rem;
    font-size: 2.5rem;
  `;

  const ButtonSair = styled.button`
    background-color: #2b222c !important;
    color: #f2d974;
    border: none;
  `;
  
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
