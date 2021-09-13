import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
  flex: 1;

  justify-content: center;

  margin: ${RFValue(15)}px ${RFValue(48)}px;
`;

export const Footer = styled.View`
  border-radius: 5px;
  background-color: white;
  padding: 15px;
`;

export const Info = styled.View`
  flex-direction: row;
`;

export const TextCard = styled.Text`
  color: #808080;
  margin-left: 10px;
`;

export const IconCard = styled(Feather)`
  color: #ffd700;
  font-size: 15px;
`;
