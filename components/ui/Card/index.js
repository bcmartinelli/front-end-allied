import React from "react";
import { CardTag } from './styles';

const Card = ({ children }) => {
  return (
    <CardTag>
      {children}
    </CardTag>
  );
};

export default Card;