import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
`;

export const ErrorContainer = styled.View`
  flex-direction: row;
  align-items: center;

  margin-bottom: 5px;
`;

export const Error = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.josefin};
  color: #ffffff;
  margin-left: 5px;
`;
