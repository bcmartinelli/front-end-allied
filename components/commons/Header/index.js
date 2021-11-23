import React from 'react';
import { useRouter } from 'next/router';
import { HeaderTag } from './styles';

const Header = () => {
  const router = useRouter();

  return (
    <HeaderTag onClick={() => router.push('/')}>
      <img src="/images/allied-logo.png" alt="Logo Allied" />
      <h1>Allied Connect</h1>
    </HeaderTag>
  );
};

export default Header;
