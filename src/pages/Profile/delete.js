import axios from 'axios';
import styled from 'styled-components';
import { useEffect } from 'react';
import { DeleteArea } from '../../components/Button';
import { Section } from '../../components/ContainerForm';

const Title = styled.h2`
  padding: 2rem 0;
  color: #2b222c;
`;

export const Delete = () => {
  useEffect(() => {
    const token = localStorage.token;

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios.delete('/user', config);
  }, []);

  return (
    <Section>
      <DeleteArea>
        <Title>Delete</Title>
        <span>O Usuario Foi Deletado com Sucesso.</span>
        <a href='/login'>Entre</a>
        <a href='/register'>Cadastre-se</a>
      </DeleteArea>
    </Section>
  );
};
