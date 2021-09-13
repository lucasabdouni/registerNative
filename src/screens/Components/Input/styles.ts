import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';

import { Feather } from '@expo/vector-icons';

interface contentProps {
  font: 'nunito' | 'poppins' | 'roboto';
  error: string;
}

export const Container = styled(TextInput)<contentProps>`
  width: 100%;
  padding: 14px 18px;
  margin-bottom: 20px;

  background-color: #ffffff;

  border-radius: 5px;
  border-right-color: #ffff00;
  border-right-width: 26px;
  color: #808080;

  ${({ font }) =>
    font === 'nunito' &&
    css`
      font-family: ${({ theme }) => theme.fonts.nunito};
    `}

  ${({ font }) =>
    font === 'poppins' &&
    css`
      font-family: ${({ theme }) => theme.fonts.poppins};
    `}

  ${({ font }) =>
    font === 'roboto' &&
    css`
      font-family: ${({ theme }) => theme.fonts.roboto};
    `}

    ${({ error }) =>
    error &&
    css`
      border-right-color: red;
    `}
`;
