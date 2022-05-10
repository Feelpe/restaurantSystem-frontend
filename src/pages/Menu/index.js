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
  const [option, setOption] = useState([]);

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImage] = useState('');
  const [options, setOptions] = useState([]);
  const [name, setNewOption] = useState('');

  const [show, setShow] = useState(false);
  const [over, setOver] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const overClose = () => setOver(false);
  const overShow = () => setOver(true);

  const menuAdd = (event) => {
    event.preventDefault();

    const inputMenu = {
      title,
      price,
      description,
      imageUrl,
      options,
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

  const getMenu = async () => {
    await axios.get('/menu').then((response) => {
      setMenu(response.data);
    });
  };

  const getOption = async () => {
    await axios.get('/option').then((response) => {
      setOption(response.data);
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

    getMenu();
    getOption();
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
                type="text"
                placeholder="Imagem"
                onChange={(event) => setImage(event.target.value)}
              />
            </Form.Group>
            <Row>
              <Row className="ms-3 me-3" as={Col}>
                <Form.Select onChange={(event) => setOptions(event.target.value)}>
                  <option>Característica</option>
                  {option.map((item) => (
                    <option 
                      variant="top" 
                      key={item.id}
                      value={item.id} 
                    >
                      {item.name}
                    </option>
                  ))}
                </Form.Select>
              </Row>
              <Button 
                onClick={overShow} 
                as={Col}
                sm="3"
                className="me-4"
              >
                Criar uma Opção
              </Button>
            </Row>
            <Button className="m-3" type='submit'>Adicionar</Button>
          </Form>
        </Modal.Body>
      </Modal>
      <Modal show={over} onHide={overClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar opções para Menu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={optionAdd}>
            <Form.Group className="mb-2">
              <Form.Control
                type="text"
                placeholder="Digite uma opção"
                onChange={(event) => setNewOption(event.target.value)}
              />
            </Form.Group>
            <Button type='submit'>Enviar</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <small>A opção é uma tag ou caracteristica para um prato ou varios.</small>
        </Modal.Footer>
      </Modal>
    </>
  );
};
