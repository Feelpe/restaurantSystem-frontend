import styled from 'styled-components';
import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
} from 'react-icons/fa';

const Footer = styled.div`
  background-color: #c22557;
  color: #fff;
  padding: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  width: 100vw;
`;

const Social = styled.div`
  font-size: 2rem;

  a {
    color: #fff;
    margin: 0.25rem;
    text-decoration: none;
  }
`;

export const FooterS = () => {
  return (
    <Footer>
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
