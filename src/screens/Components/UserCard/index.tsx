import React from 'react';

import { Container, TextCard, IconCard, Footer, Info } from './styles';

import { TouchableOpacityProps } from 'react-native';

interface UserProps {
  name: string;
  email: string;
  telefone: number;
}

interface Props extends TouchableOpacityProps {
  data: UserProps;
}

export function UserCard({ data, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Footer>
        <Info>
          <IconCard name="user" />
          <TextCard>{data.name}</TextCard>
        </Info>
        <Info>
          <IconCard name="mail" />
          <TextCard>{data.email}</TextCard>
        </Info>
        <Info>
          <IconCard name="phone" />
          <TextCard>{data.telefone}</TextCard>
        </Info>
      </Footer>
    </Container>
  );
}
