import React from 'react';

import { TextInputProps } from 'react-native';

import { Container } from './styles';

interface Props extends TextInputProps {
  font: 'nunito' | 'poppins' | 'roboto';
  error: string;
}

export function Input({ font, error, ...rest }: Props) {
  return <Container font={font} error={error} {...rest} />;
}
