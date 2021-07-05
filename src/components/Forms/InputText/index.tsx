import React from 'react';
import { TextInputProps } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { useTheme } from 'styled-components';
import { Container, IconContainer, Input } from './styles';

interface InputTextProps extends TextInputProps {
  icon: React.ComponentProps<typeof Feather>['name'];
  // name: string;
}

export function InputText({ icon, ...rest }: InputTextProps): JSX.Element {
  const theme = useTheme();

  return (
    <Container>
      <IconContainer>
        <Feather name={icon} size={24} color={theme.colors.text_detail} />
      </IconContainer>
      <Input {...rest} />
    </Container>
  );
}
