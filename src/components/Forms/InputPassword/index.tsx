import React, { useState } from 'react';
import { TextInputProps } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { useTheme } from 'styled-components';
import {
  Container,
  IconContainer,
  Input,
  ChangePasswordVisibilyButton,
} from './styles';

interface InputPasswordProps extends TextInputProps {
  icon: React.ComponentProps<typeof Feather>['name'];
  // name: string;
}

export function InputPassword({
  icon,
  value,
  ...rest
}: InputPasswordProps): JSX.Element {
  const [showPassword, setShowPassword] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const theme = useTheme();

  function handleChangePasswordVisibity() {
    setShowPassword(oldState => !oldState);
  }

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
      <Input
        secureTextEntry={!showPassword}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        autoCorrect={false}
        {...rest}
      />
      <ChangePasswordVisibilyButton onPress={handleChangePasswordVisibity}>
        <Feather
          name={!showPassword ? 'eye-off' : 'eye'}
          size={24}
          color={theme.colors.text_detail}
        />
      </ChangePasswordVisibilyButton>
    </Container>
  );
}
