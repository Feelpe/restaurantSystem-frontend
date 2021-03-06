import axios from "axios";
import { useState, useEffect } from "react";
import { ContainerColumn, Section } from '../../components/container';
import { CardL, CardTitle, Title } from '../../components/card';

export const Mesas = () => {
  const [mesa, setMesa] = useState([]);

  const getData = async () => {
    await axios.get('/mesa').then((response) => {
      setMesa(response.data)
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return(
    <Section>
      <ContainerColumn>
        <CardTitle>
          <Title>Mesas</Title>
        </CardTitle>
        {mesa.map((item) => (
          <a href="!#" key={item.id}>
            <CardL>
              <p>{item.start}</p>
              <p>{item.end}</p>
            </CardL>
          </a>
        ))}
      </ContainerColumn>
    </Section>
  );
};