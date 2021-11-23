import styled from "styled-components";
import { darkBlue } from '@themes/colors'

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Name = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: ${darkBlue};
  margin: 0.5rem auto 0.9rem;
`;

export const Description = styled.span`
  font-size: 0.9rem;
  text-align: center;
`;
