import styled, { css } from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 109px;
  height: 92px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background_primary};

  padding: 16px;
  margin-bottom: 8px;
  border-radius: 5px;
`;

export const AcessoryName = styled.Text`
  font-size: ${RFValue(12)}px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary_500};
    color: ${theme.colors.text};
  `}
`;
