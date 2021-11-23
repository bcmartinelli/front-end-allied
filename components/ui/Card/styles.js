import styled from "styled-components";
import { white } from '@themes/colors'

export const CardTag = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 2rem;
  border-radius: 0.5rem;
  background: ${white};
  max-width: 370px;
  margin: 0 auto;
  box-shadow: 0px 2px 2px 0px rgba(33,33, 33, 0.2);
`;
