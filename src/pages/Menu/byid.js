import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { ContainerColumn, Section } from '../../components/CardContainer';
import { CardL, CardTitle, Title } from '../../components/Card';
import { ButtonW, NavButton, Table } from '../../components/Button';

export const Prato = () => {
  const { id } = useParams();
  const [prato, setPrato] = useState([]);
  const [menu, setMenu] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const mesaAdd = (event) => {
    event.preventDefault();

    const inputMesa = {
      menu,
    };
    
    const token = localStorage.token;

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios
      .post('/mesa', inputMesa, config)
      .then((response) => {
        console.log(response.message);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    const getMenu = async () => {
      await axios.get(`/menu/${id}`).then((response) => {
        setPrato(response.data)
      });
    };

    setMenu(prato.id)
    getMenu();
  }, [id, prato.id]);

  return(
    <Section>
      <ContainerColumn>
        <CardTitle>
          <Title>{`${prato.title}`}</Title>
          <NavButton>
            <ButtonW onClick={handleShow}>
              <Table />
            </ButtonW>
            <ButtonW onClick={handleShow}>
              <Table />
            </ButtonW>
            <ButtonW onClick={handleShow}>
              <Table />
            </ButtonW>
          </NavButton>
        </CardTitle>
        <CardL>
          {`${prato.price}`}
          {`${prato.description}`}
          {`${prato.imageUrl}`}
        </CardL>
      </ContainerColumn>
    </Section>
  );
};