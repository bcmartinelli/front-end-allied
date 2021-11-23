import styled from "styled-components";
import Button from '@mui/material/Button';
import { orange, mediumOrange, white, darkBlue, mediumBlue } from '@themes/colors'

export const ButtonTag = styled(Button)`
  width: 100%;
  max-width: 200px;
  margin-top: 2rem;
  font-weight: 600;
  ${props => {
    if(props.variant === 'contained') {
      return (`
        color: ${white};
        background: ${orange};
        width: 100%;
        &:hover {
          background: ${mediumOrange};
        }
      `);
    } else {
      return (`
        border-color: ${darkBlue};
        color: ${darkBlue};
        &:hover {
          color: ${mediumBlue};
          border-color: ${mediumBlue};
        }
      `);
    }
  }};
`;