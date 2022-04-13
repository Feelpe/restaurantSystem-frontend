import axios from "axios";
import { useState, useEffect } from "react";
import { Section } from "../../components/ContainerForm";
import { CardColumn, CardTitle, Title } from '../../components/CardContainer';
import { CardL } from '../../components/Card';

export const Mesa = () => {
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
      <CardColumn>
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
      </CardColumn>
    </Section>
  );
};