import styled, { css } from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

interface ContainerProps {
  color: string;
}

type ButtonTextProps = {
  light: boolean;
};

export const Container = styled(RectButton)<ContainerProps>`
  width: 100%;
  border-radius: 5px;

  padding: 19px;
  align-items: center;
  justify-content: center;

  margin-bottom: 8px;

  background-color: ${({ color }) => color};
`;

export const ButtonText = styled.Text<ButtonTextProps>`
  font-size: ${RFValue(15)}px;

  ${({ theme, light }) => css`
    font-family: ${theme.fonts.secondary_500};
    color: ${light ? theme.colors.title : theme.colors.background_secondary};
  `}
`;
