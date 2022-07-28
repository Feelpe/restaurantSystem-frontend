import styled from 'styled-components';
import { Navbar } from 'react-bootstrap';
import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
} from 'react-icons/fa';

const Footer = styled(Navbar)`
  background-color: #5e4352;
  color: #fff;
  padding: 0.3rem;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Social = styled.div`
  font-size: 2rem;

  a {
    color: #f2d974;
    margin: 0.25rem;
    text-decoration: none;
  }
`;

export const FooterS = () => {
  return (
    <Footer expand="lg">
      <Social>
        <a href="!#">
          <FaInstagramSquare />
        </a>
        <a href="!#">
          <FaFacebookSquare />
        </a>
        <a href="!#">
          <FaGithubSquare />
        </a>
        <a href="!#">
          <FaLinkedin />
        </a>
      </Social>
    </Footer>
  );
};
