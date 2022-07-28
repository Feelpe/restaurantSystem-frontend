import { Form } from 'react-bootstrap';
import { PageTitle } from '../../components/title';
import { useState } from 'react';
import { ContainerS, Section } from '../../components/container';
import { ButtonS } from '../../components/button'
import axios from 'axios';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const inputLogin = {
      email,
      password,
    };

    axios
      .post('/auth', inputLogin)
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem('token', token);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <Section>
      <ContainerS>
        <PageTitle>Login</PageTitle>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="m-2" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Digite o email"
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="m-2" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Digite a senha"
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </Form.Group>
          <ButtonS type="submit">
            Entrar
          </ButtonS>
        </Form>
      </ContainerS>
    </Section>
  );
};
