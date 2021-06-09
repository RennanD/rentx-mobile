import React from 'react';

import { RectButtonProps } from 'react-native-gesture-handler';

import { useTheme } from 'styled-components';

import { Container, ButtonText } from './styles';

interface ButtonProps extends RectButtonProps {
  children: string;
  color?: string;
}

export function Button({ children, color, ...rest }: ButtonProps): JSX.Element {
  const theme = useTheme();

  return (
    <Container color={color || theme.colors.main} {...rest}>
      <ButtonText>{children}</ButtonText>
    </Container>
  );
}
