import { ContainerS, Section } from '../../components/ContainerForm';
import { PageTitle } from '../../components/PageTitle';
import { RowS } from '../../components/ContainerForm';
import { ButtonS } from '../../components/Button';
import { Form, Col, Alert } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const Update = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [user, setUser] = useState({});
  const [logged, setLogged] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedUser = {
      email,
      firstName,
      lastName,
    };

    const token = localStorage.token;

    if (!token) {
      setLogged(false);
      setShowError(true);
    }

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios
    .patch('/user', updatedUser, config)
    .then((response) => {
      console.log(response.message);
    })
    .catch((error) => {
      console.log(error.message);
    });
  };

  useEffect(() => {
    const token = localStorage.token;

    if (!token) {
      setLogged(false);
      setShowError(true);
    }

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios
      .get('/auth', config)
      .then((response) => {
        setLogged(true);
        setUser(response.data);
      });

  }, [logged]);

  return (
    <Section>
      {logged && (
        <ContainerS>
          <PageTitle>Editar Conta</PageTitle>
          <Form onSubmit={handleSubmit}>
            <RowS>
              <Form.Group as={Col}>
                <Form.Control 
                  type='email' 
                  placeholder={`${user.email}`}
                  onChange={(event) => setEmail(event.target.value)} 
                />
              </Form.Group>
            </RowS>

            <RowS>
              <Form.Group as={Col}>
                <Form.Control
                  type="text"
                  placeholder={`${user.firstName}`}
                  onChange={(event) => setFirstName(event.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Control
                  type="text"
                  placeholder={`${user.lastName}`}
                  onChange={(event) => setLastName(event.target.value)}
                />
              </Form.Group>
            </RowS>

            <ButtonS type="submit">
              Editar
            </ButtonS>
          </Form>
        </ContainerS>
      )}
      {showError && (
        <Alert variant="danger">
          <Alert.Heading>Faça login!</Alert.Heading>
        </Alert>
      )}
    </Section>
  );
}