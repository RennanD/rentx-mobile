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
  ...rest
}: InputPasswordProps): JSX.Element {
  const [showPassword, setShowPassword] = useState(false);

  const theme = useTheme();

  function handleChangePasswordVisibity() {
    setShowPassword(oldState => !oldState);
  }

  return (
    <Container>
      <IconContainer>
        <Feather name={icon} size={24} color={theme.colors.text_detail} />
      </IconContainer>
      <Input secureTextEntry={!showPassword} {...rest} />
      <ChangePasswordVisibilyButton onPress={handleChangePasswordVisibity}>
        <Feather
          name={showPassword ? 'eye-off' : 'eye'}
          size={24}
          color={theme.colors.text_detail}
        />
      </ChangePasswordVisibilyButton>
    </Container>
  );
}
