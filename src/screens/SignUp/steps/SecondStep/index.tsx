import React, { useState } from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';
import { useTheme } from 'styled-components';

import { useNavigation, useRoute } from '@react-navigation/native';

import { BackButton } from '../../../../components/BackButton';
import { Bullet } from '../../../../components/Bullet';
import { Button } from '../../../../components/Button';
import { InputPassword } from '../../../../components/Forms/InputPassword';

import {
  Container,
  Header,
  StepsContainer,
  Title,
  SubTitle,
  Form,
  FormStepTitle,
} from '../../styles';

type RouteParams = {
  user: {
    name: string;
    email: string;
    driverLicense: string;
  };
};

export function SecondStep(): JSX.Element {
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const theme = useTheme();

  const navigation = useNavigation();
  const route = useRoute();

  const { user } = route.params as RouteParams;

  function handleRegister() {
    if (!password) {
      Alert.alert('Erro', 'Senha obrigatória');
      return;
    }

    if (password !== passwordConfirmation) {
      Alert.alert('Erro', 'As senhas não conferem');
      return;
    }

    navigation.navigate('Confirmation', {
      title: 'Conta Criada!',
      subtitle: `Agora é só fazer login${'\n'}e aproveitar`,
      nextRoute: 'SignIn',
    });
  }

  function handleCloseKeyboard() {
    Keyboard.dismiss();
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={handleCloseKeyboard}>
        <Container>
          <Header>
            <BackButton />
            <StepsContainer>
              <Bullet />
              <Bullet active />
            </StepsContainer>
          </Header>

          <Title>Crie sua{'\n'}conta</Title>
          <SubTitle>Faça seu cadastro de{'\n'}forma rápida e fácil</SubTitle>

          <Form>
            <FormStepTitle>2. Credenciais</FormStepTitle>

            <InputPassword
              value={password}
              onChangeText={setPassword}
              icon="lock"
              placeholder="Senha"
            />

            <InputPassword
              value={passwordConfirmation}
              onChangeText={setPasswordConfirmation}
              icon="lock"
              placeholder="Confirmar senha"
            />
          </Form>

          <Button onPress={handleRegister} color={theme.colors.success}>
            Confirmar
          </Button>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
