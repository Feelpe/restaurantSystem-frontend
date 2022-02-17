import { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { PageTitle } from '../../components/PageTitle/upTitle';
import { CardContainer, CardUser, CardMini, CardColumn, ProfileArea, CardTitle } from '../../components/CardContainer'
import axios from 'axios';

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
        <CardContainer>
          <CardColumn>
            <CardTitle>
              <PageTitle />
            </CardTitle>
            <CardUser>
              <h2>{`${user.firstName} ${user.lastName}`}</h2>
              <span>{user.createdAt}</span>
            </CardUser>
          </CardColumn>
          <CardColumn>
            <CardMini>
            </CardMini>
            <CardMini>
            </CardMini>
          </CardColumn>
        </CardContainer>
      )}
      {showError && (
        <Alert variant="danger">
          <Alert.Heading>Faça login!</Alert.Heading>
        </Alert>
      )}
    </ProfileArea>
  );
};
