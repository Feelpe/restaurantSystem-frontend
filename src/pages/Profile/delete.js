import { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { PageTitle } from '../../components/PageTitle/upTitle';
import { DeleteArea } from '../../components/Button/delete';
import axios from 'axios';

export const Delete = () => {
  const [logged, setLogged] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const token = localStorage.token;

    if (!token) {
      setLogged(false);
      setShowError(true);
    }

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios.delete('/user', config).then((response) => {
      setLogged(true);
    });
  }, [logged]);

  return (
    <DeleteArea>
      {logged && (
        <>
          <PageTitle />
          <span>O Usuario Foi Deletado com Sucesso.</span>
          <a href='/login'>Entre</a>
          <a href='/register'>Cadastre-se</a>

        </>
      )}
      {showError && (
        <Alert variant="danger">
          <Alert.Heading>Erro!</Alert.Heading>
        </Alert>
      )}
    </DeleteArea>
  );
};
