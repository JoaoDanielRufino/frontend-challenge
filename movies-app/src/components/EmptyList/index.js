import React from 'react';

import { IllustrationContainer } from './styles';

import illustration from '../../assets/2.Illustrations/illustration-empty-state.png';

export default function EmptyList() {
  return (
    <IllustrationContainer>
      <img src={illustration} alt="illustration" />
      <span>Don't know what to search?</span>
      <span>Here's an offer you can't refuse</span>
    </IllustrationContainer>
  );
}