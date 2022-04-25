import axios from 'axios';
import { Slider } from '../../components/Slider/index';
import { Search } from '../../components/Search';
import { info } from '../../constants/slider';
import { Container } from 'react-bootstrap';
import { CardS, CardAdd } from '../../components/Card';
import { CardContainer } from '../../components/CardContainer';
import { useState, useEffect } from 'react';

import adicionar from "../../Assets/images/adicionar.png";

export const Menu = () => {
  const [menu, setMenu] = useState([]);

  const getData = async () => {
    await axios.get('/menu').then((response) => {
      setMenu(response.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Slider data={info} />
      <Search />
      <Container>
        <CardContainer>
          <CardAdd>
            <CardAdd.Img variant="top" src={adicionar} />
          </CardAdd>
          {menu.map((item) => (
            <a href="!#" key={item.id}>
              <CardS>
                <CardS.Img variant="top" src={item.imageUrl} />
              </CardS>
            </a>
          ))}
        </CardContainer>
      </Container>
    </>
  );
};
