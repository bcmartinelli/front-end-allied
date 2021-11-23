import styled from "styled-components";
import {  Form } from 'redux-form'
import { white } from '@themes/colors'

const getMaxWidth = (maxWidth) => {
  switch(maxWidth) {
    case 'sm':
      return '570px';
    default:
      return '100%';
  }
};

export const FormTag = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: ${props => getMaxWidth(props.maxwidth)};
  background: ${white};
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0px 2px 2px 0px rgba(33,33, 33, 0.2);
`;