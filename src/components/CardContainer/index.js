import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5vh;
  flex-wrap: wrap;

  a {
    color: black;
    text-decoration: none;
  }
`;

export const CardColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 120vh;
`;

export const CardTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  height: 4rem;
  padding: 1rem;
  margin: 0.5rem;
  box-shadow: 0.2rem 0.2rem 2mm #00000030;
  border-radius: 0.7rem;
`;

export const Title = styled.h2`
  padding: 2rem 0;
  color: #2b222c;
`;

export const CardS = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: auto;
  height: 20rem;
  margin: 0.5rem;
  padding: 2rem;
  box-shadow: 0.2rem 0.2rem 2mm #00000030;
  border-radius: 1rem;
`;