import axios from 'axios';
import { useState, useEffect } from 'react';

import { Slider } from '../../components/slider';
import { info } from '../../constants/slider';
import { Search } from '../../components/search';
import { CardS } from '../../components/card';
import { CardContainer } from '../../components/container';
import { ButtonAdd } from '../../components/button';

export const Menus = () => {
  // const [logged, setLogged] = useState(false);
  const [menu, setMenu] = useState([]);

  const getMenu = async () => {
    await axios.get('/menu').then((response) => {
      setMenu(response.data);
    });
  };

  useEffect(() => {
    // const token = localStorage.token;

    // if (!token) {
    //   setLogged(false);
    // } 
    // else {
    //   setLogged(true)
    // }

    getMenu();
  }, []);

  return (
    <>
      <Slider data={info} />
      <Search />
      <CardContainer>
        {/* {logged && (
          <ButtonAdd onClick={handleShow}></ButtonAdd>
        )} */}
        {menu.map((item) => (
          <a href={`/prato/${item.id}`} key={item.id}>
            <CardS>
              <CardS.Img variant="top" src={item.imageUrl} />
            </CardS>
          </a>
        ))}
      </CardContainer>
    </>
  );
};
