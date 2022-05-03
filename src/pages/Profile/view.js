import axios from 'axios';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { 
  ContainerStart, 
  ContainerColumn, 
  Section
} from '../../components/CardContainer';
import { CardTitle, Title } from '../../components/Card';
import { Trash, Edit, ButtonW, ButtonD, NavButton } from '../../components/Button';

const Paragrath = styled.p`
  font-size: xx-large;
  padding: 2rem;
  margin: 1rem 1rem 1rem 3rem;
`;

export const Profile = () => {
  const [user, setUser] = useState({});
  const [logged, setLogged] = useState(false);
  const [showError, setShowError] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios.get('/auth', config).then((response) => {
      setLogged(true);
      setUser(response.data);
    });
  }, [logged]);

  return (
    <Section>
      {logged && (
        <ContainerColumn>
          <CardTitle>
            <Title>Conta</Title>
            <NavButton>
              <a href='/update'>
                <Edit />
              </a>
              <ButtonW onClick={handleShow}>
                <Trash />
              </ButtonW>
            </NavButton>
          </CardTitle>
          <ContainerStart>
            <h2>{`${user.firstName} ${user.lastName}`}</h2>
            <span>{user.createdAt}</span>
          </ContainerStart>
        </ContainerColumn>
      )}
      {showError && (
        <Alert variant="danger">
          <Alert.Heading>Faça login!</Alert.Heading>
        </Alert>
      )}
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Deletar Conta?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Paragrath>Tem Certeza que deseja deletar a conta?</Paragrath>
        </Modal.Body>
        <Modal.Footer>
          <NavButton>
            <ButtonD variant="danger">
              <a href='/delete'>
                Deletar
              </a>
            </ButtonD>
          </NavButton>
        </Modal.Footer>
      </Modal>
    </Section>
  );
};
