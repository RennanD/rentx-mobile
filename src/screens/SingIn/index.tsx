import React, { useState } from 'react';
import { StatusBar, KeyboardAvoidingView, Keyboard } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';
import { Button } from '../../components/Button';
import { InputPassword } from '../../components/Forms/InputPassword';
import { InputText } from '../../components/Forms/InputText';

import { Container, Header, Form, SubTitle, Title, Footer } from './styles';

export function SingIn(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const theme = useTheme();

  function handleCloseKeyboard() {
    Keyboard.dismiss();
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
            <Button enabled={false}>Login</Button>
            <Button color={theme.colors.background_secondary} light>
              Cirar conta gratuita
            </Button>
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
