import styled from "styled-components";
import { darkBlue } from '@themes/colors';

export const HeaderTag = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem auto;
  cursor: pointer;

  img {
    width: 90px;
    max-width: 90%;
  }
  
  h1 {
    color: ${darkBlue};
    font-size: 2rem;
  }
`;
