import axios from 'axios';
import { useState, useEffect } from 'react';

import { Button, Container, Form, Col, Row } from 'react-bootstrap';
import { PageTitle } from '../../components/title';
// import Modal from 'react-bootstrap/Modal';

export const MenuAdd = () => {
	const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImage] = useState('');
	const [option, setOption] = useState('');
	
  const [options, setOptions] = useState([]);
  // const [newOption, setNewOption] = useState('');
  const [show, setShow] = useState(false);
	// const handleClose = () => setShow(false);
	
	const menuAdd = (event) => {
    event.preventDefault();

    const inputMenu = {
      title,
      price,
      description,
      imageUrl,
      option,
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

  const getOption = async () => {
    await axios.get('/option').then((response) => {
      setOptions(response.data);
    });
  };

	// const optionAdd = (event) => {
  //   event.preventDefault();

  //   const inputOption = {
  //     newOption,
  //   };
    
  //   axios
  //     .post('/option', inputOption)
  //     .then((response) => {
  //       console.log(response.message);
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // };

	useEffect(() => {
		getOption();
	}, []);

	return(
		<Container>
			<PageTitle>Criar uma Opção para o menu</PageTitle>
			<Form onSubmit={menuAdd}>
				<Form.Group className="m-1">
					<Form.Control 
						type='text' 
						placeholder='titulo' 
						onChange={(event) => setTitle(event.target.value)} 
					/>
				</Form.Group>
				<Form.Group className="m-1">
					<Form.Control
						type="text"
						placeholder="Preço"
						onChange={(event) => setPrice(event.target.value)}
					/>
				</Form.Group>
				<Form.Group className="m-1">
					<Form.Control
							type="text"
							placeholder="Descrição"
							onChange={(event) => setDescription(event.target.value)}
					/>
				</Form.Group>
				<Form.Group className="m-1">
					<Form.Control
							type="text"
							placeholder="Imagem"
							onChange={(event) => setImage(event.target.value)}
					/>
				</Form.Group>
				<Form.Select 
					className="m-1" 
					onChange={(event) => setOption(event.target.value)}
				>
					<option>Característica</option>
					{options.map((item) => (
						<option 
							variant="top" 
							key={item.id}
							value={item.id} 
						>
							{item.name}
						</option>
					))}
				</Form.Select>
				<Button 
					onClick={show} 
					as={Col}
					sm="3"
					className="m-1"
				>
					Criar uma Opção
				</Button>
				<Button className="m-1" type='submit'>Adicionar</Button>
			</Form>
		</Container>
	)
}

/* <Modal show={over} onHide={overClose} centered>
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
</Modal> */
