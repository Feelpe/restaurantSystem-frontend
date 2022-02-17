import styled from 'styled-components';
import { ButtonE } from '../../components/Button/edit';
import { ButtonD } from '../Button/delete';

const Title = styled.h2`
  padding: 2rem 0;
  color: #2b222c;
`;

const NavBarE = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 45rem;
  padding: 0rem;
  margin: 0rem;
`;

const NavButton = styled.div`
  padding: 0rem;
  margin: 0rem;
`;

export const PageTitle = () => {
  return(
    <NavBarE>
      <Title>Conta</Title>
      <NavButton>
        <ButtonE />
        <ButtonD />
      </NavButton>
    </NavBarE>
  )
}