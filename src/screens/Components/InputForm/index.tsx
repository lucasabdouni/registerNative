import React from 'react';
import { TextInputProps } from 'react-native';
import { Control, Controller } from 'react-hook-form';

import { Feather } from '@expo/vector-icons';

import { Input } from '../Input';

import { Container, Error, ErrorContainer } from './styles';

interface Props extends TextInputProps {
  control: Control;
  name: string;
  error: string;
  font: 'nunito' | 'poppins' | 'roboto';
}

export function InputForm({ control, name, error, font, ...rest }: Props) {
  return (
    <Container>
      {error && (
        <ErrorContainer>
          <Feather name="alert-triangle" size={24} color="red" />
          <Error>{error}</Error>
        </ErrorContainer>
      )}
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            onChangeText={onChange}
            value={value}
            font={font}
            error={error}
            {...rest}
          />
        )}
        name={name}
      />
    </Container>
  );
}
