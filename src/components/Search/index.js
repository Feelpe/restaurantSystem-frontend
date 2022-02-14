import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { Form, FormControl, Container } from 'react-bootstrap';

const ContainerS = styled.div`
  background-color: #f8f8f8;
  padding: 4rem 0;

  button {
    background-color: #f8f8f8;
    border: none;
    font-size: 1.5rem;
    color: #017bff;
  }
`;

export const Search = () => {
  return (
    <ContainerS>
      <Container>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Encontre um Item do Cardápio"
            className="me-2"
            aria-label="Search"
          />
          <button type="submit">
            <FaSearch />
          </button>
        </Form>
      </Container>
    </ContainerS>
  );
};
