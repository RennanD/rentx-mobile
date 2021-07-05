import React, { useState } from 'react';
import { TextInputProps } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { useTheme } from 'styled-components';
import { Container, IconContainer, Input } from './styles';

interface InputTextProps extends TextInputProps {
  icon: React.ComponentProps<typeof Feather>['name'];
  // name: string;
}

export function InputText({
  icon,
  value,
  ...rest
}: InputTextProps): JSX.Element {
  const [isFilled, setIsFilled] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const theme = useTheme();

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);

    if (value) {
      setIsFilled(true);
    }
  }

  return (
    <Container focused={isFocused}>
      <IconContainer>
        <Feather
          name={icon}
          size={24}
          color={
            isFocused || isFilled ? theme.colors.main : theme.colors.text_detail
          }
        />
      </IconContainer>
      <Input onFocus={handleInputFocus} onBlur={handleInputBlur} {...rest} />
    </Container>
  );
}
