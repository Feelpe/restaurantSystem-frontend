import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import { Button, Container, Form, Col, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Slider } from '../../components/Slider/index';
import { info } from '../../constants/slider';
import { Search } from '../../components/Search';
import { CardS } from '../../components/Card';
import { CardContainer } from '../../components/CardContainer';
import { ButtonAdd } from '../../components/Button';

export const Menu = () => {
  const [logged, setLogged] = useState(false);
  const [menu, setMenu] = useState([]);
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [name, setOption] = useState('');
  // const [options, setOptions] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const menuAdd = (event) => {
    event.preventDefault();

    const inputMenu = {
      title,
      price,
      description,
      image,
    };
    
    const token = localStorage.token;

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios
      .post('/menu', inputMenu, config)
      .then((response) => {
        console.log(response.message);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const optionAdd = (event) => {
    event.preventDefault();

    const inputOption = {
      name,
    };
    
    axios
      .post('/option', inputOption)
      .then((response) => {
        console.log(response.message);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const getData = async () => {
    await axios.get('/menu').then((response) => {
      setMenu(response.data);
    });
  };

  useEffect(() => {
    const token = localStorage.token;

    if (!token) {
      setLogged(false);
    } 
    else {
      setLogged(true)
    }

    getData();
  }, []);

  return (
    <>
      <Slider data={info} />
      <Search />
      <Container>
        <CardContainer>
          {logged && (
            <ButtonAdd onClick={handleShow}></ButtonAdd>
          )}
          {menu.map((item) => (
            <a href={`/prato/${item.id}`} key={item.id}>
              <CardS>
                <CardS.Img variant="top" src={item.imageUrl} />
              </CardS>
            </a>
          ))}
        </CardContainer>
      </Container>
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Prato ao Menu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={menuAdd}>
            <Row className="m-1">
              <Form.Group as={Col}>
                <Form.Control 
                  type='text' 
                  placeholder='titulo' 
                  onChange={(event) => setTitle(event.target.value)} 
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Control
                  type="text"
                  placeholder="Preço"
                  onChange={(event) => setPrice(event.target.value)}
                />
              </Form.Group>
            </Row>
            <Form.Group className="m-3">
              <Form.Control
                type="text"
                placeholder="Descrição"
                onChange={(event) => setDescription(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="m-3">
              <Form.Control
                type="imageUrl"
                placeholder="Imagem"
                onChange={(event) => setImage(event.target.value)}
              />
            </Form.Group>
            <Row>
              <Row className="ms-3" as={Col}>
                <Form.Select>
                  <option>option</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Row>
              <Form.Group className="me-3" as={Col}>
                <Form.Control
                  type="imageUrl"
                  placeholder="Imagem"
                  onChange={(event) => setOption(event.target.value)}
                />
              </Form.Group>
            </Row>
            <Button className="m-3" type='submit'>Adicionar</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
