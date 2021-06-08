import React from 'react';
import { BorderlessButtonProps } from 'react-native-gesture-handler';

import { MaterialIcons } from '@expo/vector-icons';

import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';

import { Container } from './styles';

interface BackButtonProps extends BorderlessButtonProps {
  color?: string;
}

export function BackButton({ color, ...rest }: BackButtonProps): JSX.Element {
  const theme = useTheme();

  return (
    <Container {...rest}>
      <MaterialIcons
        name="chevron-left"
        size={RFValue(24)}
        color={color || theme.colors.text}
      />
    </Container>
  );
}
