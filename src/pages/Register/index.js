import { ContainerS, Section } from '../../components/ContainerForm';
import { PageTitle } from '../../components/PageTitle';
import { RowS } from '../../components/ContainerForm';
import { ButtonS } from '../../components/Button';
import { Form, Col } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';

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
          <RowS>
            <Form.Group as={Col}>
              <Form.Control 
                type='email' 
                placeholder='Email' 
                onChange={(event) => setEmail(event.target.value)} 
              />
            </Form.Group>
          </RowS>

          <RowS>
            <Form.Group as={Col}>
              <Form.Control
                type="text"
                placeholder="Nome"
                onChange={(event) => setFirstName(event.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Control
                type="text"
                placeholder="Sobrenome"
                onChange={(event) => setLastName(event.target.value)}
              />
            </Form.Group>
          </RowS>

          <RowS>
            <Form.Group as={Col}>
              <Form.Control
                type="password"
                placeholder="Senha"
                onChange={(event) => setPassword(event.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Control
                type="password"
                placeholder="Confirmação da senha"
                onChange={(event) => setPasswordConfirmation(event.target.value)}
              />
            </Form.Group>
          </RowS>

          <ButtonS type="submit">
            Criar
          </ButtonS>
        </Form>
      </ContainerS>
    </Section>
  )
}