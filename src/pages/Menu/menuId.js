import axios from "axios";
import Modal from 'react-bootstrap/Modal';
import { Button, Form, Col, Row } from 'react-bootstrap';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { ContainerColumn, Section } from '../../components/container';
import { CardL, CardTitle, Title, CardIcon } from '../../components/card';
import { ButtonW, NavButton, Table, Trash, Edit } from '../../components/button';

export const MenuId = () => {
  const { id } = useParams();
  const [prato, setPrato] = useState([]);
  const [option, setOption] = useState([]);
  
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImage] = useState('');
  const [menu, setMenu] = useState('');
  const [options, setOptions] = useState([]);

  const [table, setTable] = useState(false);
  const [edit, setEdit] = useState(false);
  const [trash, setTrash] = useState(false);

  const tableClose = () => setTable(false);
  const tableShow = () => setTable(true);
  const editClose = () => setEdit(false);
  const editShow = () => setEdit(true);
  const trashClose = () => setTrash(false);
  const trashShow = () => setTrash(true);

  useEffect(() => {
    const getMenu = async () => {
      await axios.get(`/menu/${id}`).then((response) => {
        setPrato(response.data)
      });
    };

    setMenu(prato.id);
    getMenu();
    getOption();
  }, [id, prato.id]);

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
  const menuEdit = (event) => {
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
      .patch('/menu', inputMenu, config)
      .then((response) => {
        console.log(response.message);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const menuDel = (event) => {
    event.preventDefault();
    
    const token = localStorage.token;

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios
      .delete('/mesa', config)
      .then((response) => {
        console.log(response.message);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const getOption = async () => {
    await axios.get('/option').then((response) => {
      setOption(response.data);
    });
  };

  return(
    <Section>
      <ContainerColumn>
        <CardTitle>
          <Title>{`${prato.title}`}</Title>
          <NavButton>
            <ButtonW onClick={tableShow}>
              <Table />
            </ButtonW>
            <ButtonW onClick={editShow}>
              <Edit />
            </ButtonW>
            <ButtonW onClick={trashShow}>
              <Trash />
            </ButtonW>
          </NavButton>
        </CardTitle>
        <CardL>
          <CardIcon>
            {`Descrição: ${prato.description}`}
          </CardIcon>
          <CardIcon>
            {`R$ ${prato.price}`}
          </CardIcon>
          <CardIcon>
            <CardIcon.Img variant="top" src={prato.imageUrl} />
          </CardIcon>
        </CardL>
      </ContainerColumn>
      <Modal show={table} onHide={tableClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Mesa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Criar mesa com o prato "{prato.title}"?
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={mesaAdd}>Sim</Button>
        </Modal.Footer>
      </Modal>
      <Modal show={edit} onHide={editClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Editar Prato</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={menuEdit}>
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
            </Row>
            <Button className="m-3" type='submit'>Adicionar</Button>
          </Form>
        </Modal.Body>
      </Modal>
      <Modal show={trash} onHide={trashClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Excluir Prato</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Quer mesmo excluir o prato?
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={menuDel}>Enviar</Button>
        </Modal.Footer>
      </Modal>  
    </Section>
  );
};