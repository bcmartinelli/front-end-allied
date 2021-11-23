import React from "react";
import { Title, TitleHead } from './styles';

const Text = ({ variant, textalign, children }) => {
  const component = () => {
    switch(variant) {
      case 'body':
        return <Text textalign={textalign}>{children}</Text>
      case 'heading':
        return <Title textalign={textalign}>{children}</Title>
      case 'pageHeading':
        return <TitleHead textalign={textalign}>{children}</TitleHead>
      case 'sectionHeading':
        return <TitleSection textalign={textalign}>{children}</TitleSection>
      default:
        return <Text>{children}</Text>
    }
  }

  return component();
};

export default Text;