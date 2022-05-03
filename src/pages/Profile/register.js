import axios from 'axios';
import { useState } from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import { ContainerS, Section } from '../../components/CardContainer';
import { PageTitle } from '../../components/PageTitle';
import { ButtonS } from '../../components/Button';

export const Register = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const inputUser = {
      email,
      firstName,
      lastName,
      password,
      passwordConfirmation,
    };

    axios
      .post('/user', inputUser)
      .then((response) => {
        console.log(response.message);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <Section>
      <ContainerS>
        <PageTitle>Criar uma Conta</PageTitle>
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Col} className="m-2">
            <Form.Control 
              type='email' 
              placeholder='Email' 
              onChange={(event) => setEmail(event.target.value)} 
            />
          </Form.Group>

          <Row>
            <Form.Group as={Col} className="m-2">
              <Form.Control
                type="text"
                placeholder="Nome"
                onChange={(event) => setFirstName(event.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} className="m-2">
              <Form.Control
                type="text"
                placeholder="Sobrenome"
                onChange={(event) => setLastName(event.target.value)}
              />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} className="m-2">
              <Form.Control
                type="password"
                placeholder="Senha"
                onChange={(event) => setPassword(event.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} className="m-2">
              <Form.Control
                type="password"
                placeholder="Confirmação da senha"
                onChange={(event) => setPasswordConfirmation(event.target.value)}
              />
            </Form.Group>
          </Row>

          <ButtonS type="submit" className="mb-4">
            Criar
          </ButtonS>
        </Form>
      </ContainerS>
    </Section>
  )
}