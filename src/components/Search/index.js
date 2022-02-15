import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { Form, FormControl, Container } from 'react-bootstrap';
import { ButtonS } from '../Button';

const ContainerS = styled.div`
  background-color: #f8f8f8;
  padding: 2rem 0;
`;

export const Search = () => {
  return (
    <ContainerS>
      <Container>
        <Form className="d-flex align-items-center">
          <FormControl
            type="search"
            placeholder="Encontre um Item do Cardápio"
            className="me-2"
            aria-label="Search"
          />
          <ButtonS type="submit">
            <FaSearch />
          </ButtonS>
        </Form>
      </Container>
    </ContainerS>
  );
};
