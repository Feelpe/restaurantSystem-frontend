import axios from 'axios';
import { useState, useEffect } from 'react';
import { Form, Col, Alert, Row } from 'react-bootstrap';
import { PageTitle } from '../../components/title';
import { ContainerS, Section } from '../../components/container';
import { ButtonS } from '../../components/button';

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
            <Form.Group as={Col} className="m-2">
              <Form.Control 
                type='email' 
                placeholder={`${user.email}`}
                onChange={(event) => setEmail(event.target.value)} 
              />
            </Form.Group>

            <Row>
              <Form.Group as={Col} className="m-2">
                <Form.Control
                  type="text"
                  placeholder={`${user.firstName}`}
                  onChange={(event) => setFirstName(event.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} className="m-2">
                <Form.Control
                  type="text"
                  placeholder={`${user.lastName}`}
                  onChange={(event) => setLastName(event.target.value)}
                />
              </Form.Group>
            </Row>

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