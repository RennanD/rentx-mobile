import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex-direction: row;
  height: 56px;
  background-color: ${({ theme }) => theme.colors.background_secondary};

  margin-bottom: 8px;

  border-radius: 5px;
`;

export const IconContainer = styled.View`
  height: 56px;
  width: 56px;

  align-items: center;
  justify-content: center;

  border-right-width: 2px;
  border-right-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Input = styled(TextInput)`
  flex: 1;
  padding: 0 23px;

  font-size: ${RFValue(15)}px;

  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-family: ${theme.fonts.secondary_400};
  `}
`;
