import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Title } from './styles';

interface ConfirmButtonProps extends RectButtonProps {
  children: string;
}

export function ConfirmButton({
  children,
  ...rest
}: ConfirmButtonProps): JSX.Element {
  return (
    <Container {...rest}>
      <Title>{children}</Title>
    </Container>
  );
}
