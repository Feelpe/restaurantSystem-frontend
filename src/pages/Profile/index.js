import { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import axios from 'axios';
import styled from 'styled-components';

const ProfileArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 4rem;
`;

export const Profile = () => {
  const [user, setUser] = useState({});
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

    axios.get('/auth', config).then((response) => {
      setLogged(true);
      setUser(response.data);
    });
  }, [logged]);

  return (
    <ProfileArea>
      {logged && (
        <>
          <h2>{`${user.firstName} ${user.lastName}`}</h2>
          <span>{user.createdAt}</span>
        </>
      )}
      {showError && (
        <Alert variant="danger">
          <Alert.Heading>Faça login!</Alert.Heading>
        </Alert>
      )}
    </ProfileArea>
  );
};
