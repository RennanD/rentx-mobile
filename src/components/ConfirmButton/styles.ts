import styled, { css } from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 80px;
  height: 56px;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.shape_bold};

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(15)}px;

  ${({ theme }) => css`
    color: ${theme.colors.shape};
    font-family: ${theme.fonts.secondary_500};
  `}
`;
