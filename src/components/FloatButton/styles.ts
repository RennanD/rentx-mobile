import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  height: ${RFValue(50)}px;
  width: ${RFValue(50)}px;

  align-items: center;
  justify-content: center;

  border-radius: ${RFValue(25)}px;

  position: absolute;

  bottom: 13px;
  right: 22px;

  background-color: ${({ theme }) => theme.colors.main};
`;
