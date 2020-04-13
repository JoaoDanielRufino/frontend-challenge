import React from 'react';

import { Container } from './styles';

import logo from '../../assets/2.Logos/logo.svg';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="logo" />
    </Container>
  );
}