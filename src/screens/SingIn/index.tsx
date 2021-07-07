import React, { useState } from 'react';
import {
  StatusBar,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';

import * as Yup from 'yup';

import { useNavigation } from '@react-navigation/native';

import { useTheme } from 'styled-components';
import { Container, Header, Form, SubTitle, Title, Footer } from './styles';

import { Button } from '../../components/Button';
import { InputPassword } from '../../components/Forms/InputPassword';
import { InputText } from '../../components/Forms/InputText';

export function SingIn(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const theme = useTheme();
  const navigation = useNavigation();

  function handleCloseKeyboard() {
    Keyboard.dismiss();
  }

  async function handleSignIn() {
    const schema = Yup.object().shape({
      password: Yup.string().required('Senha obrigatória.'),
      email: Yup.string()
        .email('Digite um email válido')
        .required('E-mail obrigatório.'),
    });

    try {
      await schema.validate({ email, password }, { abortEarly: false });

      navigation.navigate('Home');
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert('Erro', error.message);
        return;
      }

      Alert.alert('Erro', 'Tente novamente');
    }
  }

  function handleAddNewAccount() {
    navigation.navigate('SignUp');
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={handleCloseKeyboard}>
        <Container>
          <StatusBar
            barStyle="dark-content"
            translucent
            backgroundColor="transparent"
          />
          <Header>
            <Title>Estamos {'\n'}quase lá</Title>
            <SubTitle>
              Faça seu login para começar{'\n'}uma experiência incrível
            </SubTitle>
          </Header>

          <Form>
            <InputText
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              autoCorrect={false}
              icon="mail"
              placeholder="E-mail"
              keyboardType="email-address"
            />
            <InputPassword
              value={password}
              onChangeText={setPassword}
              icon="lock"
              placeholder="Senha"
            />
          </Form>

          <Footer>
            <Button onPress={handleSignIn}>Login</Button>
            <Button
              color={theme.colors.background_secondary}
              light
              onPress={handleAddNewAccount}
            >
              Cirar conta gratuita
            </Button>
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
