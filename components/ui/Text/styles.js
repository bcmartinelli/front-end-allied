import styled from "styled-components";
import { darkBlue } from '@themes/colors';

export const Title = styled.h1`
  font-size: 1rem;
  color: ${darkBlue};
  text-align: ${props => props.textalign || 'left'};
`;

export const TitleHead = styled.h1`
  font-size: 1.3rem;
  color: ${darkBlue};
  text-align: ${props => props.textalign || 'left'};
`;
