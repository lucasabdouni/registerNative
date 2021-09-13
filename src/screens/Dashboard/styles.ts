import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';

import { FlatList } from 'react-native';
import { userData } from '.';

export const Container = styled.View`
  flex: 1;

  background-color: #0d0d0d;
`;

export const Header = styled.View`
  margin-top: ${getStatusBarHeight() + RFValue(100)}px;
  margin-bottom: 48px;

  justify-content: center;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: ${RFValue(48)}px;
  font-family: ${({ theme }) => theme.fonts.josefin};
  color: #ffffff;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(28)}px;
  color: #ffff00;
`;

export const Form = styled.View`
  margin: 0 48px;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  margin-bottom: 50px;
`;

export const UserList = styled(FlatList).attrs({
  showsHorizontalScrollIndicator: false,
})``;

export const Lista = styled.View`
  margin-top: 30px;
  height: 100%;
`;
