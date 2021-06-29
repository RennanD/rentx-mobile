import React from 'react';
import { ActivityIndicator } from 'react-native';

import { RectButtonProps } from 'react-native-gesture-handler';

import { useTheme } from 'styled-components';

import { Container, ButtonText } from './styles';

interface ButtonProps extends RectButtonProps {
  children: string;
  color?: string;
  loading?: boolean;
}

export function Button({
  children,
  color,
  loading,
  enabled = true,
  ...rest
}: ButtonProps): JSX.Element {
  const theme = useTheme();

  return (
    <Container
      enabled={enabled}
      color={color || theme.colors.main}
      style={{
        opacity: enabled ? 1 : 0.5,
      }}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator
          size={24}
          color={theme.colors.background_secondary}
        />
      ) : (
        <ButtonText>{children}</ButtonText>
      )}
    </Container>
  );
}
