import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { useTheme } from 'styled-components';

import { Ionicons } from '@expo/vector-icons';

import { Container } from './styles';

type FloatButtonProps = RectButtonProps;

export function FloatButton({ ...rest }: FloatButtonProps): JSX.Element {
  const theme = useTheme();

  return (
    <Container {...rest}>
      <Ionicons
        name="ios-car-sport"
        size={32}
        color={theme.colors.background_secondary}
      />
    </Container>
  );
}
