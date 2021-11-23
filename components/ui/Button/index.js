import React from "react";
import { ButtonTag } from './styles';

const Button = ({ variant = 'contained', onClick = null, disabled, type = 'text', children }) => (
  <ButtonTag 
    disabled={disabled}
    variant={variant}
    type={type}
    onClick={onClick}
  >
    {children}
  </ButtonTag>
);

export default Button;